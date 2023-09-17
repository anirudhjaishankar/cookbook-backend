import express from "express";
import mongoose from "mongoose";
import router from "./src/routes/index.js";
import "dotenv/config";
const app = express();
const port = 8000;

app.use(express.json());
app.use(router);
try {
	await mongoose.connect(process.env.MONGO_DB);
	console.log("DB connected successfully");
} catch (err) {
	console.log(err);
	console.log("Failed to connect with DB");
}

app.listen(port, () => {
	console.log(`Application started at port: ${port}`);
});
