import React, { useState } from 'react';

const LinkedInAnalysis = () => {
  const [linkedInUrl, setLinkedInUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    // Simulating API call for LinkedIn profile analysis
    setTimeout(() => {
      setAnalysisResult({
        overallScore: 88,
        sections: {
          headline: {
            score: 90,
            feedback: "Strong, keyword-rich headline that clearly states your value proposition"
          },
          summary: {
            score: 85,
            feedback: "Well-written summary, could include more industry-specific keywords"
          },
          experience: {
            score: 95,
            feedback: "Excellent use of action verbs and quantifiable achievements"
          },
          skills: {
            score: 80,
            feedback: "Good mix of skills, consider adding more trending technologies"
          }
        },
        suggestions: [
          "Add more media to your experience sections",
          "Get more endorsements for your top skills",
          "Expand your network in your target industry",
          "Consider writing LinkedIn articles to showcase expertise"
        ],
        optimization: {
          score: 92,
          feedback: "Your profile is well-optimized for LinkedIn search"
        }
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Input Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Analyze your LinkedIn profile
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Enter your LinkedIn profile URL to get detailed feedback and suggestions</p>
              </div>
              <div className="mt-5">
                <div className="mt-1">
                  <input
                    type="text"
                    value={linkedInUrl}
                    onChange={(e) => setLinkedInUrl(e.target.value)}
                    placeholder="https://www.linkedin.com/in/your-profile"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
                <button
                  onClick={handleAnalyze}
                  disabled={!linkedInUrl || isAnalyzing}
                  className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                  {isAnalyzing ? 'Analyzing...' : 'Analyze Profile'}
                </button>
              </div>
            </div>
          </div>

          {/* Analysis Results */}
          {analysisResult && (
            <div className="mt-8">
              {/* Overall Score */}
              <div className="bg-white shadow sm:rounded-lg mb-6">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-medium text-gray-900">Overall Profile Score</h3>
                    <div className="h-20 w-20 rounded-full border-4 border-indigo-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-gray-900">
                        {analysisResult.overallScore}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section Scores */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {Object.entries(analysisResult.sections).map(([section, data]) => (
                  <div key={section} className="bg-white shadow sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium text-gray-900">
                          {section.charAt(0).toUpperCase() + section.slice(1)}
                        </h3>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
                          {data.score}/100
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-gray-500">{data.feedback}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Suggestions */}
              <div className="mt-6 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Improvement Suggestions</h3>
                  <div className="mt-4 space-y-3">
                    {analysisResult.suggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <i className="fas fa-lightbulb text-yellow-400"></i>
                        </div>
                        <p className="ml-3 text-sm text-gray-700">{suggestion}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Search Optimization */}
              <div className="mt-6 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">Search Optimization</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {analysisResult.optimization.score}/100
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {analysisResult.optimization.feedback}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LinkedInAnalysis;
