const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createBlogPost = async (data) => {
  return await prisma.blogPost.create({ data });
};

const getAllBlogPosts = async () => {
  return await prisma.blogPost.findMany();
};

const updateBlogPost = async (id, data) => {
  return await prisma.blogPost.update({
    where: { id: parseInt(id) },
    data,
  });
};

const deleteBlogPost = async (id) => {
  return await prisma.blogPost.delete({
    where: { id: parseInt(id) },
  });
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  updateBlogPost,
  deleteBlogPost,
};
