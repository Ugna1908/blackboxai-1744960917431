import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-indigo-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32 px-4 sm:px-6 lg:px-8">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Improve your resume and</span>
                  <span className="block text-blue-400">LinkedIn profile</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Designed by top recruiters, our AI-powered platform instantly gives you tailored feedback on your resume and LinkedIn profile.
                  Land 5x more interviews, opportunities and job offers.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                    >
                      Get started for free
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      onClick={() => document.getElementById('preview').scrollIntoView({ behavior: 'smooth' })}
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      See preview
                    </button>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Score Preview Section */}
      <div id="preview" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get detailed feedback on your resume
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-4">
            {/* Impact Score */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">IMPACT</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    100/100
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Excellent use of action verbs and quantifiable achievements
                </p>
              </div>
            </div>

            {/* Brevity Score */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">BREVITY</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                    65/100
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Could be more concise in some sections
                </p>
              </div>
            </div>

            {/* Style Score */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">STYLE</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    90/100
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Very good formatting and presentation
                </p>
              </div>
            </div>

            {/* Soft Skills Score */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">SOFT SKILLS</h3>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    100/100
                  </span>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Excellent demonstration of soft skills
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-medium text-gray-900">Detailed Analysis</h3>
                <div className="flex items-center">
                  <div className="h-16 w-16 rounded-full border-4 border-green-500 flex items-center justify-center">
                    <span className="text-xl font-bold text-gray-900">100</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">Quantifying impact with specific metrics</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">Strong action verbs used throughout</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <i className="fas fa-check-circle text-green-500 mt-1"></i>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-700">No spelling errors detected</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why use our platform?
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div className="relative">
              <div className="absolute h-12 w-12 rounded-md bg-indigo-900 flex items-center justify-center">
                <i className="fas fa-robot text-white"></i>
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">AI-Powered Analysis</h3>
                <p className="mt-2 text-base text-gray-500">
                  Get instant, detailed feedback on your resume's content and structure
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute h-12 w-12 rounded-md bg-indigo-900 flex items-center justify-center">
                <i className="fas fa-chart-line text-white"></i>
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">LinkedIn Optimization</h3>
                <p className="mt-2 text-base text-gray-500">
                  Improve your LinkedIn profile to attract more opportunities
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute h-12 w-12 rounded-md bg-indigo-900 flex items-center justify-center">
                <i className="fas fa-search text-white"></i>
              </div>
              <div className="ml-16">
                <h3 className="text-lg font-medium text-gray-900">ATS-Friendly Format</h3>
                <p className="mt-2 text-base text-gray-500">
                  Ensure your resume gets past Applicant Tracking Systems
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-900">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to improve your resume?</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-200">
            Join thousands of job seekers who have improved their resumes with our AI-powered platform.
          </p>
          <Link
            to="/signup"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-900 bg-white hover:bg-indigo-50 sm:w-auto"
          >
            Start for free today
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
