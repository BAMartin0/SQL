const router = require('express').Router();
const { User } = require('../../models/user');
const { createUser } = require('../userCreate');
const withAuth = require('../../utils/auth')


router.post("/login", async (req, res) => {
  try {
    const existingUser = await User.findOne({
      where: { email: req.body.email },
    });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user using createUser function
    const newUser = await createUser(
      req.body.username,
      req.body.email,
      req.body.password
    );

    // Log in the newly created user
    req.session.save(() => {
      req.session.user_id = newUser.id;
      req.session.logged_in = true;
      res.json({ user: newUser, message: "User created and logged in!" });
    });
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).json({ message: "Failed to create user" });
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;