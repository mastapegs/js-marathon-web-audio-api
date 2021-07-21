import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { AudioContext } from "../../contexts/AudioContext";
import { createNoteTable, NoteTable } from "../../util/createNoteTable";
import { Key } from "../Key/Key";

export const Keyboard: FC = () => {
  const [noteFreq, setNoteFreq] = useState<NoteTable | null>(null);
  const { audioContext, volume, mainGainNode, setMainGainNode } =
    useContext(AudioContext);
  useEffect(() => {
    setNoteFreq(createNoteTable());
    const gainNode = audioContext!.createGain();
    gainNode.connect(audioContext!.destination);
    setMainGainNode(gainNode);
  }, []);
  useEffect(() => {
    if (!mainGainNode) return;
    mainGainNode.gain.value = volume;
  }, [volume, mainGainNode]);
  return (
    <div id="keyboard">
      {noteFreq &&
        (() => {
          const keys: Array<ReactNode> = [];
          noteFreq.forEach((octaveTable, octave) => {
            const keyList = Object.entries(octaveTable);
            keyList.forEach((key) => {
              keys.push(<Key note={key[0]} octave={octave} freq={key[1]} />);
            });
          });
          return keys;
        })()}
    </div>
  );
};
