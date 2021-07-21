import { FC, useState } from "react";
import { AudioContext } from "../contexts/AudioContext";

export const AudioProvider: FC = ({ children }) => {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const [volume, setVolume] = useState(0.5);
  const [oscList, setOscList] = useState([] as any[]);
  const [mainGainNode, setMainGainNode] = useState<GainNode | null>(null);
  return (
    <>
      <AudioContext.Provider
        value={{
          audioContext,
          setAudioContext,
          volume,
          setVolume,
          oscList,
          setOscList,
          mainGainNode,
          setMainGainNode,
        }}
      >
        {children}
      </AudioContext.Provider>
    </>
  );
};
