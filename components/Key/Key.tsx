import { FC } from "react";

interface KeyProps {
  note: string;
  octave: number;
  freq: number;
}
export const Key: FC<KeyProps> = ({ note, octave, freq }) => (
  <p>{`Key: ${note}, Octave: ${octave}, Freq: ${freq}`}</p>
);
