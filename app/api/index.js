const express = require('express');
const usersRouter = require('./routes/users');
const cors = require('cors');
const validatorHandler = require('./middlewares/validatorHandler');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors({
  origin: '*'
}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(`
    <p>Hola, bienvenido a mi servidor.</p>
    `);
});

const router = express.Router();
app.use('/api/users', router);
router.use('/', usersRouter);

app.use(validatorHandler);

app.listen(port, ()=>{
  console.log('Port: ' + port);
  console.log("http://localhost:" + port + "/api");
})