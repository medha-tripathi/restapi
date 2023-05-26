import express from 'express';
import { addBlog, deleteBlog, getAllBlogs, getById, getByUserId, updateBlog } from '../controllers/Blog-controller.js';

const brouter=express.Router();

brouter.get("/",getAllBlogs);
brouter.post("/add",addBlog);
brouter.put("/update/:id",updateBlog);
brouter.get("/:id",getById);
brouter.delete("/:id",deleteBlog);
brouter.get("/user/:id",getByUserId);

export default brouter;