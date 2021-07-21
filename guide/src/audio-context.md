# Audio Context

The starting point for manipulating sounds with the Web Audio API is the Audio Context. Here is how to create one.

```javascript
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
```

We need the portion with `window.webkitAudioContext` in order to support Safari and older versions of chrome.

Generally speaking, your application should only ever have [one](https://developers.google.com/web/updates/2012/01/Web-Audio-FAQ#q_how_many_audio_contexts_should_i_have) context per page. Since this application uses React, you'll find the Audio Context within the React Context that the app uses throughout the application.
