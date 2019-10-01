
const Movie = require('../../models/movie');

module.exports = {
  index,
  create,
  show,
  update,
  deleteMovie
};

function deleteMovie(req, res, next) {
  Movie.findByIdAndRemove(req.params.id)
  .then(function(movie) {
    res.status(200).json(movie);
  });
}

function update(req, res, next) {
  Movie.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(function(movie) {
    res.status(200).json(movie);
  });
}

function show(req, res, next) {
  Movie.findById(req.params.id).populate("cast")
  .then(function(movie) {
    res.status(200).json(movie);
  });
}

function create(req, res, next) {
  Movie.create(req.body).then(function(movie) {
    res.status(201).json(movie)
  });
}

function index(req, res, next) {
  Movie.find({}).populate("cast")
  .then(function(movies) {
    res.status(200).json(movies);
  })
  .catch(function(err) {
    req.status(500).json(err);
  });
}