import express from "express";
import {
  getPosts,
  createPosts,
  updatePosts,
  deletePosts,
  likePosts,
} from "../controllers/posts";

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPosts);
router.put("/:id", updatePosts);
router.delete("/:id", deletePosts);
router.put("/:id/like", likePosts);

export default router;
