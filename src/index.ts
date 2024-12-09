import express from "express";
import reviewRoute from "./routes/review.route";
import connectToDB from "./db";

const app = express()
app.use(express.json())

app.use('/review', reviewRoute)
const port = process.env.PORT || 3000

await connectToDB()

app.listen(port, () => {
    console.log(`server listen in port ${port}`)
})