const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

router.post("/", async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.status(201).json(post);
});

router.get("/", async (req, res) => {
  const posts = await Post.find().populate("postedBy", "name email");
  res.json(posts);
});

module.exports = router;
