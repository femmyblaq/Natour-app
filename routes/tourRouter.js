const express = require("express");
const {
  getAllTours,
  createTours,
  getTours,
  updatedTour,
  deleteTour,
} = require("./../controllers/tourController");

const router = express.Router();
router.route("/").get(getAllTours).post(createTours);
router.route("/:id").get(getTours).patch(updatedTour).delete(deleteTour);

module.exports = router;
