import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

// The '/' is the currect directory. IE the landing page. 
router.get('/', getPosts);
router.post('/', createPost ); // Logic handled by controllers/posts.js

export default router;