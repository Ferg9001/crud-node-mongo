import catchErrors from "../utils/catchErrors";
import Review from '../models/review.model'
import { 
    BAD_REQUEST,
    CREATED,
    NOT_FOUND,
    OK 
} from '../constants/httpStatusCodes'

export const getReviews = catchErrors(
    async (req, res) => {
        const reviews = await Review.find()
        res.status(OK).json(reviews)
    }
)

export const getReview = catchErrors(
    async (req, res) => {
        const {id} = req.params
        if (!id) {
            res.status(BAD_REQUEST).json({message: 'no se encontro un id'})
            return
        }

        const review = await Review.findById(id)
        if(!review) {
            res.status(NOT_FOUND).json({message: 'no se la encontro la review'})
            return
        }
        res.status(OK).json(review)
    }
)

export const postReview = catchErrors(
    async (req, res) => {
        const {title, score, text} = req?.body
        const review = new Review({
            title,
            text,
            score
        })
        const newReview = await review.save()
        res.status(CREATED).json(newReview)
    }
)

export const putReview = catchErrors(
    async (req, res) => {
        const { id } = req.params
        const {title, score, text} = req?.body
        const review = await Review.findByIdAndUpdate(id, {title, score, text}, {new: true});
        res.status(OK).json(review)
    }
)

export const deleteReview = catchErrors(
    async (req, res) => {
        const { id } = req.params
        const review = await Review.findByIdAndDelete(id);
        if(!review) {
            res.status(NOT_FOUND).json({message: 'no se la encontro la review'})
            return
        }
        res.status(OK).json({message: 'se elimino con exito'})
    }
)