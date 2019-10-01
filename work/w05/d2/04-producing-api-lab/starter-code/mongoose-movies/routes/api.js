const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/api/movies');
const performersCtrl = require('../controllers/api/performers');

/* GET users listing. */
router.post('/movies', moviesCtrl.create);
router.get('/movies/:id', moviesCtrl.show);
router.put('/movies/:id', moviesCtrl.update);
router.get('/movies', moviesCtrl.index);
router.delete('/movies/:id', moviesCtrl.deleteMovie);

router.post('/performers', performersCtrl.create);
router.get('/performers/:id', performersCtrl.show);
router.put('/performers/:id', performersCtrl.update);
router.get('/performers', performersCtrl.index);
router.delete('/performers/:id', performersCtrl.deletePerformer);

module.exports = router;