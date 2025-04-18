import React, { useState } from 'react';

const ResumeAnalysis = () => {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);

  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    setFile(uploadedFile);
  };

  const analyzeResume = () => {
    setIsAnalyzing(true);
    // Simulating API call for resume analysis
    setTimeout(() => {
      setAnalysisResult({
        overallScore: 85,
        sections: {
          impact: { score: 90, feedback: "Strong use of action verbs and metrics" },
          brevity: { score: 75, feedback: "Some sections could be more concise" },
          style: { score: 85, feedback: "Good formatting, consistent style" },
          softSkills: { score: 90, feedback: "Well-demonstrated leadership and communication skills" }
        },
        suggestions: [
          "Consider adding more quantifiable achievements",
          "Use more industry-specific keywords",
          "Shorten your professional summary"
        ],
        atsCompatibility: {
          score: 95,
          feedback: "Your resume is well-formatted for ATS systems"
        }
      });
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Upload Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow sm:rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Upload your resume
              </h3>
              <div className="mt-2 max-w-xl text-sm text-gray-500">
                <p>Upload your resume in PDF, DOC, or DOCX format for instant analysis</p>
              </div>
              <div className="mt-5">
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          accept=".pdf,.doc,.docx"
                          onChange={handleFileUpload}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC, DOCX up to 10MB</p>
                  </div>
                </div>
                {file && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Selected file: {file.name}</p>
                    <button
                      onClick={analyzeResume}
                      disabled={isAnalyzing}
                      className="mt-3 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      {isAnalyzing ? 'Analyzing...' : 'Analyze Resume'}
                    </button>
                  </div>
                )}
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
                    <h3 className="text-xl font-medium text-gray-900">Overall Score</h3>
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
                  <h3 className="text-lg font-medium text-gray-900">Suggestions</h3>
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

              {/* ATS Compatibility */}
              <div className="mt-6 bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-medium text-gray-900">ATS Compatibility</h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {analysisResult.atsCompatibility.score}/100
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-gray-500">
                    {analysisResult.atsCompatibility.feedback}
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

export default ResumeAnalysis;
