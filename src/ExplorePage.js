// import React, { useState, useMemo ,useEffect} from 'react';
// import {Link  } from 'react-router-dom';
// import TextField from '@mui/material/TextField';
// import Autocomplete from '@mui/material/Autocomplete';
// import { Search } from 'lucide-react';

// const departments = [
//   { label: 'M.Tech', icon: '🎓' },
//   { label: 'B.Tech', icon: '🔧' },
//   { label: 'MCA', icon: '💻' },
//   { label: 'Degree', icon: '📚' },
// ];

// const collegeData = {
//   'M.Tech': [
//     { 
//       name: 'Indian Institute of Technology',
//       location: 'Delhi',
//       rating: 4.8,
//       fees: '₹2.5L/year',
//       placement: '100%',
//       courses: ['Computer Science', 'Electronics', 'Mechanical'],
//       facilities: ['Research Labs', 'Smart Classrooms', 'Sports Complex']
//     },
//     // ... (similar detailed data for other M.Tech colleges)
//   ],
//   'B.Tech': [
//     {
//       name: 'VIT University',
//       location: 'Vellore',
//       rating: 4.5,
//       fees: '₹1.8L/year',
//       placement: '92%',
//       courses: ['Computer Engineering', 'Civil', 'Electrical'],
//       facilities: ['Innovation Center', 'Library', 'Gym']
//     },
//     // ... (similar detailed data for other B.Tech colleges)
//   ],
//   'MCA': [
//     {
//       name: 'IIIT Bangalore',
//       location: 'Bangalore',
//       rating: 4.6,
//       fees: '₹1.5L/year',
//       placement: '95%',
//       courses: ['Software Development', 'Data Science', 'AI & ML'],
//       facilities: ['Computer Labs', 'Digital Library', 'Placement Cell']
//     },
//     {
//       name: 'IIT Calicut',
//       location: 'Kerala',
//       rating: 4.6,
//       fees: '₹1.5L/year',
//       placement: '95%',
//       courses: ['Software Development', 'Data Science', 'AI & ML'],
//       facilities: ['Computer Labs', 'Digital Library', 'Placement Cell']
//     }
//     // ... (similar detailed data for other MCA colleges)
//   ],
//   'Degree': [
//     {
//       name: 'St. Stephen\'s College',
//       location: 'Delhi',
//       rating: 4.7,
//       fees: '₹80K/year',
//       placement: '85%',
//       courses: ['Arts', 'Science', 'Commerce'],
//       facilities: ['Labs', 'Library', 'Sports']
//     },
//     // ... (similar detailed data for other Degree colleges)
//   ],
// };

// const ExplorePage = () => {
//   const [selectedDepartment, setSelectedDepartment] = useState(null);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [sortCriteria, setSortCriteria] = useState('rating');
//   const [showColleges, setShowColleges] = useState(false);

//   // Filter and sort colleges based on search query and sort criteria
//   const filteredColleges = useMemo(() => {
//     if (!selectedDepartment) return [];
    
//     let colleges = collegeData[selectedDepartment.label];
    
//     // Filter based on search query
//     if (searchQuery) {
//       colleges = colleges.filter(college => 
//         college.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         college.location.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
    
//     // Sort colleges
//     return [...colleges].sort((a, b) => {
//       switch (sortCriteria) {
//         case 'rating':
//           return b.rating - a.rating;
//         case 'fees':
//           return parseInt(a.fees) - parseInt(b.fees);
//         case 'placement':
//           return parseInt(b.placement) - parseInt(a.placement);
//         default:
//           return 0;
//       }
//     });
//   }, [selectedDepartment, searchQuery, sortCriteria]);

//   const handleDepartmentChange = (event, newValue) => {
//     setSelectedDepartment(newValue);
//     setShowColleges(false);
//     setSearchQuery('');
//   };
  

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 relative overflow-hidden p-4 md:p-8">
//   {/* Animated Background Elements */}
//   <div className="absolute inset-0 overflow-hidden">
//     <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-teal-500 shadow-lg animate-pulse transform -translate-y-1/2 opacity-50"></div>
//     <div className="absolute top-1/3 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-500 via-purple-500 to-pink-500 shadow-lg animate-pulse transform -translate-y-1/2 opacity-30"></div>
//     <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 via-teal-500 to-pink-500 shadow-lg animate-pulse transform -translate-y-1/2 opacity-30"></div>
//   </div>

//   {/* Main Content */}
//   <div className="relative z-10 max-w-6xl mx-auto">
//     {/* Header Section */}
//     <div className="text-center text-white mb-8">
//       <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-teal-500">
//         Find Your Perfect College
//       </h1>
//       <p className="text-gray-300 max-w-2xl mx-auto">
//         Explore top colleges based on your preferred stream and make an informed decision for your future.
//       </p>
//     </div>

