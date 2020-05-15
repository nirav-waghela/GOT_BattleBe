const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
// const mongoose = require("mongoose");
// const gotData = require("./models/got");
// const app_config = require("./configurations/app_config.js");
// const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(bodyParser.json());


// mongoose
//   .connect(app_config.database.connect_uri, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   })
//   .then(() => {
//     console.log("Database connection successful");
//   })
//   .catch(() => {
//     console.error("Database connection failed");
//   });

// app.use(require("./routes/api"));

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(3000, () => {
  console.log("App listening on port 3000");
});















// const express = require('express')
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const gotData = require('./models/got')
// const app_config = require('./configurations/app_config.js')

// const app = express()

// app.use(cors())
// app.use(bodyParser.json())


// mongoose
//     .connect(
//         app_config.database.connect_uri,
//         {   
//             useUnifiedTopology: true,
//             useNewUrlParser:true
//         }

//     )
//     .then(()=>{
//         console.log('Database connection successful')
//     })
//     .catch(()=>{
//         console.error('Database connection failed')
//     })


// app.use(require('./routes/api'))    

// app.listen(3000, ()=>{
//     console.log('App listening on port 3000')
// })

// app.get('/',(req, res)=>{
//     res.send('hello')
// })