import React, { useState } from 'react';
import Settings from '../components/Settings.jsx';
import '../components/Imagecss.css';
import Slide from '../components/Slide.jsx';
import Box from '@mui/material/Box';

const Imagegen = () => {
  const [Prompt, setPrompt] = useState('');
  const [Height, setHeight] = useState(768);
  const [Width, setWidth] = useState(768);
  const [model, setmodel] = useState('');
  const [img, setimg] = useState('');
  const [Loading, setLoading] = useState(false);
  const handlesettings = (value) => setmodel(value);
  const handleHeight = (value) => setHeight(value);
  const handleWidth = (value) => setWidth(value);

  const handlegenerate = async () => {
    setLoading(true);
    console.log("Generating image...");
  
    const encodedPrompt = encodeURIComponent(Prompt);
    const url = `${process.env.REACT_APP_FETCH_URL}/${encodedPrompt}?height=${Height}&width=${Width}&nologo=True`;
    console.log("Generated URL:", url);
  
    try {
      const response = await fetch(url);
      console.log("API Response Status:", response.status);
  
      if (!response.ok) {
        throw new Error(`Failed to fetch image: ${response.statusText}`);
      }
  
      const blob = await response.blob();
      console.log("Blob received:", blob);
  
      const imageUrl = URL.createObjectURL(blob);
      console.log("Image URL:", imageUrl);
  
      setimg(imageUrl);
    } catch (error) {
      console.error("Error generating the image:", error.message);
    } finally {
      setLoading(false);
      console.log("Finished image generation.");
    }
  };
  return (
    <>
      <h1>AI Image Generator</h1>
      <div className="imagegen">
        <div className="container" style={{ border: '1px solid black', borderRadius: '15px' }}>
          <h2>Create unique images using AI</h2>
          <h4>Enter a prompt and customize settings to generate an image</h4>
          <div className="settings-container">
            <div className="settings">
              <h4>Settings</h4>
              <Settings onselectedoption={handlesettings} />
              <div>
                <Box sx={{ width: 110 }}>
                  <Slide
                    valuetext={<h4>Height</h4>}
                    handlevalue={handleHeight}
                    defaultvalue={768}
                    shiftStep={128}
                    step={128}
                    min={562}
                    max={1024}
                  />
                  <Slide
                    valuetext={<h4>Width</h4>}
                    handlevalue={handleWidth}
                    defaultvalue={768}
                    shiftStep={128}
                    step={128}
                    min={562}
                    max={1024}
                  />
                </Box>
              </div>
            </div>
            <div className="image-container">
              <div className="image">
                {Loading ? (
                  <p>Loading...</p>
                ) : img ? (
                  <img src={img} alt="Generated AI Output" />
                ) : (
                  <p>No image yet</p>
                )}
              </div>
              <button onClick={handlegenerate} disabled={Loading}>
                {Loading ? 'Generating...' : 'Generate'}
              </button>
            </div>
          </div>
          <textarea
            onChange={(e) => setPrompt(e.target.value)}
            aria-label="empty textarea"
            placeholder="A portrait of an elderly man with deep-set blue eyes..."
          ></textarea>
        </div>
      </div>
    </>
  );
};

export default Imagegen;
