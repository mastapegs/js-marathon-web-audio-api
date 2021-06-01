import { createContext } from "react";

interface AudioContextObject {
  audioContext: AudioContext;
  setAudioContext: (audioContext: AudioContext) => void;
}

export const AudioContext = createContext({} as AudioContextObject);
