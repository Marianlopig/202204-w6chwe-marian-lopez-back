const jwt = require("jsonwebtoken");
const User = require("../../db/models/User");

const userLogin = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username, password: password });
  if (user) {
    const token = jwt.sign(
      { id: user._id, username: user.username },
      process.env.TOKEN_SECRET,
      { expiresIn: "7d" }
    );
    res.status(200).json({ token });
  } else {
    res.status(401).json({ msg: "bad request" });
  }
};

module.exports = { userLogin };
