import React from 'react';

const PathwaysPage = () => {
  const careers = [
    {
      title: "Data Scientist",
      description: "Analyze complex data sets to help organizations make better decisions.",
      education: [
        "Bachelor's/Master's in Computer Science, Statistics, or related field",
        "IBM Data Science, Google Data Analytics certifications"
      ],
      skills: [
        "Python, R, SQL",
        "Machine Learning (TensorFlow, PyTorch)",
        "Statistical analysis and modeling",
        "Data visualization (Tableau, Power BI)",
        "Big data technologies (Hadoop, Spark)"
      ],
      careerPath: [
        "Junior Data Analyst",
        "Data Scientist",
        "Senior Data Scientist",
        "Lead Data Scientist"
      ],
      timeToSenior: "5-7 years",
      salary: "$90,000 - $150,000+"
    },
    {
      title: "Software Developer",
      description: "Design and build applications and software systems.",
      education: [
        "Bachelor's in Computer Science or related field",
        "Bootcamp certification (alternative path)"
      ],
      skills: [
        "Programming languages (Java, Python, JavaScript)",
        "Web frameworks (React, Angular, Node.js)",
        "Version control (Git)",
        "Database management",
        "Software development methodologies"
      ],
      careerPath: [
        "Junior Developer",
        "Software Developer",
        "Senior Developer",
        "Tech Lead"
      ],
      timeToSenior: "4-6 years",
      salary: "$80,000 - $140,000+"
    },
    {
      title: "Cybersecurity Analyst",
      description: "Protect organizations from digital threats and security breaches.",
      education: [
        "Bachelor's in Cybersecurity or related field",
        "CompTIA Security+, CISSP, CEH certifications"
      ],
      skills: [
        "Network security",
        "Security frameworks and protocols",
        "Penetration testing",
        "Security information and event management (SIEM)",
        "Incident response and forensics"
      ],
      careerPath: [
        "Security Analyst",
        "Senior Security Analyst",
        "Security Engineer",
        "CISO"
      ],
      timeToSenior: "5-8 years",
      salary: "$85,000 - $160,000+"
    }
  ];

  const CareerCard = ({ career }) => (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
      <div className="bg-blue-600 p-4 text-white">
        <h2 className="text-2xl font-bold mb-2">{career.title}</h2>
        <p className="text-blue-100">{career.description}</p>
      </div>
      <div className="p-6 space-y-6">
        {/* Education Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
            </svg>
            <h3 className="text-lg">Educational Requirements</h3>
          </div>
          <ul className="space-y-2">
            {career.education.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-600 mt-2" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {/* Skills Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
            </svg>
            <h3 className="text-lg">Technical Skills</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {career.skills.map((skill, i) => (
              <span key={i} className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm hover:bg-blue-100 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </div>
        {/* Career Path Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-blue-600 font-semibold">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <h3 className="text-lg">Career Progression</h3>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {career.careerPath.map((step, i) => (
              <React.Fragment key={i}>
                <span className="text-gray-700">{step}</span>
                {i < career.careerPath.length - 1 && (
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
                  </svg>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-4">
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-sm text-gray-600">Time to Senior Level</p>
              <p className="font-semibold text-blue-600">{career.timeToSenior}</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3">
              <p className="text-sm text-gray-600">Salary Range</p>
              <p className="font-semibold text-blue-600">{career.salary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 text-gray-900">IT Career Paths</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore various career paths in the technology industry, including required skills,
          education, and typical career progression.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careers.map((career, index) => (
            <CareerCard key={index} career={career} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PathwaysPage;
