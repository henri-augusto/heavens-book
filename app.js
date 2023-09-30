const express = require('express');
const bookRouter = require('./routers/bookRoutes');
const userRouter = require('./routers/userRoutes');

const app = express();

app.use(express.json());

app.use('/api/v1/books', bookRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;
