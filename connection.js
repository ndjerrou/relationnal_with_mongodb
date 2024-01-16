import mongoose from 'mongoose';

export default () =>
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_LOGIN}:${process.env.DB_LOGIN}>@db.tounu.mongodb.net`
    )
    .then(console.log('Successfuly connected to mongoDB Atlas'))
    .catch(err => {
      console.log(err.message);
      process.exit(1);
    });
