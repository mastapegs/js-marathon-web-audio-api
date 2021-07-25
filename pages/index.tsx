import Head from "next/head";
import { FC, useContext } from "react";
import { Drum } from "../components/Drum";
import { Header } from "../components/Header";
import { Keyboard } from "../components/Keyboard";
import { AudioContext } from "../contexts/AudioContext";

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext;
  }
}

const Home: FC = () => {
  const {
    audioContext,
    setAudioContext,
    volume,
    setVolume,
    waveform,
    setWaveform,
  } = useContext(AudioContext);
  return (
    <>
      <Head>
        <title>Web Audio API</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
      </Head>
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
              Commence the Audio Insanity!!!
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
            <Keyboard />
            <Drum />
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
                <select
                  value={waveform}
                  onChange={(e) => setWaveform(e.target.value)}
                  name="waveform"
                >
                  <option value="sine">Sine</option>
                  <option value="square">Square</option>
                  <option value="sawtooth">Sawtooth</option>
                  <option value="triangle">Triangle</option>
                </select>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
