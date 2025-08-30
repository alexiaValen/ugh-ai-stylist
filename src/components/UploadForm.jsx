import React, { useState } from 'react';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [aiResponse, setAiResponse] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for AI processing
    setAiResponse("Here are some AI-generated outfit suggestions...");
  };

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Upload Your Outfit</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="file-upload" className="block text-gray-700 font-bold mb-2">
              Choose a photo
            </label>
            <input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>
          {preview && (
            <div className="mb-4">
              <img src={preview} alt="Preview" className="w-full h-auto rounded-lg" />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-3 px-4 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Get Suggestions
          </button>
        </form>
        {aiResponse && (
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">AI Suggestions</h3>
            <p className="text-gray-600">{aiResponse}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UploadForm;