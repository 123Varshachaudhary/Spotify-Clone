import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import songRouter from './src/routes/songRoute.js';
import connectDB from './src/config/mongodb.js';
import connectCloudinary from './src/config/cloudinary.js';
import albumRoute from './src/routes/albumRoute.js';

// App config
const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/song", songRouter);
app.use('/api/album',albumRoute)

app.get('/', (req, res) => res.send("API Working"));

// Start server after DB & Cloudinary connection
const startServer = async () => {
  await connectDB();
  connectCloudinary();

  app.listen(port, () =>
    console.log(`🚀 Server started on http://localhost:${port}`)
  );
};

startServer();
