// A function to send a POST request with a new image
export const postPost = (dashboardComp) => {
  // the URL for the request
  const url = `/post_post/${dashboardComp.state.author}`;
  // const url = "http://localhost:5000/post_post/user";
  // console.log(dashboardComp.currUsername);
  // The data we are going to send in our request
  const postData = new FormData();
  // postData.append("Files", dashboardComp.state.images);
  let title = dashboardComp.state.title;
  let text = dashboardComp.state.text;
  // console.log(typeof title);
  postData.append("title", title);
  postData.append("text", text);
  // postData.append("files", dashboardComp.state.images);
  for (let i = 0; i < dashboardComp.state.images.length; i++) {
    let file = dashboardComp.state.images[i];
    postData.append("files[]", file);
  }

  // Create our request constructor with all the parameters we need
  const request = new Request(url, {
    method: "post",
    body: postData,
  });

  // Send the request with fetch()
  fetch(request)
    .then(function (res) {
      // Handle response we get from the API.
      // Usually check the error codes to see what happened.
      console.log(res.status);
      if (res.status === 200) {
        // If image was added successfully, tell the user.
        console.log("ok");
        dashboardComp.setState({
          helperText: "Success: Added a post.",
          message: {
            body: "Success: Added a post.",
            type: "success",
          },
        });
      } else {
        // If server couldn't add the image, tell the user.
        // Here we are adding a generic message, but you could be more specific in your app.
        dashboardComp.setState({
          helperText: "Error: Could not add a post.",
          message: {
            body: "Error: Could not add a post.",
            type: "error",
          },
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a GET request to the web server,
// and then loop through them and add a list element for each image
export const getPosts = (imageListComp) => {
  // the URL for the request
  const url = "/all_posts";

  // Since this is a GET request, simply call fetch on the URL
  fetch(url)
    .then((res) => {
      if (res.status === 200) {
        // return a promise that resolves with the JSON body
        // console.log("ok1");
        return res.json();
      } else {
        alert("Could not get images");
      }
    })
    .then((json) => {
      // the resolved promise with the JSON body
      // console.log(json);
      // console.log("ok2");
      let lst = [];
      for (let i = 0; i < json.posts.length; i++) {
        lst.push({
          _id: json.posts[i]._id,
          post_images: json.posts[i].post_images,
          post_comments: json.posts[i].post_comments,
          post_description: json.posts[i].post_description,
          post_likes: json.posts[i].post_likes,
          post_title: json.posts[i].post_title,
          post_username: json.posts[i].post_username,
          post_date: json.posts[i].created_at,
          post_id: json.posts[i]._id,
        });
      }
      // console.log(5);
      // console.log(lst);
      imageListComp.setState({ imageList: lst });
    })
    .catch((error) => {
      console.log(error);
      console.log("not ok");
    });
};

export const likePost = (user_id, post_id) => {
  const url = `/posts/like/${user_id}/${post_id}`;

  const request = new Request(url, {
    method: "post",
  });
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        console.log(`post liked`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const unlikePost = (user_id, post_id) => {
  const url = `/posts/unlike/${user_id}/${post_id}`;

  const request = new Request(url, {
    method: "post",
  });
  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        console.log(`post unliked`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUserPosts = (user_id) => {
  const url = `/posts_user/${user_id}`;

  const request = new Request(url, {
    method: "get",
  });

  fetch(request)
    .then(function (res) {
      if (res.status === 200) {
        console.log(res.body);
        return res.body.posts;
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

export const searchPostTitle = (title) => {
  const url = `/search/posts/postTitle/${title}`

  const request = new Request(url, {
    method: "post"
  })

  fetch(request)
    .then(res => {
      if (res.status === 200) {
        console.log(res.body)
        return res.body.posts;
      }
    }).catch(error => {
      console.log(error)
    })
}

export const commentPost = (comment, comment_content, user_id, post_id) => {
  const url = `/posts/comment/${user_id}/${post_id}`;
  let data = new FormData();
  let c = comment.state.comment;
  data.append("comment_content", c);
  const request = new Request(url, {
    method: "post",
    body: data,
  });

  fetch(request)
    .then((res) => {
      if (res.status === 200) {
        console.log(`commented on post: ${post_id}`);
      }
    })
    .catch((error) => {
      console.log(error);
    });
};

// A function to send a DELETE request with an image PUBLIC id (id on cloudinary)
export const deletePost = (postId, dashboardComp) => {
  // the URL for the request
  const url = `/posts/${postId}`;

  // Create our request constructor with all the parameters we need
  const request = new Request(url, {
    method: "delete",
  });

  // Send the request with fetch()
  fetch(request)
    .then(function (res) {
      // Handle response we get from the API.
      // Usually check the error codes to see what happened.
      if (res.status === 200) {
        // If post was deleted successfully, tell the user.
        dashboardComp.setState({
          message: {
            body: "Delete successful.",
            type: "success",
          },
        });
      } else {
        // If server couldn't delete the post, tell the user.
        // Here we are adding a generic message, but you could be more specific in your app.
        dashboardComp.setState({
          message: {
            body: "Error: Could not delete post.",
            type: "error",
          },
        });
      }
    })
    .catch((error) => {
      console.log(error);
    });
};
