const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require('dotenv');
const cors = require('cors')
app.use(express.json({limit: '50mb'}));
app.use(cors())
app.use(express.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));

dotenv.config();
mongoose.connect("mongodb+srv://math_knots:mathknots@cluster0.sinhd.mongodb.net/mathknots?retryWrites=true&w=majority")
          .then(() => {console.log("connected to mongodb");})
          .catch((error) => {
                console.log(error);
            });



const bookRoute = require('./routes/books');
const mkacademyRoute = require('./routes/mkacademy');
const userRoute = require('./routes/user');


app.use('/api',bookRoute);
app.use('/api',mkacademyRoute);
app.use('/api',userRoute);


app.listen(process.env.PORT || 8000, () => {
    console.log(`Listening on port no 8000`)
})
