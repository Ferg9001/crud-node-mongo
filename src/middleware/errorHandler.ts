import { ErrorRequestHandler } from "express";
import { INTERNAL_SERVER_ERROR } from "../constants/httpStatusCodes";

const errorHandler: ErrorRequestHandler = (error, req, res, next) => {
    console.log(`PATH: ${req.path}`, error)
    res.status(INTERNAL_SERVER_ERROR).json({
        message: 'Internal server error',
        error: error.message
    })
}

export default errorHandler