import express from "express";
import reviewRoute from "./routes/review.route";
import connectToDB from "./db";
import errorHandler from "./middleware/errorHandler";
import { OK } from "./constants/httpStatusCodes";

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.use('/review', reviewRoute)

app.get('/', async (req, res, next) => {
    try {
        res.status(OK).json({
            status: "healthy"
        })  
    } catch (error) {
        next(error)
    }
})

app.use(errorHandler)

app.listen(port, async () => {
    console.log(`server listen in port ${port}`)
    await connectToDB()
})