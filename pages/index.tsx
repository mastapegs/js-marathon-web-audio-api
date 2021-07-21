import { FC, useContext, useEffect } from "react";
import { Header } from "../components/Header";
import { AudioContext } from "../contexts/AudioContext";

const Home: FC = () => {
  const { audioContext, setAudioContext, volume, setVolume } =
    useContext(AudioContext);
  useEffect(() => {
    setAudioContext(new window.AudioContext());
  }, []);
  return (
    <>
      <Header />
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
          </div>
        </>
      )}
    </>
  );
};

export default Home;
