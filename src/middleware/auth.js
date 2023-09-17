export function checkAuth(req, res, next) {
  console.log(req.headers);
  if (req.headers.authorization !== "abc123") {
    res.status(401).json({ message: "User unauthorized! Please login again!" });
    return;
  }
  next();
}
