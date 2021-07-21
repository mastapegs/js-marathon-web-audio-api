import { FC } from "react";

const notePressed = () => {};

interface KeyProps {
  note: string;
  octave: number;
  freq: number;
}
export const Key: FC<KeyProps> = ({ note, octave, freq }) => (
  <button
    type="button"
    onMouseDown={notePressed}
    className="flex h-20 border border-black rounded shadow-lg"
  >
    <span className="inline-block w-8 text-center">
      {note}
      <sub>{octave}</sub>
    </span>
  </button>
);
