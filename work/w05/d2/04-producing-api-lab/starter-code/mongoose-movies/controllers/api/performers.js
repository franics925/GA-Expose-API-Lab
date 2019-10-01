const Performer = require('../../models/performer');

module.exports = {
  create,
  show,
  update,
  index,
  deletePerformer
};

function create(req, res, next) {
  Performer.create(req.body).then(function(performer) {
    res.status(201).json(performer)
  });
}

function show(req, res, next) {
  Performer.findById(req.params.id)
  .then(function(performer) {
    res.status(200).json(performer);
  });
}

function update(req, res, next) {
  Performer.findByIdAndUpdate(req.params.id, req.body, {new: true}).then(function(performer) {
    res.status(200).json(performer);
  });
}

function index(req, res, next) {
  Performer.find({})
  .then(function(performer) {
    res.status(200).json(performer);
  })
  .catch(function(err) {
    req.status(500).json(err);
  });
}

function deletePerformer(req, res, next) {
  Performer.findByIdAndRemove(req.params.id).then(function(performer) {
    res.status(200).json(performer);
  });
}



