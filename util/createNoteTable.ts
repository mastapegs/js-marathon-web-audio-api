export type OctaveTable = { [key: string]: number };
export type NoteTable = Array<OctaveTable>;

export const createNoteTable = (): NoteTable => {
  const noteFreq = [] as NoteTable;
  for (let i = 0; i < 9; i++) {
    noteFreq[i] = {} as OctaveTable;
  }

  noteFreq[0]["A"] = 27.5;
  noteFreq[0]["A#"] = 29.135235094880619;
  noteFreq[0]["B"] = 30.867706328507756;

  return noteFreq;
};
