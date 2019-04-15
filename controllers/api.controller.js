const Event = require("../models/event.model");

//Simple version, without validation or sanitation
exports.test = function(req, res) {
  res.send("Greetings from the Test controller!");
};

exports.event_create = function(req, res) {
  console.log("POST request received");
  let event = new event({
    name: req.body.name,
    price: req.body.price
  });

  event.save(function(err) {
    if (err) {
      return next(err);
    }
    res.send("event Created successfully");
  });
};

exports.event_details = (req, res) => {
  event.findById(req.params.id, (err, event) => {
    if (err) return next(err);
    console.log("Succesfully displayed data");
    res.send(event);
  });
};

exports.event_update = function(req, res) {
  event.findByIdAndUpdate(req.params.id, { $set: req.body }, function(
    err,
    event
  ) {
    if (err) return next(err);
    console.log("Succesfully updated data");
    res.send("event udpated.");
  });
};

exports.event_delete = function(req, res) {
  event.findByIdAndRemove(req.params.id, function(err) {
    if (err) return next(err);
    console.log("Succesfully deleted data");
    res.send("Deleted successfully!");
  });
};

exports.event_getAll = (req, res) => {
  event.find({}, (err, event) => {
    if (err) return next(err);
    console.log("Succesfully retrieved all data");
    res.send(event);
  });
};
