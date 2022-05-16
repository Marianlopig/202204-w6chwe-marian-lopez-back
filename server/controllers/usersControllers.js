const jwt = require("jsonwebtoken");
const myUserName = "Marian";
const myPassword = "password";

const userLogin = async (req, res) => {
  const { username, password } = req.body;
  if (username === myUserName && password === myPassword) {
    const token = jwt.sign({ username }, process.env.TOKEN_SECRET, {
      expiresIn: "1800s",
    });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ msg: "bad request" });
  }
};

module.exports = { userLogin };
