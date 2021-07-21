import { FC, useContext } from "react";
import { Header } from "../components/Header";
import { AudioContext } from "../contexts/AudioContext";
import { createNoteTable } from "../util/createNoteTable";

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

const Home: FC = () => {
  const { audioContext, setAudioContext, volume, setVolume } =
    useContext(AudioContext);
  return (
    <>
      <Header />
      {!audioContext && (
        <>
          <div
            id="container"
            className="flex justify-center m-4 p-4 border border-gray-200 rounded shadow-lg"
          >
            <button
              onClick={() =>
                setAudioContext(
                  new (window.AudioContext || window.webkitAudioContext)()
                )
              }
              type="button"
              className="px-8 py-4 text-white font-semibold bg-blue-600 rounded shadow"
            >
              Start Audio App
            </button>
          </div>
        </>
      )}
      {audioContext && (
        <>
          <div
            id="container"
            className="m-4 p-4 border border-gray-200 rounded shadow-lg"
          >
            <div id="keyboard">Keyboard</div>
            <div id="settingsBar">
              <div id="left">
                <span>Volume: </span>
                <input
                  type="range"
                  min="0.0"
                  max="1.0"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  list="volumes"
                  name="volume"
                />
                <datalist id="volumes">
                  <option value="0.0" label="Mute" />
                  <option value="1.0" label="100%" />
                </datalist>
              </div>
              <div id="right">
                <span>Current Waveform: </span>
                <select name="waveform">
                  <option value="sine">Sine</option>
                  <option value="square">Square</option>
                  <option value="sawtooth">Sawtooth</option>
                  <option value="triangle">Triangle</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
            </div>
            <p>Volume set to {volume}</p>
            <div>
              <pre>
                <code>{JSON.stringify(createNoteTable(), null, 2)}</code>
              </pre>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
