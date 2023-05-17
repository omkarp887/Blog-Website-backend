import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
// import { uploadImage, getImage } from "../controller/image-controller.js";
// import upload from "../utils/upload.js";
import {
  createPost,
  updatePost,
  deletePost,
  getPost,
  getAllPosts,
} from "../controller/post-controller.js";
import {
  authenticateToken,
  createNewToken,
} from "../controller/jwt-controller.js";
import {
  newComment,
  getComments,
  deleteComment,
} from "../controller/comment-controller.js";

const router = express.Router();

router.post("/signup", userSignup);
router.post("/login", userLogin);

router.post("/create", authenticateToken, createPost);
router.put("/update/:id", authenticateToken, updatePost);
router.delete("/delete/:id", authenticateToken, deletePost);
router.get("/post/:id", authenticateToken, getPost);
router.get("/posts", authenticateToken, getAllPosts);

router.post("/comment/new", authenticateToken, newComment);
router.get("/comments/:id", authenticateToken, getComments);
router.delete("/comment/delete/:id", authenticateToken, deleteComment);


export default router;
