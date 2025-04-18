import React, { useState } from 'react';

const DashboardSubscriber = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    // TODO: Implement actual file upload and comprehensive analysis
    simulateAnalysis();
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate API call delay
    setTimeout(() => {
      setAnalysis({
        score: 85,
        sections: {
          grammar: { score: 90, suggestions: ['Fix comma in second paragraph', 'Review semicolon usage'] },
          formatting: { score: 85, suggestions: ['Increase line spacing', 'Make headers more prominent'] },
          content: { score: 80, suggestions: ['Add more quantifiable achievements', 'Strengthen action verbs'] },
          keywords: { score: 88, suggestions: ['Add "project management" keyword', 'Include more technical skills'] },
          ats: { score: 82, suggestions: ['Simplify resume template', 'Remove tables and graphics'] }
        },
        industryMatch: 78,
        keywordMatch: 85,
        improvementHistory: [65, 72, 78, 85]
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Pro Dashboard</h1>
              <p className="mt-1 text-gray-600">
                Welcome back! Let's make your resume even better.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                Pro Member
              </span>
              <button className="btn-primary">
                <i className="fas fa-download mr-2"></i>
                Download Report
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Upload and Quick Stats */}
          <div className="lg:col-span-1">
            {/* Upload Section */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Resume</h2>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <input
                  type="file"
                  id="resume-upload"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer flex flex-col items-center justify-center"
                >
                  <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                  <span className="text-gray-600">
                    {file ? file.name : 'Drop your resume here or click to upload'}
                  </span>
                  <span className="text-sm text-gray-500 mt-2">
                    Supports PDF, DOC, DOCX (Max 5MB)
                  </span>
                </label>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Stats</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Industry Match</span>
                    <span className="font-semibold text-primary-600">
                      {analysis?.industryMatch || 0}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${analysis?.industryMatch || 0}%` }}
                    ></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Keyword Match</span>
                    <span className="font-semibold text-primary-600">
                      {analysis?.keywordMatch || 0}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full"
                      style={{ width: `${analysis?.keywordMatch || 0}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Analysis Results */}
          <div className="lg:col-span-2">
            {isAnalyzing ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
                  <span className="ml-3 text-gray-600">Analyzing your resume...</span>
                </div>
              </div>
            ) : analysis ? (
              <div className="bg-white rounded-lg shadow-sm p-6">
                {/* Tabs */}
                <div className="border-b border-gray-200 mb-6">
                  <nav className="-mb-px flex space-x-8">
                    {['overview', 'grammar', 'formatting', 'content', 'keywords', 'ats'].map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                          whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm
                          ${activeTab === tab
                            ? 'border-primary-500 text-primary-600'
                            : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                          }
                        `}
                      >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                      </button>
                    ))}
                  </nav>
                </div>

                {/* Tab Content */}
                {activeTab === 'overview' && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Overall Score</h3>
                      <div className="flex items-center">
                        <div className="relative w-24 h-24">
                          <svg className="w-full h-full" viewBox="0 0 36 36">
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#E5E7EB"
                              strokeWidth="3"
                            />
                            <path
                              d="M18 2.0845
                                a 15.9155 15.9155 0 0 1 0 31.831
                                a 15.9155 15.9155 0 0 1 0 -31.831"
                              fill="none"
                              stroke="#2563EB"
                              strokeWidth="3"
                              strokeDasharray={`${analysis.score}, 100`}
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-2xl font-bold text-primary-600">{analysis.score}</span>
                          </div>
                        </div>
                        <div className="ml-6">
                          <p className="text-sm text-gray-500">
                            Your resume is performing well! Here are some suggestions to make it even better:
                          </p>
                          <ul className="mt-2 space-y-1">
                            {Object.values(analysis.sections).map((section, index) => (
                              section.suggestions[0] && (
                                <li key={index} className="text-sm text-gray-600">
                                  • {section.suggestions[0]}
                                </li>
                              )
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Score History</h3>
                      <div className="h-48 bg-gray-50 rounded-lg p-4">
                        {/* Placeholder for score history chart */}
                        <div className="h-full flex items-end space-x-4">
                          {analysis.improvementHistory.map((score, index) => (
                            <div
                              key={index}
                              className="flex-1 bg-primary-200 rounded-t"
                              style={{ height: `${score}%` }}
                            >
                              <div
                                className="bg-primary-600 rounded-t"
                                style={{ height: `${score}%` }}
                              ></div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab !== 'overview' && analysis.sections[activeTab] && (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Analysis
                      </h3>
                      <div className="flex items-center mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                          <div
                            className="bg-primary-600 h-2.5 rounded-full"
                            style={{ width: `${analysis.sections[activeTab].score}%` }}
                          ></div>
                        </div>
                        <span className="text-sm font-medium text-gray-900">
                          {analysis.sections[activeTab].score}%
                        </span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Suggestions</h4>
                      <ul className="space-y-2">
                        {analysis.sections[activeTab].suggestions.map((suggestion, index) => (
                          <li key={index} className="flex items-start">
                            <i className="fas fa-info-circle text-primary-600 mt-1 mr-2"></i>
                            <span className="text-gray-600">{suggestion}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center py-8">
                  <i className="fas fa-cloud-upload-alt text-4xl text-gray-400 mb-4"></i>
                  <p className="text-gray-600">Upload your resume to see detailed analysis</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSubscriber;
