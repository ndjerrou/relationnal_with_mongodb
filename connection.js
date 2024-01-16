import mongoose from 'mongoose';

export default () => {
  const URL = `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_MDP}@db.tounu.mongodb.net/relationnal`;
  mongoose
    .connect(URL)
    .then(console.log('Successfuly connected to mongoDB Atlas'))
    .catch(err => {
      console.log(err.message);
      process.exit(1);
    });
};
