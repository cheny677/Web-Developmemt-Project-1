# 309project-team43 (built by a group of 4 people, with me bing a participant)

## Setup
Start your local Mongo database.  For example, in a separate terminal window:

```
# create and run local Mongo database in the root directory of the repo
mkdir mongo-data
mongod --dbpath mongo-data
```

Then, in the root directory of the repo, run:
```
# install server dependencies in the root directory
npm install

# install frontend dependencies in the client directory
cd client
npm install
```

Alternatively, you can run `npm run setup` in the root directory which runs a script to execute all the above commands (not including starting the mongo database, since it should be run in a separate window). This is a shortcut command defined in [package.json](package.json).

## Development

During development, run the following commands to build your React app and start the Express server.  You should re-run these commands for your app to reflect any changes in the code. Make sure mongo is still running on a separate terminal.

```
# build the React app
cd client
npm run build

# go back to the root directory
cd ..

# run the server
node server.js
```

Alternatively, you can run `npm run build-run` in the root directory which runs a script to execute all the above commands. This is a shortcut command defined in [package.json](package.json).

## Deployed Web
#### click [here](https://csc309-team43.herokuapp.com)

## Creating a User

There is an frontend form to create a user on the app, and you can also send a `POST` request to `/api/users` to signup with something like:
```
{
    "username": "chungeng",
    "password": "666",
    "email": "user@test.com",
    "firstName": "Chungeng",
    "lastName": "Meng"
}
```
Then proceed to `http://localhost:5000` in your browser and login with your credentials.

## Directory Structure

```
team43
├── db
│   └── mongoose.js
├── models
│   ├── user.js
|   ├── post.js
├── package.json
├── server.js
├── cloudinary.js
└── client
    ├── public
    │   ├── index.html
    │   └── ...
    ├── tests
    │   └── ...
    └── src
        ├── actions
        │   └── ...
        ├── react-components
        │   └── ...
        ├── index.js
        ├── index.css
        ├── App.js
        ├── App.css
        ├── package.json
```


## Changes

- We added the functionality of loging in insetead of using hardcoded account.

- We added the funtionality of signing up an account.

- we added the functionality of reading the data from database to show in the main page.

- We added the functionality of posting a post to database.

- We added the functionality of commenting on a post.

- We added the functionality of deleting posts using admin account.

- We added the functionality of deleting users using admin account.

- After we delete a post or account we can manualy refresh page to see the chagnes made.

- We changed the background image of the main page from a dynamic anime to a static background.

## The third-party library we used ##
1. material-ui
1. react
1. react-image-gallery
1. recharts
1. vanta
