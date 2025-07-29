import { Router } from "express";
import {isAuthenticatedUser} from "../middlewares/auth.middleware.js"
import {registerUser,refreshAccessToken,loginUser,logOut,getAllUsers,claimPoints, addUser, getUserHistory} from "../controllers/user.controller.js"

const router = Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.route("/refresh_token").post(refreshAccessToken);

router.route("/logout").post(isAuthenticatedUser, logOut);

router.route("/addUser").post(isAuthenticatedUser, addUser);

router.route("/getAllUsers").get(isAuthenticatedUser, getAllUsers);

router.route("/claimPoints/:id").post(isAuthenticatedUser, claimPoints);

router.route("/getHistory/:id").get(isAuthenticatedUser, getUserHistory);

export default router;