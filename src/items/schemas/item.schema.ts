import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  goal: Number,
  salary: Number,
  devise: String,
  pictureURl: String,
});
