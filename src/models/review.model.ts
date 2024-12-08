import mongoose from "mongoose"

const reviewSchema = new mongoose.Schema({
    title: String,
    text: String,
    score: Number
})

export default mongoose.model("Review", reviewSchema)