const httpStatus = require('http-status');
const catchAsync = require('../utils/catchAsync');

/**
 * @desc Retrieve a new cat image and description
 * @route GET /api/v1/cat
 * @returns {Object} cat - The cat image and description
 * @example
 * {
 *   "image": "/static/cat.jpg",
 *   "caption": "The cat is likely in a charming Dutch or Belgian town, as suggested by the cobblestone street, gabled houses, upright bicycle, and flower-lined windows typical of Western European architecture."
 * }
 */
const showCat = catchAsync(async (_req, res) => {
  // TODO: Implement cat retrieval logic using an LLM/image generation API. It should:
  // - Generate a new cat image
  // - Send the image to a multimodal LLM to retrieve a description of the image
  // - Return the image and description
  // - Ignore concurrency/performance considerations for now
  // - Ignore excessive error handling
  // - Ignore security/auth for now
  // - Ignore rate limiting for now
  const cat = {
    image: `http://localhost:${process.env.PORT}/static/cat.jpg`,
    caption: 'The cat is likely in a charming Dutch or Belgian town, as suggested by the cobblestone street, gabled houses, upright bicycle, and flower-lined windows typical of Western European architecture.',
  };
  res.status(httpStatus.OK).send(cat);
});

module.exports = {
  showCat,
};