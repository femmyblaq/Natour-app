const fs = require("fs");

const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/../dev-data/data/tour-simple.json`)
);

exports.getAllTours = (req, res) => {
  res.status(200).json({
    message: "sucess",
    results: tours.length,
    data: {
      tours,
    },
  });
};
exports.getTours = (req, res) => {
  const paramsId = req.params.id * 1;
  if (paramsId > tours.length) {
    return res.status(404).json({
      status: "Fail",
      message: "INVALID ID",
    });
  }
  const tour = tours.find((el) => el.id === paramsId);
  res.status(200).json({
    message: "sucess",
    data: {
      tour,
    },
  });
};
exports.updatedTour = (req, res) => {
  const paramsId = req.params.id * 1;
  if (paramsId > tours.length) {
    return res.status(404).json({
      status: "Fail",
      message: "INVALID ID",
    });
  }
  res.status(200).json({
    message: "sucess",
    data: {
      tour: "<Updated tours here...>",
    },
  });
};
exports.deleteTour = (req, res) => {
  const paramsId = req.params.id * 1;
  if (paramsId > tours.length) {
    return res.status(404).json({
      status: "Fail",
      message: "INVALID ID",
    });
  }
  res.status(204).json({
    message: "sucess",
    data: {
      tour: null,
    },
  });
};
exports.createTours = (req, res) => {
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
};
