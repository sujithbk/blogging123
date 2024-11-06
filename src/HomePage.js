import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const NewLogo = 'White and Yellow Rectangle Action Fitness Logo.png'; // Update the path

const PortfolioPage = () => {
  return (
    <div className="w-full min-h-screen bg-black overflow-hidden rounded-lg">
      <header className="lg:px-16 px-4 flex flex-wrap items-center py-4 shadow-lg rounded-t-lg">
        <div className="flex-1 flex justify-between items-center">
          <img className="sm:w-[15rem] xs:w-[10rem] z-10" src={NewLogo} alt="Logo" />
          <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block ml-auto">
            <img 
              src="/path/to/Green and Orange University Icon Logo.png" // Update the path accordingly
              alt="Menu" 
              className="w-5 h-5" 
            />
          </label>58
        </div>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div className="hidden md:flex md:items-center md:w-auto w-full z-10" id="menu">
          <nav>
            <ul className="md:flex items-center justify-between text-base xl:text-lg text-gray-100 pt-4 md:pt-0">
              <li><Link to="/" className="md:p-4 py-3 px-0 block text-rose-500 hover:text-rose-500">Home</Link></li>
              <li><Link to="/about" className="md:p-4 py-3 px-0 block hover:text-rose-500">About Us</Link></li>
              <li><Link to="/colleges" className="md:p-4 py-3 px-0 block hover:text-rose-500">Colleges</Link></li>
              <li><Link to="/courses" className="md:p-4 py-3 px-0 block hover:text-rose-500">AdminPage</Link></li>
              <li>
  <Link to="/pathways" className="md:p-4 py-3 px-0 block hover:text-rose-500">
    Pathways
  </Link>
</li>

              <li><Link to="/admin" className="md:p-4 py-3 px-0 block hover:text-rose-500 md:mb-0 mb-2">Admin</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Image moved to right */}
      <div className="absolute hidden sm:block left-[55%] top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img 
          className="xxl:h-[680px] xl:h-[500px] md:h-[450px] sm:h-[480px]" 
          src="https://techakim.com/sam/tg/7268/li/imgs/2.png" 
          alt="Incognito" 
        />
      </div>

      <div className="lg:px-16 xs:px-4 px-8 pb-4 min-h-full flex xs:flex-col sm:flex-row sm:items-center xs:mt-10 sm:mt-0 text-white overflow-auto">
        {/* Column 1 */}
        <div className="w-full flex flex-col z-10 rounded-lg overflow-hidden">
          <h1 className="sm:text-6xl xs:text-3xl font-semibold font-serif text-left">Hey Students!!</h1>

          <div className="mt-4 lg:w-[70%] xs:w-full text-white text-center">
            <h4 className="text-rose-500 lg:text-2xl text-center mb-2">This is US</h4>
            <p className="text-sm xl:text-xl text-justify leading-relaxed">
              Discover the perfect MCA college for your future! Our platform empowers aspiring MCA students by providing comprehensive insights into various colleges, including placement opportunities, faculty quality, campus life, hostel amenities, and food services. 
              Key features like Rank Search and Path Finder help you identify suitable colleges and map successful career paths. With user-friendly search options, interactive charts, and a responsive design, navigating your educational journey has never been easier. Join our discussion forum to connect, share experiences, and get valuable advice from fellow students. 
              Start your journey towards a successful career today!
            </p>
            <div className="mt-6 w-full flex justify-center">
              <Link to="/explore">
                <button className="px-6 py-2 bg-rose-500 text-lg text-white rounded-sm lg:text-2xl">Explore</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="w-full flex sm:flex-col xs:justify-center xs:mt-4 sm:mt-0 sm:gap-8 xs:gap-2 xs:bg-gray-700/60 sm:bg-transparent p-4 rounded-lg z-10">
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">30</h2>
              <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
            </div>
            <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center"> Career Paths Mapped</h4>
          </div>
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">50</h2>
              <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
            </div>
            <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center">Colleges Evaluated</h4>
          </div>
          <div className="flex flex-col sm:items-end xs:items-center">
            <div className="inline-flex gap-1 items-center">
              <h2 className="xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-semibold">100</h2>
              <h2 className="text-rose-500 xl:text-8xl md:text-7xl sm:text-6xl xs:text-3xl font-extrabold">+</h2>
            </div>
            <h4 className="xs:text-sm sm:text-lg xl:text-xl xs:text-center"> Active Users</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
