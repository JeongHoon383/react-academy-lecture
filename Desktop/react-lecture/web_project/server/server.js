import express from 'express';
import cors from 'cors';

const server = express();
const PORT = 8000;

server.use(express.json());
server.use(cors());

server.get('/', (req, res) => {
  console.log('-----> 1');
  res.json({name:'hong'});
});

server.listen(PORT, ()=>{
  console.log(`server running!! ----> ${PORT}`);
});
