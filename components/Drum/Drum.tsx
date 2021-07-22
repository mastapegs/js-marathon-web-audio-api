import { FC, useContext } from "react";
import { AudioContext } from "../../contexts/AudioContext";

export const Drum: FC = () => {
  const { audioContext } = useContext(AudioContext);
  const playKick = () => {
    if (!audioContext) return;
    const kickDrum = audioContext.createOscillator();
    kickDrum.frequency.value = 150;

    const gain = audioContext.createGain();

    // kickDrum -> gain -> Speakers
    kickDrum.connect(gain);
    gain.connect(audioContext.destination);

    const now = audioContext.currentTime;

    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    kickDrum.start(now);
    kickDrum.stop(now + 0.5);
  };
  const distortionCurve = () => {
    const curve = new Float32Array(65536);
    let x = 0;

    for (let i = 0; i < curve.length; i++) {
      x = i / 65535;
      curve[i] = 1 - x ** 1.5;
    }

    return curve;
  };
  const playSnare = () => {
    if (!audioContext) return;
    const lowTriangle = audioContext.createOscillator();
    lowTriangle.type = "triangle";
    lowTriangle.frequency.value = 185;

    const highTriangle = audioContext.createOscillator();
    highTriangle.type = "triangle";
    highTriangle.frequency.value = 349;

    const lowWaveShaper = audioContext.createWaveShaper();
    lowWaveShaper.curve = distortionCurve();

    const highWaveShaper = audioContext.createWaveShaper();
    highWaveShaper.curve = distortionCurve();

    const lowTriangleGainNode = audioContext.createGain();
    lowTriangleGainNode.gain.value = 1;
    lowTriangleGainNode.gain.linearRampToValueAtTime(
      0,
      audioContext.currentTime + 0.1
    );

    const highTriangleGainNode = audioContext.createGain();
    highTriangleGainNode.gain.value = 1;
    highTriangleGainNode.gain.linearRampToValueAtTime(
      0,
      audioContext.currentTime + 0.1
    );

    const snareGainNode = audioContext.createGain();
    snareGainNode.gain.value = 1;

    // lowTriangle -> lowWaveShaper -> lowTriangleGainNode -> snareGainNode -> Speakers
    // highTriangle -> highWaveShaper -> highTriangleGainNode -> snareGainNode -> Speakers

    lowTriangle.connect(lowWaveShaper);
    lowWaveShaper.connect(lowTriangleGainNode);
    lowTriangleGainNode.connect(snareGainNode);
    snareGainNode.connect(audioContext.destination);

    highTriangle.connect(highWaveShaper);
    highWaveShaper.connect(highTriangleGainNode);
    highTriangleGainNode.connect(snareGainNode);

    lowTriangle.start(audioContext.currentTime);
    lowTriangle.stop(audioContext.currentTime + 1);

    highTriangle.start(audioContext.currentTime);
    highTriangle.stop(audioContext.currentTime + 1);
  };
  return (
    <div id="drum">
      <button
        onClick={playKick}
        type="button"
        className="inline-block mx-2 my-4 px-8 py-4 text-white font-semibold bg-blue-600 rounded shadow"
      >
        Kick Drum
      </button>
      <button
        onClick={playSnare}
        type="button"
        className="inline-block my-4 px-8 py-4 text-white font-semibold bg-blue-600 rounded shadow"
      >
        Snare Drum
      </button>
    </div>
  );
};
