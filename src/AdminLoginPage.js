// import React from 'react';

// const AdminLoginPage = () => {
//   return (
//     <div className="bg-sky-100 flex justify-center items-center h-screen">
//       {/* Left: Image */}
//       <div className="w-1/2 h-screen hidden lg:flex justify-center items-center">
//         <img src="Red and White Video Centric Coming Soon Instagram Post.png"
//           alt="Placeholder"
//           className="object-cover w-3/4 h-3/4 rounded-lg"
//         />
//       </div>

//       {/* Right: Login Form */}
//       <div className="lg:p-36 md:p-52 sm:p-20 p-8 w-full lg:w-1/2">
//         <h1 className="text-2xl font-semibold mb-4">Login</h1>
        
//         {/* Wrapper for the bordered area */}
//         <div className="border border-black rounded-md p-6 bg-white">
//           <form action="#" method="POST">
//             {/* Username Input */}
//             <div className="mb-4">
//               <label htmlFor="username" className="block text-gray-600">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//                 autoComplete="off"
//               />
//             </div>

//             {/* Password Input */}
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-800">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
//                 autoComplete="off"
//               />
//             </div>

//             {/* Replacing the Login Button with Gradient Button */}
//             <div className="flex justify-center items-center">
//               <div className="relative inline-flex group">
//                 <div
//                   className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
//                 </div>
//                 <a href="#" title="Get it now " alt=''
//                   className="relative inline-flex items-center justify-center px-6 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl"
//                   role="button">LoGiN
//                 </a>
//               </div>
//             </div>

//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const  AdminLoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Static admin credentials
  const ADMIN_CREDENTIALS = {
    username: 'admin123',
    password: 'admin@123'
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check credentials
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      // Store admin status in localStorage
      localStorage.setItem('isAdminLoggedIn', 'true');
      // Redirect to dashboard
      navigate('/courses');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default  AdminLoginPage;