// This file contains the post handler logic to avoid routes/posts.js becoming too bloaded and unreadable. 
// Note async and await on the functions. 

import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages); // 200 == all okay. Also send array of all messages.
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    // Will get the form body from front end request and create a new post from that.
    const body = req.body;

    const newPost = new PostMessage(post);

    try {
       await newPost.save();
       res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}