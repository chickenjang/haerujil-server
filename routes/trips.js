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

router.get("/:id", getTrip, (req, res) => {
  res.send(res.trip);
});

router.post("/", async (req, res) => {
  try {
    const newTrip = await Trip.create({
      title: req.body.title,
      author: req.body.author,
      body: req.body.body,
      createdAt: req.body.createdAt,
      like: req.body.like,
    });
    res.status(201).json(newTrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch("/:id", getTrip, async (req, res) => {
  res.post.title = req.body.title;
  res.post.author = req.body.author;
  res.post.body = req.body.body;
  res.post.like = req.body.like;

  try {
    const updatedTrip = await res.trip.save();
    res.json(updatedTrip);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/:id", getTrip, async (req, res) => {
  try {
    await res.trip.remove();
    res.json({ message: "deleted trip" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

async function getTrip(req, res, next) {
  let trip;
  try {
    trip = await Trip.findById(req.params.id);
    if (trip == null) {
      return res.status(404).json({ message: "cannot find trip" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
  res.trip = trip;
  next();
}

module.exports = router;
