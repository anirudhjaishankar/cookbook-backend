import express from "express";
import {
	createNewRecepie,
	deleteRecepie,
	getRecepieById,
	updateRecepie,
} from "../services/recepie.js";
const router = express.Router();

router.get("/receipe", (req, res) => {
	res.send("All receipes");
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

export default router;
