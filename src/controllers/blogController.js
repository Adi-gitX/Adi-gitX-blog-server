const blogModel = require('../models/blogModel');

// Create a blog post
const createBlog = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newBlog = await blogModel.createBlogPost({ title, content });
    res.status(201).json(newBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all blog posts
const getBlogs = async (req, res) => {
  try {
    const blogs = await blogModel.getAllBlogPosts();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a blog post
const updateBlog = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedBlog = await blogModel.updateBlogPost(id, { title, content });
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete a blog post
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    await blogModel.deleteBlogPost(id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createBlog,
  getBlogs,
  updateBlog,
  deleteBlog,
};
