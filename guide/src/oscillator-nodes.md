# Oscillator Nodes

## Main Types of Oscillator Nodes

Oscillator Nodes come in 4 different [OscillatorType](https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type)'s

- **sine**: the default value, these are pure, single-frequency, sound waves
- **triangle**: made up of an infinite set of odd harmonic sine waves
- **square**: also made up of an infinite set of odd harmonic sine waves, with upper harmonic amplitudes higher than triangle waves.
- **sawtooth**: made up of an infinite set of harmonic sine waves waves.

As you go down the list, the different waves make progressively "buzzier" sounds as the waveforms become made up of more and more sound waves.

## How to create an Oscillator Node

```typescript
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const sinewave = audioContext.createOscillator();
sinewave.type = "sine";
sinewave.frequency.value = 440; // A4
sinewave.start();
// sinewave.stop();
```