//     {/* Selection Card */}
//     <div className="bg-white/10 backdrop-blur-sm shadow-xl rounded-2xl p-6 mb-8">
//       <div className="space-y-6">
//         {/* Department Selection */}
//         <div className="flex flex-col items-center gap-4">
//           <h2 className="text-2xl font-semibold text-white">Select Your Stream</h2>
//           <div className="w-full flex justify-center">
//             <Autocomplete
//               disablePortal
//               options={departments}
//               value={selectedDepartment}
//               onChange={handleDepartmentChange}
//               getOptionLabel={(option) => `${option.icon} ${option.label}`}
//               sx={{
//                 width: '100%',
//                 maxWidth: 400,
//                 "& .MuiOutlinedInput-root": {
//                   backgroundColor: "black",
//                   color: "white",
//                 },
//                 "& .MuiInputLabel-root": {
//                   color: "white",
//                 },
//                 "& .MuiAutocomplete-popupIndicator": {
//                   color: "white",
//                 },
//                 "& .MuiPaper-root": {
//                   backgroundColor: "black",
//                 },
//                 "& .MuiAutocomplete-option": {
//                   color: "white",
//                   backgroundColor: "black",
//                   "&:hover": {
//                     backgroundColor: "#333",
//                   },
//                 },
//               }}
//               renderInput={(params) => (
//                 <TextField
//                   {...params}
//                   label="Select Department"
//                   variant="outlined"
//                 />
//               )}
//             />
//           </div>
//         </div>

//         {/* Search and Filter Section */}
//         {selectedDepartment && (
//           <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
//             <div className="relative w-full md:w-auto">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
//               <input
//                 type="text"
//                 placeholder="Search colleges..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 pr-4 py-2 w-full md:w-64 border border-gray-500/50 bg-transparent rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none text-white"
//               />
//             </div>
//             <select
//               value={sortCriteria}
//               onChange={(e) => setSortCriteria(e.target.value)}
//               className="p-2 border border-gray-500/50 bg-black text-white rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 outline-none"
//             >
//               <option value="rating">Sort by Rating</option>
//               <option value="fees">Sort by Fees</option>
//               <option value="placement">Sort by Placement</option>
//             </select>
//           </div>
//         )}
//       </div>
//     </div>

//     {/* College Grid */}
//    {/* College Grid */}
// {selectedDepartment && (
//   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//     {filteredColleges.map((college, index) => (
//       <div
//         key={index}
//         className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 p-6"
//       >
//         <div className="flex justify-between items-start mb-4">
//           <h3 className="font-bold text-xl text-white">{college.name}</h3>
//           <span className="bg-pink-500 text-white px-2 py-1 rounded-full text-sm">
//             {college.rating} ⭐
//           </span>
//         </div>
//         <div className="space-y-2 text-gray-300">
//           <p className="flex items-center gap-2">
//             <span className="text-pink-500">📍</span> {college.location}
//           </p>
//           <p className="flex items-center gap-2">
//             <span className="text-pink-500">💰</span> {college.fees}
//           </p>
//           <p className="flex items-center gap-2">
//             <span className="text-pink-500">🎓</span> Placement: {college.placement}
//           </p>

//           {/* Popular Courses Section */}
//           <div className="pt-4 border-t border-gray-500/50">
//             <p className="text-sm font-semibold mb-2 text-white">Popular Courses:</p>
//             <div className="flex flex-wrap gap-2">
//               {college.courses?.map((course, i) => (
//                 <span key={i} className="bg-gray-100/20 px-2 py-1 rounded-full text-xs text-gray-200">
//                   {course}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* Facilities Section */}
//           <div className="pt-4 border-t border-gray-500/50">
//             <p className="text-sm font-semibold mb-2 text-white">Facilities:</p>
//             <div className="flex flex-wrap gap-2">
//               {college.facilities?.map((facility, i) => (
//                 <span key={i} className="bg-gray-100/20 px-2 py-1 rounded-full text-xs text-gray-200">
//                   {facility}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// )}


//     {/* Empty State */}
//     {selectedDepartment && filteredColleges.length === 0 && (
//       <div className="text-center text-gray-400 py-12">
//         <p className="text-xl">No colleges found matching your criteria</p>
//       </div>
//     )}
//   </div>
// </div>

//   );  
   
// };

// export default ExplorePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ExplorePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/api/products');
      setProducts(response.data);
    } catch (error) {
      setError('Failed to fetch products');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;
  if (error) return <div className="text-center py-8 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Explore Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-semibold">${product.price}</span>
                  <span className="text-gray-500">{product.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;