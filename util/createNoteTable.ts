export type OctaveTable = { [key: string]: number };
export type NoteTable = Array<OctaveTable>;

export const createNoteTable = (): NoteTable => {
  const noteFreq = [] as NoteTable;
  for (let i = 0; i < 9; i++) {
    noteFreq[i] = {} as OctaveTable;
  }

  // noteFreq[0]["C"] = 16.35;
  // noteFreq[0]["C#"] = 17.32;
  // noteFreq[0]["D"] = 18.35;
  // noteFreq[0]["D#"] = 19.45;
  // noteFreq[0]["E"] = 20.6;
  // noteFreq[0]["F"] = 21.83;
  // noteFreq[0]["F#"] = 23.12;
  // noteFreq[0]["G"] = 24.5;
  // noteFreq[0]["G#"] = 25.96;
  // noteFreq[0]["A"] = 27.5;
  // noteFreq[0]["A#"] = 29.14;
  // noteFreq[0]["B"] = 30.87;

  // noteFreq[1]["C"] = 32.7;
  // noteFreq[1]["C#"] = 34.65;
  // noteFreq[1]["D"] = 36.71;
  // noteFreq[1]["D#"] = 38.89;
  // noteFreq[1]["E"] = 41.2;
  // noteFreq[1]["F"] = 43.65;
  // noteFreq[1]["F#"] = 46.25;
  // noteFreq[1]["G"] = 49.0;
  // noteFreq[1]["G#"] = 51.91;
  // noteFreq[1]["A"] = 55.0;
  // noteFreq[1]["A#"] = 58.27;
  // noteFreq[1]["B"] = 61.74;

  // noteFreq[2]["C"] = 65.41;
  // noteFreq[2]["C#"] = 69.3;
  // noteFreq[2]["D"] = 73.42;
  // noteFreq[2]["D#"] = 77.78;
  // noteFreq[2]["E"] = 82.41;
  // noteFreq[2]["F"] = 87.31;
  // noteFreq[2]["F#"] = 92.5;
  // noteFreq[2]["G"] = 98.0;
  // noteFreq[2]["G#"] = 103.83;
  // noteFreq[2]["A"] = 110.0;
  // noteFreq[2]["A#"] = 116.54;
  // noteFreq[2]["B"] = 123.47;

  noteFreq[3]["C"] = 130.81;
  noteFreq[3]["C#"] = 138.59;
  noteFreq[3]["D"] = 146.83;
  noteFreq[3]["D#"] = 155.56;
  noteFreq[3]["E"] = 164.81;
  noteFreq[3]["F"] = 174.61;
  noteFreq[3]["F#"] = 185.0;
  noteFreq[3]["G"] = 196.0;
  noteFreq[3]["G#"] = 207.65;
  noteFreq[3]["A"] = 220.0;
  noteFreq[3]["A#"] = 233.08;
  noteFreq[3]["B"] = 246.94;

  noteFreq[4]["C"] = 261.63;
  noteFreq[4]["C#"] = 277.18;
  noteFreq[4]["D"] = 293.66;
  noteFreq[4]["D#"] = 311.13;
  noteFreq[4]["E"] = 329.63;
  noteFreq[4]["F"] = 349.23;
  noteFreq[4]["F#"] = 369.99;
  noteFreq[4]["G"] = 392.0;
  noteFreq[4]["G#"] = 415.3;
  noteFreq[4]["A"] = 440.0;
  noteFreq[4]["A#"] = 466.16;
  noteFreq[4]["B"] = 493.88;

  noteFreq[5]["C"] = 523.25;
  noteFreq[5]["C#"] = 554.37;
  noteFreq[5]["D"] = 587.33;
  noteFreq[5]["D#"] = 622.25;
  noteFreq[5]["E"] = 659.25;
  noteFreq[5]["F"] = 698.46;
  noteFreq[5]["F#"] = 739.99;
  noteFreq[5]["G"] = 783.99;
  noteFreq[5]["G#"] = 830.61;
  noteFreq[5]["A"] = 880.0;
  noteFreq[5]["A#"] = 932.33;
  noteFreq[5]["B"] = 987.77;

  noteFreq[6]["C"] = 1046.5;
  noteFreq[6]["C#"] = 1108.73;
  noteFreq[6]["D"] = 1174.66;
  noteFreq[6]["D#"] = 1244.51;
  noteFreq[6]["E"] = 1318.51;
  noteFreq[6]["F"] = 1396.91;
  noteFreq[6]["F#"] = 1479.98;
  noteFreq[6]["G"] = 1567.98;
  noteFreq[6]["G#"] = 1661.22;
  noteFreq[6]["A"] = 1760.0;
  noteFreq[6]["A#"] = 1864.66;
  noteFreq[6]["B"] = 1975.53;

  // noteFreq[7]["C"] = 2093.0;
  // noteFreq[7]["C#"] = 2217.46;
  // noteFreq[7]["D"] = 2349.32;
  // noteFreq[7]["D#"] = 2489.02;
  // noteFreq[7]["E"] = 2637.02;
  // noteFreq[7]["F"] = 2793.83;
  // noteFreq[7]["F#"] = 2959.96;
  // noteFreq[7]["G"] = 3135.96;
  // noteFreq[7]["G#"] = 3322.44;
  // noteFreq[7]["A"] = 3520.0;
  // noteFreq[7]["A#"] = 3729.31;
  // noteFreq[7]["B"] = 3951;

  // noteFreq[8]["C"] = 4186.0;
  // noteFreq[8]["C#"] = 4434.92;
  // noteFreq[8]["D"] = 4698.64;
  // noteFreq[8]["D#"] = 4978.03;
  // noteFreq[8]["E"] = 5274.04;
  // noteFreq[8]["F"] = 5587.65;
  // noteFreq[8]["F#"] = 5919.91;
  // noteFreq[8]["G"] = 6271.93;
  // noteFreq[8]["G#"] = 6644.88;
  // noteFreq[8]["A"] = 7040.0;
  // noteFreq[8]["A#"] = 7458.62;
  // noteFreq[8]["B"] = 7902.13;

  return noteFreq;
};
