import express from 'express';

const app = express();

//Middleware


//Routes

//Server Run
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})