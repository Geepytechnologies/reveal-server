import express from "express";
import { update, deleteUser, getUser, subscribe, unsubscribe, like, dislike, getAllUsers, checkUser, GetVideosByUser } from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";


const router = express.Router();

//update user
router.put("/:id",verifyToken, update)

//delete user
router.delete("/:id", verifyToken, deleteUser)

//get a user
router.get("/find/:id", getUser)

//check a user
router.get("/", verifyToken, checkUser)

//get all users
router.get("/find", getAllUsers)

//get videos by a user
router.get("/find/videos/:userid", GetVideosByUser)

//subscribe a user
router.put("/subscribe/:id",verifyToken, subscribe)

//unsubscribe a user
router.put("/unsubscribe/:id", verifyToken, unsubscribe)


//like a video
router.put("/like/:videoId", verifyToken, like)


//dislike a video
router.put("/dislike/:videoId", verifyToken, dislike)




export default router;