const express = require('express');
const catController = require('../../controllers/cat.controller');

const router = express.Router();

router
  .route('/')
  .get(catController.showCat);

module.exports = router;