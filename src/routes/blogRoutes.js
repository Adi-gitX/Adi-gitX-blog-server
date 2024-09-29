const express = require('express');
const {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
} = require('../controllers/blogController');

const router = express.Router();

// Create a new blog
router.post('/', createBlog);

// Get all blogs
router.get('/', getBlogs);

// Update a blog
router.put('/:id', updateBlog);

// Delete a blog
router.delete('/:id', deleteBlog);

module.exports = router;
