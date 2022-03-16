const express = require("express");
const router = express.Router();
const Trip = require("../models/trip");

router.get("/", async (req, res) => {
  try {
    const trips = await Trip.find();
    res.json(trips);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// router.get("/:id", getPost, (req, res) => {
//   res.send(res.post);
// });

// router.post("/", async (req, res) => {
//   try {
//     const newPost = await Post.create({
//       title: req.body.title,
//       author: req.body.author,
//       body: req.body.body,
//       createdAt: req.body.createdAt,
//       grade: req.body.grade,
//     });
//     res.status(201).json(newPost);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.patch("/:id", getPost, async (req, res) => {
//   res.post.title = req.body.title;
//   res.post.author = req.body.author;
//   res.post.body = req.body.body;
//   res.post.grade = req.body.grade;

//   try {
//     const updatedPost = await res.post.save();
//     res.json(updatedPost);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// });

// router.delete("/:id", getPost, async (req, res) => {
//   try {
//     await res.post.remove();
//     res.json({ message: "deleted post" });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// async function getPost(req, res, next) {
//   let post;
//   try {
//     post = await Post.findById(req.params.id);
//     if (post == null) {
//       return res.status(404).json({ message: "cannot find post" });
//     }
//   } catch (error) {
//     return res.status(500).json({ message: error.message });
//   }
//   res.post = post;
//   next();
// }

module.exports = router;
