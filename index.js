const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
app.use(express.json());
app.use(cors())

dotenv.config();
mongoose.connect(process.env.DB_CONNECT)
          .then(() => {console.log("connected to mongodb");})
          .catch((error) => {
                console.log(error);
            });



const bookRoute = require('./routes/books');
app.use('/api',bookRoute);

app.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port no 8000`)
})