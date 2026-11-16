# Lecture Translator (Korean → English)

Live English subtitles for Korean lectures, right in the browser. It listens through your mic, transcribes the Korean, translates it, and keeps a full transcript you can download.

## Features

- **Live subtitles**: a rough preview while the speaker is talking, replaced by the finished translation at each pause. Korean is shown underneath (toggle it off if you like).
- **Three translation engines**
  - **Google**: free, no setup. Uses Google Translate's unofficial endpoint, so it may break or get rate-limited.
  - **Chrome built-in**: on-device translation (Chrome 138+). Works on bad Wi-Fi.
  - **Claude**: best quality. Uses the previous lines for context and follows your glossary. Needs an [Anthropic API key](https://console.anthropic.com).
- **Glossary and course name**: e.g. `미분 = derivative`, so technical terms come out the same every time.
- **Transcript**: saved automatically in your browser. **⬇ Save** downloads it as a text file.
- **⏭ New lecture**: stops listening, waits for the last translations, downloads the transcript and clears it. Use it at each break in a long lecture so storage stays small and a crash can't lose more than one part.
- Adjustable text size. Press **Space** to start or stop.

## Usage

**Google Chrome is required.** Edge and Firefox don't support live Korean speech recognition well.

### Hosted (easiest)

Open the GitHub Pages link for this repo, click **▶ Start**, and choose **"Allow on every visit"** when Chrome asks for the microphone.

### Run locally

Requires [Node.js](https://nodejs.org). Double-click `Start Translator.bat`, or:

```bash
node server.js
```

Then open http://localhost:8765 in Chrome. Don't open `index.html` directly from disk: Chrome won't remember the mic permission for local files and will keep asking.

## How it works

1. Chrome's Web Speech API (`ko-KR`) turns speech into Korean text.
2. Each finished sentence goes to the selected translation engine.
3. The Claude engine sends the last few translated lines plus your glossary as context.

Your API key, settings and transcript are stored only in your browser's localStorage and are never part of this repo.

## Notes

- Expect a 1–3 second delay. Korean puts the verb at the end, so a sentence often can't be translated until it's finished.
- Speech recognition needs internet and picks up whatever is loudest near the mic. A clip-on mic helps a lot.
- Check your school's policy before transcribing lectures.
