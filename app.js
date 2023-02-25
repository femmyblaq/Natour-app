const fs = require("fs");
const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Hello from the server side", app: "Natours" });
});
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/data/tour-simple.json`)
);

app.get("/api/v1/tours", (req, res) => {
  res.status(200).json({
    message: "sucess",
    results: tours.length,
    data: {
      tours,
    },
  });
});

app.post("/api/v1/tours", (req, res) => {
  const newTourId = tours[tours.length - 1].id + 1;
  const newTour = Object.assign({ id: newTourId }, req.body);
  tours.push(newTour);
  fs.writeFile(
    `${__dirname}/dev-data/data/tour-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        message: "sucessful",
        data: {
          tours: newTour,
        },
      });
    }
  );
});

const port = 3000;

app.listen(port, () => console.log(`Server running at port ${port}`));
