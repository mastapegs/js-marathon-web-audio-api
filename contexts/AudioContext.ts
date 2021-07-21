import { createContext } from "react";

interface AudioContextObject {
  audioContext: AudioContext | null;
  setAudioContext: (audioContext: AudioContext) => void;
  volume: number;
  setVolume: (volume: number) => void;
  oscList: Array<{ [key: string]: OscillatorNode }>;
  setOscList: (oscList: Array<{ [key: string]: OscillatorNode }>) => void;
  mainGainNode: GainNode | null;
  setMainGainNode: (mainGainNode: GainNode) => void;
  waveform: string;
  setWaveform: (waveform: string) => void;
}

export const AudioContext = createContext({} as AudioContextObject);
