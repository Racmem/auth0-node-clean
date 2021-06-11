const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    console.log(`MongoDb Connected: ${conn.connection.host}`.cyan.underline.bold)
  } catch (e) {
    console.log(`MongoDb connection error: ${e}`.red.bold)
  }
}

module.exports = connectDB
