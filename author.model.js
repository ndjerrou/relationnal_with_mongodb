import { Schema, model } from 'mongoose';

export default model(
  'author',
  new Schema({
    name: String,
  })
);
