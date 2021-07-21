import { FC, MouseEventHandler, useContext } from "react";
import { AudioContext } from "../../contexts/AudioContext";

interface KeyProps {
  note: string;
  octave: number;
  freq: number;
}
export const Key: FC<KeyProps> = ({ note, octave, freq }) => {
  const { audioContext, oscList, setOscList, mainGainNode, waveform } =
    useContext(AudioContext);
  const playTone = () => {
    const osc = audioContext!.createOscillator();
    osc.connect(mainGainNode as GainNode);
    osc.type = waveform as OscillatorType;
    osc.frequency.value = freq;
    osc.start();
    return osc;
  };

  const notePressed: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e);
    const newOscList = [...oscList];
    // newOscList[octave].note = playTone();
    newOscList[octave] = { note: playTone() };
    console.log({ newOscList });
    setOscList(newOscList);
  };
  const noteReleased: MouseEventHandler<HTMLButtonElement> = (e) => {
    oscList[octave].note.stop();
    delete oscList[octave].note;
  };
  return (
    <button
      type="button"
      onMouseDown={(e) => notePressed(e)}
      // onMouseOver={(e) => notePressed(e)}
      onMouseUp={(e) => noteReleased(e)}
      // onMouseLeave={(e) => noteReleased(e)}
      className="flex h-20 border border-black rounded shadow-lg"
    >
      <span className="inline-block w-8 text-center">
        {note}
        <sub>{octave}</sub>
      </span>
    </button>
  );
};
