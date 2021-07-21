import { FC, ReactNode, useContext, useEffect, useState } from "react";
import { AudioContext } from "../../contexts/AudioContext";
import { createNoteTable, NoteTable } from "../../util/createNoteTable";

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
    <>
      {noteFreq &&
        (() => {
          const keys: Array<ReactNode> = [];
          noteFreq.forEach((octaveTable, octave) => {
            const keyList = Object.entries(octaveTable);
            keyList.forEach((key) => {
              keys.push(
                <p>{`Key: ${key[0]}, Octave: ${octave}, Freq: ${key[1]}`}</p>
              );
            });
          });
          return keys;
        })()}
    </>
  );
};
