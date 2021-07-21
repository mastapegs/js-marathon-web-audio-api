import { createContext } from "react";

interface AudioContextObject {
  audioContext: AudioContext;
  setAudioContext: (audioContext: AudioContext) => void;
  volume: number;
  setVolume: (volume: number) => void;
}

export const AudioContext = createContext({} as AudioContextObject);
