import mongoose from "mongoose";

const connectToDB = async () => {
    try {
        const db = await mongoose.connect(<string>process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
        console.log(`DB connected to:${db.connection.name}`)
    } catch (error) {
        console.log('Could not connect to DB, error: ', error.message)
        process.exit(1)
    }
}

export default connectToDB