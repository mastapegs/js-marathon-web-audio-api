# Gain Nodes

## What are Gain Nodes?

[Gain nodes](https://developer.mozilla.org/en-US/docs/Web/API/GainNode) are responsible for manipulating the amplitude of audio sources.

## How to create and use a Gain Node

```typescript
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

// Create sine OscillatorNode
const sinewave = audioContext.createOscillator();
sinewave.type = "sine";
sinewave.frequency.value = 440; // A4

// Create and create audio node chain
// OscillatorNode -> GainNode -> Destination
const gainNode = audioContext.createGain();
gainNode.gain.value = 0.5;
sinewave.connect(gainNode)
gainNode.connect(audioContext.destination);

sinewave.start();
```

This app connects every single OscillatorNode created by the keyboard to a single GainNode which controls the volume of them all.
