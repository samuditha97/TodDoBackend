import mongoose from "mongoose";

export const connect = () => {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.connection.once("open", () => {
    console.log("connected to MongoDb");
  });
};

export const disconnect = (done) => {
  mongoose.disconnect(done);
};
