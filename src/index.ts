import express from "express";
import mongoose from "mongoose";
import reviewRoute from "./routes/review.route";

const app = express()
app.use(express.json())
 
const db = await mongoose.connect(<string>process.env.MONGO_URL, {dbName: process.env.MONGO_DB_NAME})
console.log(`DB connected to:${db.connection.name}`)

app.use('/review', reviewRoute)
const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`server listen in port ${port}`)
})