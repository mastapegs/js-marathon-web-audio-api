import { FC, useContext, useEffect, useState } from "react";
import { AudioContext } from "../../contexts/AudioContext";
import { createNoteTable, NoteTable } from "../../util/createNoteTable";

export const Keyboard: FC = () => {
  const [noteFreq, setNoteFreq] = useState<NoteTable | null>(null);
  const { audioContext, volume, mainGainNode, setMainGainNode } = useContext(AudioContext);
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
      <div id="keyboard">Keyboard</div>
      {noteFreq && (
        <div>
          <pre>
            <code>{JSON.stringify(createNoteTable(), null, 2)}</code>
          </pre>
        </div>
      )}
    </>
  );
};
