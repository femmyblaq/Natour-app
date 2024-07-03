const express = require("express");
const morgan = require("morgan");
const tourRouter = require("./routes/tourRouter");
const userRouter = require("./routes/userRouter");
const app = express();
app.use(express.json());

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// app.get("/", (req, res) => {
//   res
//     .status(200)
//     .json({ message: "Hello from the server side", app: "Natours" });
// });

// app.get("/api/v1/tours", getAllTours);
// app.get("/api/v1/tours/:id", getTours);

// app.patch("/api/v1/tours/:id", updatedTour);

// app.delete("/api/v1/tours/:id", deleteTour);

// app.post("/api/v1/tours", createTours);
app.use("/api/v1/tours", tourRouter);

app.use("/api/v1/users", userRouter);

module.exports = app;
