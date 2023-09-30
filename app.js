const express = require('express');
const path = require('path');

const bookRouter = require('./routers/bookRoutes');
const userRouter = require('./routers/userRoutes');
const authRouter = require('./routers/authRoutes');

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/', authRouter);

module.exports = app;
