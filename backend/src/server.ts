import express, { Request, Response } from 'express';
import locationRoutes from './routes/locationRoutes';
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from 'body-parser';
import connectDB from "./config/db";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/locations', locationRoutes);

app.use(bodyParser.json());

// Start the server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});