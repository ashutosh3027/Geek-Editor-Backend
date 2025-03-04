const express = require("express");
const passport = require("passport");
const router = express.Router();

const {
  getProfile,
  addProfile,
  login,
  updateUser,
  deleteUser,
  getUserById,
  followUser,
  verifyUser
} = require("../controllers/authController");

/*
ROUTES FOR API ENDPOINTS.
*/

router.route("/profile/:username").get(getProfile);


router.post("/login/", login);
// router.post("/devoloperlogin/", login); //devolopers use this to avoid email verification
router.route("/register/").post(addProfile);
// router.route("/devoloperregister/").post(addProfile);
router.post("/update/:id",verifyUser,updateUser);
router.delete("/profile/:id",verifyUser, deleteUser);
router.get("/profile/:id",verifyUser,getUserById);
router.put('/follow/:id',verifyUser, followUser);

const {verifyEmail} = require("../controllers/emailController")

router.get('/verifyEmail/:username/:hashid', verifyEmail)
module.exports = router;
