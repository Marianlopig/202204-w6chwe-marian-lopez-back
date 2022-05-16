const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  if (token === null) return res.sendStatus(401);

  jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => {
    debug(error);

    if (error) return res.sendStatus(403);
    req.user = user;

    next();
  });
};
