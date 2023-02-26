const express = require("express");

const {
  getAllUsers,
  createUsers,
  getUsers,
  updatedUser,
  deleteUser,
} = require("./../controllers/userController");

const router = express.Router();

router.route("/").get(getAllUsers).post(createUsers);
router.route("/:id").get(getUsers).patch(updatedUser).delete(deleteUser);
module.exports = router;
