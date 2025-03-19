import express from 'express';
import connectDB from './db';
import userRoutes from './routes/userRoutes';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
app.use(express.json());

const PORT = process.env.PORT|| 3000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/your_database';

// Connect to MongoDB
connectDB( MONGODB_URI);

// Use user routes
app.use('/api', userRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});