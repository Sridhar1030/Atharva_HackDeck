const express = require('express');

const app = express();

//Middleware


//Routes

//Server Run
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})