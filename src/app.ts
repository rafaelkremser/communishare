/* eslint-disable */
import 'reflect-metadata';
import bodyParser from 'body-parser';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';

require('express-async-errors');

import { HttpError } from './utils/errors';

class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.app.use(cors());
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(App.errorHandling);
        this.app.disable('x-powered-by');
    }

    private static errorHandling(
        error: Error | HttpError,
        req: Request,
        res: Response,
        next: NextFunction,
    ) {
        const { code, message, errors } = <any>error;

        const apiError = {
            code: <any>error instanceof HttpError ? code : 500,
            message,
            errors,
        };

        return res.status(apiError.code || 500).send(apiError);
    }
}

export default new App().app;
