import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './database'; 
import routes from './routes';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
