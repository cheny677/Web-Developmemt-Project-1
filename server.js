/* server.js for react-express-authentication */
"use strict";
const log = console.log;
const cloudinary = require("./cloudinary");

const express = require("express");
// starting the express server
const app = express();
const path = require("path");

const cors = require("cors");
app.use(cors());

// mongoose and mongo connection
const { mongoose } = require("./db/mongoose");
mongoose.set("useFindAndModify", false); // for some deprecation issues

// import the mongoose models
const { User } = require("./models/user");
const { Post, Comment } = require("./models/post");

// to validate object IDs
const { ObjectID } = require("mongodb");

// body-parser: middleware for parsing HTTP JSON body into a usable object
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// express-session for managing user sessions
const session = require("express-session");
app.use(bodyParser.urlencoded({ extended: true }));

function isMongoError(error) {
  // checks for first error returned by promise rejection if Mongo database suddently disconnects
  return (
    typeof error === "object" &&
    error !== null &&
    error.name === "MongoNetworkError"
  );
}

// middleware for mongo connection error for routes that need it
const mongoChecker = (req, res, next) => {
  // check mongoose connection established.
  if (mongoose.connection.readyState != 1) {
    log("Issue with mongoose connection");
    res.status(500).send("Internal server error");
    return;
  } else {
    next();
  }
};

// multipart middleware: allows you to access uploaded file from req.file
const multipart = require("connect-multiparty");
const multipartMiddleware = multipart();

// a POST route to *create* a post
app.post("/post_post/:username", multipartMiddleware, async (req, res) => {
  // create new post
  const username = req.params.username;
  const title = req.body.title;
  const text = req.body.text;
  // image upload to cloudinary and url push to post_images
  const uploader = async (path) => await cloudinary.uploads(path, "Images");

  // ----------------------------------------------------------------
  // 这是之前的代码， 从前端传来的files没有keys，我就没用这个代码
  // const files = [];
  // const fileKeys = Object.keys(req.files);
  // fileKeys.forEach(function (key) {
  //   files.push(req.files[key]);
  // });
  // ----------------------------------------------------------------
  // 这是我的方法创建files
  const files = req.files.files;
  // ----------------------------------------------------------------
  // console.log(files);
  let url_arr = [];
  for (const file of files) {
    const path = file.path;
    try {
      const url = await uploader(path);
      url_arr.push(url.image_url);
    } catch (err) {
      console.log(err)
    }
  }

  const post = new Post({
    _id: new ObjectID(),
    post_username: username,
    post_title: title,
    post_images: url_arr,
    post_description: text,
    post_comments: [],
    post_likes: 0,
    liked_posts: [],
    created_at: new Date(),
  });

  // Save to data base
  const upadtePosts = { $push: { posts: post._id } };
  User.findOneAndUpdate(
    { username: username },
    upadtePosts,
    {},
    function (err, data) {
      if (err) {
        console.log(`username: ${username} does not exist`);
        return res.status(500).send(err);
      }
      if (!data) {
        return res.status(404).end();
      }
    }
  );
  post.save().then(
    (saveRes) => {
      console.log("post added");
      // res.status(200);
      // console.log(saveRes);
      res.send("ok");
    },
    (error) => {
      res.status(400).send(error); // 400 for bad request
    }
  );
});

app.get("/posts/:post_id", multipartMiddleware, async (req, res) => {
  const post_id = req.params.post_id;

  Post.findOne({ _id: post_id }).then(
    (post) => {
      res.send({ post });
    },
    (error) => {
      res.status(500).send(error);
    }
  );
});

/// a DELETE route to remove a post by its id.
app.delete("/posts/:post_id", multipartMiddleware, async (req, res) => {
  const post_id = req.params.post_id;

  Post.findOneAndRemove({ _id: post_id }).then((post) => {
    for (img in post.post_images) {
      cloudinary.uploader.destroy(img.image_id);
    }
    if (!post) {
      res.status(404).json({
        error: "post not found",
      });
    } else {
      res.send(post);
    }
  });
});

// Get all posts
app.get("/all_posts", multipartMiddleware, async (req, res) => {
  Post.find().then(
    (posts) => {
      res.send({ posts }); // can wrap in object if want to add more properties
    },
    (error) => {
      res.status(500).send(error); // server error
    }
  );
});

// Search
app.post("/search/posts/postTitle/:title", (req, res) => {
  const title = req.params.title;
  const regex = new RegExp(title, "i");
  Post.find({ post_title: { $regex: regex } }).then(
    (posts) => {
      res.send({ posts });
    },
    (error) => {
      res.status(500).send(error);
    }
  );
});

// Get all posts by user
app.get("/posts_user/:username", multipartMiddleware, async (req, res) => {
  const username = req.params.username;
  Post.find({ post_username: username }).then(
    (posts) => {
      res.send({ posts });
    },
    (error) => {
      res.status(500).send(error);
    }
  );
});

// Like to specific post
app.post(
  "/posts/like/:username/:post_id",
  multipartMiddleware,
  async (req, res) => {
    const username = req.params.username;
    const post_id = req.params.post_id;

    User.findOneAndUpdate(
      { username: username },
      { $push: { liked_posts: post_id } },
      { upsert: true },
      function (err, data) {
        if (err) {
          console.log(`username: ${username} does not exist`);
          return res.status(500).send(err);
        }
        if (!data) {
          return res.status(404).end();
        }
      }
    );
    Post.findOneAndUpdate({ _id: post_id }, { $inc: { post_likes: 1 } }).then(
      (post) => {
        res.send({ post });
      },
      (error) => {
        res.status(500).send(error);
      }
    );
  }
);

