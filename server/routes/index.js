const express = require('express');
const router = express.Router();
const moviesRouter = require('./moviesRouter');
const authRoute = require('./authRoute');
const genreRouter = require('./genreRouter');
const authentication = require('../middlewares/authentication');
const errorHandler = require('../middlewares/errorHandler');

router.use('/', authRoute);

router.use(authentication);

router.use('/movies', moviesRouter);
router.use('/genres', genreRouter);
router.use(errorHandler);

module.exports = router;
