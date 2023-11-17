import express  from 'express';
import newProductsRouter from './router/newProductsRouter.js';
import cors from 'cors';

const PORT = 8000;
const server = express();

server.use(express.json());
server.use(express.urlencoded());
server.use(cors());

server.use('/products/new', newProductsRouter);

server.listen(PORT, ()=>{
  console.log(`server running --->> ${PORT}`);
});