import express from "express";
import bodyParser from "body-parser";
import createError from "http-errors-lite";
import {StatusCodes} from "http-status-codes";
import cors from "cors";
import path from "path";

export const createAnApp = () => {
    const app = express();
    app.use(express.json());
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(cors({
        origin: 'http://localhost:3000',
        optionsSuccessStatus: 200,
        methods: "GET, PUT, DELETE, POST"
    }));
    app.use(express.static(__dirname + '/public'));
    return app;
};

export const notFoundHandler = (req, res, next) => {
    next(createError(StatusCodes.NOT_FOUND, `${req.originalUrl} route not found.`));
};

export const errorHandler = (err, req, res, _next) => {
    res.status(err.statusCode || 500).send({
        msg : 'Something unwanted occured ...',
        error : err.message
    });
};

export const finishApp = (app) => {
    
    app.use(notFoundHandler);
    app.use(errorHandler);
};