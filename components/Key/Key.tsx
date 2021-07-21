import { FC, useContext } from "react";
import { AudioContext } from "../../contexts/AudioContext";

interface KeyProps {
  note: string;
  octave: number;
  freq: number;
}
export const Key: FC<KeyProps> = ({ note, octave, freq }) => {
  const { audioContext, mainGainNode } = useContext(AudioContext);
  const playTone = () => {
    const osc = audioContext!.createOscillator();
    osc.connect(mainGainNode as GainNode);
  };

  const notePressed = () => {
    console.log(`notePressed: ${freq}`);
  };
  const noteReleased = () => {
    console.log(`noteReleased: ${freq}`);
  };
  return (
    <button
      type="button"
      onMouseDown={() => notePressed()}
      onMouseUp={() => noteReleased()}
      className="flex h-20 border border-black rounded shadow-lg"
    >
      <span className="inline-block w-8 text-center">
        {note}
        <sub>{octave}</sub>
      </span>
    </button>
  );
};
