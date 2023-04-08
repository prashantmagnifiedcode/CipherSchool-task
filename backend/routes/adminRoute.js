const router = require("express").Router();
const multer = require('multer')
const { v4: uuidv4 } = require('uuid')

const {
  Profile,
  login,
  getAdmin,
  logout,
  register,
  about,
  ProfileLink,
  Professional,
  Interest,pwd,Getfollower,follower
} = require("../controller/adminController");
const {isAdminAuthenticated } = require('../middleware')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public/');
  },
  filename: (req, file, cb) => {
      const fileName = file.firstname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});
var uploadsProfile = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }
});
router.post("/register", register);
router.post("/login", login);

router.get("/user",isAdminAuthenticated, getAdmin);

router.delete("/logout", logout);
// router.get("/getAllUser", getAllUser)/;
router.post("/about",about);
router.post("/ProfileLink",ProfileLink);
router.post("/Professional",Professional);
router.post("/interest",Interest);
router.post("/updatePassword",pwd);
router.post("/follower",Getfollower);
router.post("/follow",follower);
router.post("/updateProfile",uploadsProfile.single("image"),Profile);
// router.post("/AddProduct",ProductAdd);


module.exports = router;
