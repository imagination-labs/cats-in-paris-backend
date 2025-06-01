const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

// @desc Retrieve a new cat image and description
// @route GET /api/v1/cat
// @access Public
const showCat = catchAsync(async (req, res) => {
  const cat = {
    imageUrl: '/public/cat.jpg',
    expertDescription: 'The cat is likely in a charming Dutch or Belgian town, as suggested by the cobblestone street, gabled houses, upright bicycle, and flower-lined windows typical of Western European architecture.',
  };
  res.status(httpStatus.CREATED).send(cat);
});

module.exports = {
  showCat,
};