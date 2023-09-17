import User from "../models/user.js";
import bcrypt from "bcrypt";

export async function checkUsernameAndPassword(username, password) {
  const user = await User.findOne({ username });
  if (user) {
    const checkPass = await bcrypt.compare(password, user.password);
    return checkPass;
  }
  return false;
}

export async function createNewUser(newUser) {
  newUser.password = await bcrypt.hash(newUser.password, 2);
  const user = new User(newUser);
  return await user.save();
}

export async function updateRecepie(updatedRecepie) {
  return await Recepie.updateOne({ _id: updatedRecepie._id }, updatedRecepie);
}

export async function deleteRecepie(id) {
  return await Recepie.deleteOne({ _id: id });
}
