import Recepie from "../models/recepie.js";

export async function getAllRecepies() {
	return await Recepie.find();
}

export async function getRecepieById(id) {
	return await Recepie.find({ _id: id });
}

export async function createNewRecepie(newRecepie) {
	const receipe = new Recepie(newRecepie);
	return await receipe.save();
}

export async function updateRecepie(updatedRecepie) {
	return await Recepie.updateOne({ _id: updatedRecepie._id }, updatedRecepie);
}

export async function deleteRecepie(id) {
	return await Recepie.deleteOne({ _id: id });
}
