
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');// middleware
// const path = require('path')

// // Import the College model
// // const College = require('./models/college');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// // const explorePage = require('../src/ExplorePage')

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://sujithsanthosh710:<sujithsanthosh710>@cluster0.supsp.mongodb.net/', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// })
// .then((data) => console.log(`Database connected with ${data.connection.host}`))
// .catch((error) => console.log(error.message));

// // Routes
// // app.get('/', (req, res) => {
// //     const explorePagePath = path.join(__dirname, '../src/ExplorePage.js');
// // });

// app.get('/',(req,res)=>{
//     res.send("server is running")
// })

// app.post('/add-college', (req, res) => {
//     const { collegeName, departmentName, ratings } = req.body;

//     // Create a new college entry with department and ratings
//     const newCollege = new College({
//         name: collegeName,
//         departments: [
//             {
//                 name: departmentName,
//                 ratings: {
//                     faculty: ratings.faculty,
//                     placement: ratings.placement,
//                     event: ratings.event,
//                     atmosphere: ratings.atmosphere,
//                     canteen: ratings.canteen,
//                     hostel: ratings.hostel
//                 }
//             }
//         ]
//     });

//     newCollege.save()
//         .then(() => res.send('College added successfully'))
//         .catch((error) => res.status(500).send(error.message));
// });

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });



////

// server.js
const express = require('express');
const mongoose = require('mongoose');
const productRoutes = require('./routes/productRoutes');


const app = express();

require('dotenv').config();

// const password = encodeURIComponent('sujith@123');
const dbURI = 'mongodb+srv://sujithsanthosh710:sujith123@cluster0.koyp6.mongodb.net/';

// const dbURI = 'mongodb://localhost:27017/collegedata'

mongoose.connect(dbURI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));


app.use(express.json());
app.use('/api', productRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));



