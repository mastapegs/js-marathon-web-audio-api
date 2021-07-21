import { FC, useEffect, useState } from "react";
import { createNoteTable, NoteTable } from "../../util/createNoteTable";

export const Keyboard: FC = () => {
  const [noteFreq, setNoteFreq] = useState<NoteTable | null>(null);
  useEffect(() => {
    setNoteFreq(createNoteTable());
  }, []);
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
