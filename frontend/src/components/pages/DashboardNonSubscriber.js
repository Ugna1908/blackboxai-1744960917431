import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardNonSubscriber = () => {
  const [file, setFile] = useState(null);
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    // TODO: Implement actual file upload and basic analysis
    simulateAnalysis();
  };

  const simulateAnalysis = () => {
    setIsAnalyzing(true);
    // Simulate API call delay
    setTimeout(() => {
      setAnalysis({
        score: 65,
        grammarScore: 80,
        formatScore: 60,
        contentScore: 55,
        keywordScore: 70,
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Welcome to ResumeAI</h1>
          <p className="mt-2 text-gray-600">
            Get started by uploading your resume for a free basic analysis. Upgrade to Pro for comprehensive feedback and advanced features.
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Upload Your Resume</h2>
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

        {/* Analysis Results */}
        {isAnalyzing && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
              <span className="ml-3 text-gray-600">Analyzing your resume...</span>
            </div>
          </div>
        )}

        {analysis && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Basic Analysis Results</h2>
            
            {/* Overall Score */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-700">Overall Score</span>
                <span className="text-lg font-semibold text-primary-600">{analysis.score}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-primary-600 h-2.5 rounded-full"
                  style={{ width: `${analysis.score}%` }}
                ></div>
              </div>
            </div>

            {/* Individual Scores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Grammar & Spelling</span>
                  <span className="font-semibold text-primary-600">{analysis.grammarScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full"
                    style={{ width: `${analysis.grammarScore}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-gray-700">Formatting</span>
                  <span className="font-semibold text-primary-600">{analysis.formatScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-primary-600 h-2.5 rounded-full"
                    style={{ width: `${analysis.formatScore}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Upgrade Prompt */}
            <div className="mt-8 bg-primary-50 border border-primary-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Unlock Full Analysis
              </h3>
              <p className="text-gray-600 mb-4">
                Get detailed feedback on content quality, keyword optimization, and industry-specific suggestions.
                Upgrade to Pro for just ₹50/month.
              </p>
              <Link
                to="/pricing"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
              >
                Upgrade to Pro
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </div>
          </div>
        )}

        {/* Features Preview */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Pro Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 border border-gray-200 rounded-lg">
              <i className="fas fa-robot text-2xl text-primary-600 mb-3"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">
                Get detailed feedback on your resume's content and structure.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <i className="fas fa-chart-line text-2xl text-primary-600 mb-3"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Industry Insights</h3>
              <p className="text-gray-600">
                Receive tailored suggestions based on your industry and role.
              </p>
            </div>
            <div className="p-4 border border-gray-200 rounded-lg">
              <i className="fas fa-file-alt text-2xl text-primary-600 mb-3"></i>
              <h3 className="text-lg font-medium text-gray-900 mb-2">ATS Optimization</h3>
              <p className="text-gray-600">
                Ensure your resume passes through Applicant Tracking Systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardNonSubscriber;
