import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Improve your resume</span>
                  <span className="block text-primary-600">with AI-powered insights</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Get instant feedback on your resume. Our AI platform analyzes your resume and provides
                  tailored suggestions to help you land more interviews and job offers.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link
                      to="/signup"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10"
                    >
                      Get started for free
                    </Link>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      to="/samples"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary-700 bg-primary-100 hover:bg-primary-200 md:py-4 md:text-lg md:px-10"
                    >
                      View samples
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Features
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Your personal resume coach
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Get comprehensive feedback on your resume with our AI-powered analysis
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <i className="fas fa-robot text-xl"></i>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">AI-Powered Analysis</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Get instant feedback on your resume's content, format, and effectiveness
                </p>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <i className="fas fa-chart-line text-xl"></i>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Score Tracking</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Track your resume's improvement with our comprehensive scoring system
                </p>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">ATS Optimization</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Ensure your resume passes through Applicant Tracking Systems
                </p>
              </div>

              {/* Feature 4 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Smart Suggestions</p>
                <p className="mt-2 ml-16 text-base text-gray-500">
                  Get personalized suggestions to improve your resume's impact
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Pricing
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Simple, affordable plans
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="mt-10 space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto">
            {/* Free Plan */}
            <div className="border border-gray-200 rounded-lg shadow-sm divide-y divide-gray-200">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Free</h2>
                <p className="mt-4 text-sm text-gray-500">Perfect for getting started</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">₹0</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <Link
                  to="/signup"
                  className="mt-8 block w-full bg-primary-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary-700"
                >
                  Get started
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <i className="fas fa-check text-green-500 flex-shrink-0"></i>
                    <span className="text-sm text-gray-500">Basic resume analysis</span>
                  </li>
                  <li className="flex space-x-3">
                    <i className="fas fa-check text-green-500 flex-shrink-0"></i>
                    <span className="text-sm text-gray-500">Grammar check</span>
                  </li>
                  <li className="flex space-x-3">
                    <i className="fas fa-check text-green-500 flex-shrink-0"></i>
                    <span className="text-sm text-gray-500">Basic formatting suggestions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pro Plan */}
            <div className="border border-primary-200 rounded-lg shadow-sm divide-y divide-gray-200 bg-primary-50">
              <div className="p-6">
                <h2 className="text-lg leading-6 font-medium text-gray-900">Pro</h2>
                <p className="mt-4 text-sm text-gray-500">For serious job seekers</p>
                <p className="mt-8">
                  <span className="text-4xl font-extrabold text-gray-900">₹50</span>
                  <span className="text-base font-medium text-gray-500">/month</span>
                </p>
                <Link
                  to="/signup"
                  className="mt-8 block w-full bg-primary-600 border border-transparent rounded-md py-2 text-sm font-semibold text-white text-center hover:bg-primary-700"
                >
                  Upgrade to Pro
                </Link>
              </div>
              <div className="pt-6 pb-8 px-6">
                <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">
                  What's included
                </h3>
                <ul className="mt-6 space-y-4">
                  <li className="flex space-x-3">
                    <i className="fas fa-check text-green-500 flex-shrink-0"></i>
                    <span className="text-sm text-gray-500">Everything in Free</span>
                  </li>
                  <li className="flex space-x-3">
                    <i className="fas fa-check text-green-500 flex-shrink-0"></i>
                    <span className="text-sm text-gray-500">Advanced AI analysis</span>
                  </li>
                  <li className="flex space-x-3">
                    <i className="fas fa-check text-green-500 flex-shrink-0"></i>
                    <span className="text-sm text-gray-500">ATS optimization</span>
                  </li>
                  <li className="flex space-x-3">
                    <i className="fas fa-check text-green-500 flex-shrink-0"></i>
                    <span className="text-sm text-gray-500">Industry-specific suggestions</span>
                  </li>
                  <li className="flex space-x-3">
                    <i className="fas fa-check text-green-500 flex-shrink-0"></i>
                    <span className="text-sm text-gray-500">Priority support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-primary-600 font-semibold tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted by job seekers
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-quote-left text-primary-500 text-3xl"></i>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-500">Software Engineer</div>
                  </div>
                </div>
                <div className="mt-4 text-gray-600">
                  "This platform helped me optimize my resume and land interviews at top tech companies.
                  The AI suggestions were spot-on!"
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-quote-left text-primary-500 text-3xl"></i>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Michael Chen</div>
                    <div className="text-sm text-gray-500">Recent Graduate</div>
                  </div>
                </div>
                <div className="mt-4 text-gray-600">
                  "As a fresh graduate, I was struggling with my resume. This tool helped me highlight
                  my skills effectively. Highly recommended!"
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white overflow-hidden shadow rounded-lg sm:col-span-2 lg:col-span-1">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <i className="fas fa-quote-left text-primary-500 text-3xl"></i>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Priya Patel</div>
                    <div className="text-sm text-gray-500">Marketing Manager</div>
                  </div>
                </div>
                <div className="mt-4 text-gray-600">
                  "The industry-specific suggestions really helped me tailor my resume for different roles.
                  Worth every rupee!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary-700">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to improve your resume?</span>
            <span className="block">Start for free today</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-primary-200">
            Join thousands of job seekers who have improved their resumes with our AI-powered platform.
          </p>
          <Link
            to="/signup"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary-600 bg-white hover:bg-primary-50 sm:w-auto"
          >
            Get started for free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
