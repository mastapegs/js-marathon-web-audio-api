export type OctaveTable = { [key: string]: number };
export type NoteTable = Array<OctaveTable>;

export const createNoteTable = (): NoteTable => {
  const noteFreq = [] as NoteTable;
  for (let i = 0; i < 9; i++) {
    noteFreq[i] = {} as OctaveTable;
  }

  noteFreq[0]["C"] = 16.35;
  noteFreq[0]["C#"] = 17.32;
  noteFreq[0]["D"] = 18.35;
  noteFreq[0]["D#"] = 19.45;
  noteFreq[0]["E"] = 20.6;
  noteFreq[0]["F"] = 21.83;
  noteFreq[0]["F#"] = 23.12;
  noteFreq[0]["G"] = 24.5;
  noteFreq[0]["G#"] = 25.96;
  noteFreq[0]["A"] = 27.5;
  noteFreq[0]["A#"] = 29.14;
  noteFreq[0]["B"] = 30.87;

  noteFreq[1]["C"] = 32.7;
  noteFreq[1]["C#"] = 34.65;
  noteFreq[1]["D"] = 36.71;
  noteFreq[1]["D#"] = 38.89;
  noteFreq[1]["E"] = 41.2;
  noteFreq[1]["F"] = 43.65;
  noteFreq[1]["F#"] = 46.25;
  noteFreq[1]["G"] = 49.0;
  noteFreq[1]["G#"] = 51.91;
  noteFreq[1]["A"] = 55.0;
  noteFreq[1]["A#"] = 58.27;
  noteFreq[1]["B"] = 61.74;

  return noteFreq;
};
