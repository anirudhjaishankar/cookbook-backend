import express from "express";
import {
  createNewRecepie,
  deleteRecepie,
  getAllRecepies,
  getRecepieById,
  updateRecepie,
} from "../services/recepie.js";
import { getLoginToken } from "../services/auth.js";
import { checkAuth } from "../middleware/auth.js";
import { checkUsernameAndPassword, createNewUser } from "../services/user.js";
const router = express.Router();

router.get("/receipe", checkAuth, async (req, res) => {
  res.json(await getAllRecepies());
});

router.get("/receipe/:id", async (req, res) => {
  res.json(await getRecepieById(req.params.id));
});

router.post("/receipe", async (req, res) => {
  const receipe = await createNewRecepie(req.body);
  res.json(receipe);
});

router.put("/receipe", async (req, res) => {
  const receipe = await updateRecepie(req.body);
  res.json(receipe);
});

router.delete("/receipe/:id", async (req, res) => {
  await deleteRecepie(req.params.id);
  res.send("Delete sucessfull");
});

router.get("/login", async (req, res) => {
  const loginToken = await checkUsernameAndPassword(
    req.query.username,
    req.query.password
  );
  if (loginToken) {
    res.json({ data: "abc123" });
  } else {
    res.json({ message: "Invalid username or password! Try again!" });
  }
});

router.get("/logout", async () => {});

router.post("/user", async (req, res) => {
  await createNewUser(req.body);
  res.json({ message: "User created successfully!" });
});

export default router;
