import { Router } from 'express'
import { 
    deleteReview,
    getReview, 
    getReviews, 
    postReview,
    putReview
} from '../controllers/review.controller'

const router = Router()

router.get('/', getReviews)
router.get('/:id', getReview)
router.post('/', postReview)
router.put('/:id', putReview)
router.delete('/:id', deleteReview)

export default router