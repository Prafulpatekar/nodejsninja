const express = require('express');
const blogControllers = require('../controllers/blogController');

// Express Router

const router = express.Router();

// redirect
router.get('/create',blogControllers.blog_create_get);
router.post('/',blogControllers.blog_create_post);
router.get('/',blogControllers.blog_all_get);
router.get('/:pkid',blogControllers.blog_single_get);
router.delete('/:pkid',blogControllers.blog_delete);


module.exports = router;