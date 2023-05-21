const express = require("express");
const router = express.Router();
const UserService = require("../service/users.service");
const validatorHandler = require("../middlewares/validatorHandler");
const {
  getUserScheme,
  updateUserScheme,
  createUserScheme,
} = require("../scheme/scheme");
const users = new UserService();

router.get("/", async (req, res) => {
  res.json(await users.getUsers());
});

router.get(
  "/:id",
  validatorHandler(getUserScheme, "params"),
  async (req, res) => {
    const { id } = req.params;
    const user = await users.getUserById(id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json("User not found.");
    }
  }
);

router.post(
  "/",
  validatorHandler(createUserScheme, "body"),
  async (req, res) => {
    const body = req.body;
    console.log(body);
    const newUser = await users.createUser(body);

    res.status(201).json(newUser);
  }
);

router.patch(
  "/:id",
  validatorHandler(getUserScheme, "params"),
  validatorHandler(updateUserScheme, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updatedUser = await users.updateUser(id, body);

      res.status(201).json(updatedUser);
    } catch(err){
      console.log(err);
      next();
    }
  }
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await users.deleteUser(id);

  res.status(201).json(deletedUser);
});

module.exports = router;