// Delike to specific post
app.post(
  "/posts/unlike/:username/:post_id",
  multipartMiddleware,
  async (req, res) => {
    const username = req.params.username;
    const post_id = req.params.post_id;

    User.findOneAndUpdate(
      { username: username },
      { $pull: { liked_posts: post_id } },
      { upsert: true },
      function (err, data) {
        if (err) {
          console.log(`username: ${username} does not exist`);
          return res.status(500).send(err);
        }
        if (!data) {
          return res.status(404).end();
        }
      }
    );
    Post.findOneAndUpdate({ _id: post_id }, { $inc: { post_likes: -1 } }).then(
      (post) => {
        res.send({ post });
      },
      (error) => {
        res.status(500).send(error);
      }
    );
  }
);

app.post(
  "/posts/comment/:username/:post_id",
  multipartMiddleware,
  async (req, res) => {
    const username = req.params.username;
    const post_id = req.params.post_id;
    // console.log(username);
    // console.log(post_id);
    // console.log("32432");
    // console.log(req.body.comment_content);
    let text = req.body.comment_content;
    // console.log("a")
    console.log(text);
    const comment = new Comment({
      comment_user: username,
      comment_content: text,
      comment_likes: 0,
    });

    Post.findOneAndUpdate(
      { _id: post_id },
      { $push: { post_comments: comment } }
    ).then(
      (post) => {
        res.send({ post });
      },
      (error) => {
        res.status(500).send(error);
      }
    );
  }
);

// Middleware for authentication of resources
const authenticate = (req, res, next) => {
  if (req.session.user) {
    User.findById(req.session.user)
      .then((user) => {
        if (!user) {
          return Promise.reject();
        } else {
          req.user = user;
          next();
        }
      })
      .catch((error) => {
        res.status(401).send("Unauthorized");
      });
  } else {
    res.status(401).send("Unauthorized");
  }
};

/*** Session handling **************************************/
// Create a session and session cookie
app.use(
  session({
    secret: "our hardcoded secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60000,
      httpOnly: true,
    },
  })
);

// A route to login and create a session
app.post("/users/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // log(username, password);
  // Use the static method on the User model to find a user
  // by their username and password
  User.findByUsernamePassword(username, password)
    .then((user) => {
      // Add the user's id to the session.
      // We can check later if this exists to ensure we are logged in.
      req.session.user = user._id;
      req.session.username = user.username; // we will later send the username to the browser when checking if someone is logged in through GET /check-session (we will display it on the frontend dashboard. You could however also just send a boolean flag).
      res.send({ currentUser: user.username });
    })
    .catch((error) => {
      res.status(400).send();
    });
});

// A route to logout a user
app.get("/users/logout", (req, res) => {
  // Remove the session
  req.session.destroy((error) => {
    if (error) {
      res.status(500).send(error);
    } else {
      res.send();
    }
  });
});

// A route to check if a user is logged in on the session
app.get("/users/check-session", (req, res) => {
  if (req.session.user) {
    res.send({ currentUser: req.session.username });
  } else {
    res.status(401).send();
  }
});

/*********************************************************/

/*** API Routes below ************************************/
// User API Route
app.post("/api/users", mongoChecker, async (req, res) => {
  log(req.body);

  // Create a new user
  const user = new User({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    posts: [],
  });

  try {
    // Save the user
    const newUser = await user.save();
    res.send(newUser);
  } catch (error) {
    if (isMongoError(error)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      log(error);
      res.status(400).send("Bad Request"); // bad request for changing the student.
    }
  }
});

app.get("/api/users", mongoChecker, async (req, res) => {
  // Add code here
  try {
    const all_users = await User.find();
    res.send(all_users);
  } catch (error) {
    if (isMongoError(error)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      log(error);
      res.status(400).send("Bad Request");
    }
  }
});

app.delete("/api/users/:user_id", mongoChecker, async (req, res) => {
  // Add code here
  try {
    const removed = await User.findOneAndRemove({ _id: req.params.user_id });
    res.send(removed);
  } catch (error) {
    if (isMongoError(error)) {
      // check for if mongo server suddenly disconnected before this request.
      res.status(500).send("Internal server error");
    } else {
      log(error);
      res.status(400).send("Bad Request");
    }
  }
});

// get all info of a user
app.get("/users/:username/info", async (req, res) => {
  const username = req.params.username;

  User.findOne({ username: username }).then(
    (user) => {
      res.send({ user });
    },
    (error) => {
      error.status(500).send(error);
    }
  );
});

/*** Webpage routes below **********************************/
// Serve the build
app.use(express.static(path.join(__dirname, "/client/build")));

// All routes other than above will go to index.html
app.get("*", (req, res) => {
  // check for page routes that we expect in the frontend to provide correct status code.
  const goodPageRoutes = ["/", "/login", "/dashboard"];
  if (!goodPageRoutes.includes(req.url)) {
    // if url not in expected page routes, set status to 404.
    res.status(404);
  }

  // send index.html
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

/*************************************************/
// Express server listening...
const port = process.env.PORT || 5000;
app.listen(port, () => {
  log(`Listening on port ${port}...`);
});
