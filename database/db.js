const mongoose = require("mongoose");
const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://hiraldpatel15497:qcr6rTN1ROOL6rzE@cluster0.1blmtxb.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log('Database connect success')
  } catch (err) {
    console.log(err);
  }
};


module.exports=connectDB;