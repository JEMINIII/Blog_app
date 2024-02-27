import express from 'express';

import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';

// const express = require('express');
const app = express()
// const auth_routes = require('./routes/auth.js');
const port = 3000;

app.use(express.json())
app.use("/api/auth",authRoutes)
app.use("/api/users",authRoutes)
// app.use("/api/posts",postRoutes)

app.use("/api/posts",postRoutes)

app.listen(port,()=>{
    console.log(`App listening on port ${port}`);
})