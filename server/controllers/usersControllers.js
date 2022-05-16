const jwt = require("jsonwebtoken");
const myUserId = "1";
const myUserName = "Marian";
const myPassword = "password";

const userLogin = async (req, res) => {
  const { username, password } = req.body;
  if (username === myUserName && password === myPassword) {
    const token = jwt.sign(
      { id: myUserId, username },
      process.env.TOKEN_SECRET,
      {
        expiresIn: "7d",
      }
    );
    res.status(200).json({ token });
  } else {
    res.status(401).json({ msg: "bad request" });
  }
};

module.exports = { userLogin };
