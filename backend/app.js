import express from 'express';
import "dotenv/config.js";
import cors from 'cors';
import db from './database/db.js';
import customerRoutes from './routes/routes.js';

const app = express();

app.use(cors());
app.use(express.json());
app.use('/customers', customerRoutes);

try {
    await db.authenticate()
    console.log('Connection established!')
} catch (error) {
    console.log(`The server returned an error: ${error.message}`)
}

app.listen(8000, () => {
    console.log('Server listening on port 8000')
})