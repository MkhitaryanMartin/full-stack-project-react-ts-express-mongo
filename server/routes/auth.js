const Router = require("express");
const UserController = require("../controllers/user-controller.js");
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

const router = new Router();

router.post("/registration",  body('email').isEmail(),
body('password').isLength({min: 3, max: 32}), UserController.registration);
router.post("/login", UserController.login);
router.post("/logout", UserController.logout);
router.get("/activate/:link", UserController.activate);
router.get("/refresh", UserController.refresh);
router.get("/users",  authMiddleware, UserController.getUsers);
router.get("/photos/:id",  UserController.getPhoto);

module.exports = router