/* eslint-disable react/jsx-no-comment-textnodes */
import { useEffect, useState, Fragment } from "react";
import { useWebcamCapture } from "./useWebcamCapture";
// import logo from './logo.svg'
import logo from "./assets/slap 2.png";
import logo1 from "./assets//dog filter.png";
import logo2 from "./assets//red cheeks filter.png";
import "./App.css";
import ReactMarkdown from "react-markdown";
import readmePath from "./README.md";

import { Switch, Route, Redirect } from "react-router-dom";

import Header from "./Components/Header";
import { StepperComponent } from "./Components/StepperComponent";
import { TitleInput } from "./Components/TitleInput";
import { StickerSelection } from "./Components/StickerSelection";
import { CaptureSection } from "./Components/CaptureSection";
import NavButtons from "./Components/NavButtons";
import PictureDisplay from "./Components/PictureDisplay";

const stickers = [logo, logo1, logo2].map((url) => {
  const img = document.createElement("img");
  img.src = url;
  return { img, url };
});

const steps = ["Give it a name", "Select your sticker", "Slap your self!"];

function App() {
  // currently active sticker
  const [sticker, setSticker] = useState();
  // title for the picture that will be captured
  const [title, setTitle] = useState("SLAP!!");

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  // readme content
  const [readme, setReadme] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());

  // fetch readme content
  useEffect(() => {
    fetch(readmePath)
      .then((response) => response.text())
      .then((text) => setReadme(text));
  }, []);

  // webcam behavior hook
  const [
    handleVideoRef, // callback function to set ref for invisible video element
    handleCanvasRef, // callback function to set ref for main canvas element
    handleCapture, // callback function to trigger taking the picture
    picture, // latest captured picture data object
  ] = useWebcamCapture(sticker?.img, title);

  /**
   * handleNext is a function that increments the active step in a multi-step process.
   * If the current step is in the skipped steps set, it removes it from the set.
   * It then updates the active step and the skipped steps set in the component's state.
   */
  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  /**
   * handleBack is a function that decrements the active step in a multi-step process.
   * It updates the active step in the component's state.
   */
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  /**
   * handleReset is a function that resets the active step in a multi-step process to the initial step (0).
   * It updates the active step in the component's state.
   */
  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className=" happy-monkey-regular text-[#1a535c] p-5 my-12 bg-[#4ecdc4] max-w-2xl min-h-90 m-auto rounded-lg elevation-10">
      <Header />
      <Switch>
        /** * Main app route */
        <Route path="/" exact>
          <main className="w-full mt-2">
            <StepperComponent
              activeStep={activeStep}
              steps={steps}
              handleNext={handleNext}
              handleBack={handleBack}
              handleReset={handleReset}
            />
            {activeStep === steps.length ? (
              <PictureDisplay picture={picture} handleReset={handleReset} />
            ) : (
              <Fragment>
                <div className="flex flex-col justify-between min-h-[200px] ">
                  <TitleInput
                    title={title}
                    setTitle={setTitle}
                    activeStep={activeStep}
                  />
                  <StickerSelection
                    stickers={stickers}
                    sticker={sticker}
                    setSticker={setSticker}
                    activeStep={activeStep}
                  />
                  <CaptureSection
                    handleVideoRef={handleVideoRef}
                    handleCanvasRef={handleCanvasRef}
                    handleCapture={handleCapture}
                    picture={picture}
                    activeStep={activeStep}
                  />
                  <NavButtons
                    activeStep={activeStep}
                    handleBack={handleBack}
                    handleNext={handleNext}
                    steps={steps}
                  />
                </div>
              </Fragment>
            )}
          </main>
        </Route>
        /** * Readme route */
        <Route path="/readme">
          <main className="bg-white p-2 rounded-lg ">
            <ReactMarkdown children={readme} />
          </main>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
