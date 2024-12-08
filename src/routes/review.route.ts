import { Router } from 'express'
import Review from '../models/review.model'

const router = Router()

router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find()
        res.json(reviews)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', async (req, res) => {
    const {id} = req.params
    if (!id) {
        res.status(400).json({message: 'no se encontro un id'})
        return
    }
    try {
        const review = await Review.findById(id)
        if(!review) {
            res.status(404).json({message: 'no se la encontro la review'})
            return
        }
        res.status(200).json(review)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    try {
        const {title, score, text} = req?.body
        const review = new Review({
            title,
            text,
            score
        })
        const newReview = await review.save()
        res.status(201).json(newReview)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const {title, score, text} = req?.body
        const review = await Review.findByIdAndUpdate(id, {title, score, text}, {new: true});
        res.status(201).json(review)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params
        const review = await Review.findByIdAndDelete(id);
        if(!review) {
            res.status(404).json({message: 'no se la encontro la review'})
            return
        }
        res.status(200).json({message: 'se elimino con exito'})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

export default router