import { Schema, model } from 'mongoose';

export default model(
  'course',
  new Schema({
    name: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'author',
    },
  })
);
