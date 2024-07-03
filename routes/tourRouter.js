const express = require("express");
const { routes } = require("../app");
const {
  getAllTours,
  createTours,
  getTours,
  updatedTour,
  deleteTour,
  checkId,
  checkBody,
} = require("./../controllers/tourController");
const router = express.Router();
router.param("id", checkId);

router.route("/").get(getAllTours).post(checkBody, createTours);
router.route("/:id").get(getTours).patch(updatedTour).delete(deleteTour);

module.exports = router;
