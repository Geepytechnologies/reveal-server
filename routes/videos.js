import express from "express";
import { addVideo, updateVideo, deleteVideo, getVideo, addView, trending, random, subscribedvideos, getByTag, search } from "../controllers/video.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();

//create a video
router.post('/',verifyToken, addVideo);
router.put('/:id',verifyToken, updateVideo);
router.delete('/:id',verifyToken, deleteVideo);
router.get('/find/:id', getVideo);
router.put('/view/:id',verifyToken, addView);
router.get('/trending', trending);
router.get('/random', random);
router.get('/subscribedvideos', subscribedvideos);
router.get('/tags', getByTag);
router.get('/search', search);

export default router;