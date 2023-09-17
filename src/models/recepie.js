import mongoose from "mongoose";
const { Schema } = mongoose;
const ReceipeSchema = new Schema({
	name: String,
	img: String,
	description: String,
});
const Recepie = mongoose.model("Recepie", ReceipeSchema);
export default Recepie;
