const express = require("express");
const router = express.Router();
const {
  getProfile,
  getProfileById,
  getProfileReviews,
} = require("./controllers/profile");
const {
  modifyUserInfo,
  changeUserPosition,
  updateProfileImg,
} = require("./controllers/modifyInfo");
const { isEmailVerified } = require("../middlewares/");
router.get("/", getProfile);
router.get("/:id", getProfileById);

router.put("/modifyInfo", modifyUserInfo);
router.put("/updateProfileImg", updateProfileImg);
router.post("/changePosition", changeUserPosition);

router.get("/reviews/:id", getProfileReviews);
module.exports = router;
