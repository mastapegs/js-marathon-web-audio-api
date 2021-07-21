import { FC } from "react";

interface KeyProps {
  note: string;
  octave: number;
  freq: number;
}
export const Key: FC<KeyProps> = ({ note, octave, freq }) => (
  <div className="inline-block">
    {note}
    <sub>{octave}</sub>
  </div>
);
