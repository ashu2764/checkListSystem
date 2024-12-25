import express from "express";
import cors from 'cors'
import 'dotenv/config'
import apiRoutes from './routes/apiRoutes.js';
 
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: '*' }));

app.use(express.json());

// Routes
app.use('/api', apiRoutes);

// Serve Frontend
app.use(express.static('public'));



// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
