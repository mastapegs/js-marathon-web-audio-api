import { FC, useContext } from "react";
import { AudioContext } from "../../contexts/AudioContext";

export const Drum: FC = () => {
  const { audioContext } = useContext(AudioContext);
  const playKick = () => {
    if (!audioContext) return;
    const kickDrum = audioContext.createOscillator();
    kickDrum.frequency.value = 150;

    const gain = audioContext.createGain();

    kickDrum.connect(gain);
    gain.connect(audioContext.destination);

    const now = audioContext.currentTime;

    gain.gain.setValueAtTime(1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);
    kickDrum.start(now);
    kickDrum.stop(now + 0.5);
  };
  const noiseBuffer = (): AudioBuffer | null => {
    if (!audioContext) return null;
    const bufferSize = audioContext.sampleRate;
    const buffer = audioContext.createBuffer(
      1,
      bufferSize,
      audioContext.sampleRate
    );
    const output = buffer.getChannelData(0);

    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    return buffer;
  };
  return (
    <div id="drum">
      <button
        onClick={playKick}
        type="button"
        className="inline-block my-4 px-8 py-4 text-white font-semibold bg-blue-600 rounded shadow"
      >
        Kick Drum
      </button>
    </div>
  );
};
