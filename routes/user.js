import express from "express";
import { changePassword,
     forgetpassword,
     getMyProfile,
     login, 
    logOut, register,
     resetpassword,
     updatePic, 
    updateProfile } from "../controller/user.js";
import { isAuthenticated } from "../middlewares/auth.js";
import { singleUpload } from "../middlewares/multer.js";


const router =express.Router();

router.post("/login",login);
router.post("/new",singleUpload, register);
router.get("/logout",isAuthenticated,logOut);
router.get("/me",isAuthenticated, getMyProfile);

// updates
router.put("/updateprofile",isAuthenticated,updateProfile);
router.put("/changepassword",isAuthenticated,changePassword);
router.put("/updatepic",isAuthenticated,updatePic);

// paswords
router.route("/forgetpassword").post(forgetpassword).put(resetpassword);



export default router;
