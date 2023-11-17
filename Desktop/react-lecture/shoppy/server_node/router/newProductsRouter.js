import express from 'express';
import * as newProductsController from '../controller/newProductsController.js';

const router = express.Router();

router.post('/', newProductsController.insertProduct);

export default router;