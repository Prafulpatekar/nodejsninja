const express = require('express');
const blogControllers = require('../controllers/blogController');
const createBlogValidator = require('../validators');

// Express Router

const router = express.Router();

// redirect
router.post('/',blogControllers.blog_create_post);
router.get('/',blogControllers.blog_all_get);
router.get('/:pkid',blogControllers.blog_single_get);
router.delete('/:pkid',blogControllers.blog_delete);


module.exports = router;