/* Post model */
'use strict';

const mongoose = require('mongoose')

// Create comment schema
const CommentSchema = mongoose.Schema({
    comment_user: {
        type: String,
        required: true
    },
    comment_content: {
        type: String,
        required: true
    },
    comment_likes: Number
})

// Create post schema
const PostSchema = mongoose.Schema({
    post_username: {
        type: String,
        required: true
    },
    post_title: {
        type: String,
        required: true
    },
    post_images: {
        type: [String],
        required: true
    },
    post_description: {
        type: String,
        required: true
    },
    post_comments: {
        type: [CommentSchema],
        required: true
    },
    post_likes: Number,
    created_at: String
});

const Post = mongoose.model('Post', PostSchema)
const Comment = mongoose.model('Comment', CommentSchema)

module.exports = { Post, Comment };