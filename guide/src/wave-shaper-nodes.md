# Wave Shaper Nodes

## What are Wave Shaper Nodes?

According to MDN:

> The [WaveShaperNode](https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode) interface represents a non-linear distorter. It is an AudioNode that uses a curve to apply a wave shaping distortion to the signal.

## Where is this used?

This application uses the `WaveShaperNode` interface as part of the synthesis of the snare drum. It's used to gradually lower the amplitude of the pair of triangle waves used to generate the snare.
