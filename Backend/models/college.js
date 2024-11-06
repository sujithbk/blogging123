// // models/College.js
// const mongoose = require('mongoose');

// // Define Rating Schema
// const RatingSchema = new mongoose.Schema({
//     faculty: { type: Number, min: 1, max: 5 },
//     placement: { type: Number, min: 1, max: 5 },
//     event: { type: Number, min: 1, max: 5 },
//     atmosphere: { type: Number, min: 1, max: 5 },
//     canteen: { type: Number, min: 1, max: 5 },
//     hostel: { type: Number, min: 1, max: 5 }
// });

// // Define Department Schema
// const DepartmentSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     ratings: RatingSchema
// });

// // Define College Schema
// const CollegeSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     departments: [DepartmentSchema]
// });

// // Export College model
// module.exports = mongoose.model('College', CollegeSchema);
