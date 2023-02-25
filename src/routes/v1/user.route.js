const express = require("express");
const validate = require("../../middlewares/validate");
const userValidation = require("../../validations/user.validation");
const userController = require("../../controllers/user.controller");
const authValidation = require("../../validations/auth.validation");
const auth = require("../../middlewares/auth");

const router = express.Router();

// TODO: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Implement a route definition for `/v1/users/:userId`

const validateUser = validate(userValidation.getUser);
const authenticate = auth;
router.get("/:userId", validateUser, authenticate, userController.getUser);

router.put(
  "/:userId",
  auth,
  validate(userValidation.setAddress),
  userController.setAddress
);

module.exports = router;
