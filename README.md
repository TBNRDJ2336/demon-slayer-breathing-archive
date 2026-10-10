# Demon Slayer: Kimetsu no Yaiba Fan Archive

Fan-made 3D website by **Dheeraj Satheesh Pillai**.
Not affiliated with Demon Slayer / Ufotable.

## Run in Visual Studio Code
1. Unzip the folder and open it in VS Code (File > Open Folder).
2. Install the **Live Server** extension (VS Code suggests it automatically).
3. Right-click `index.html` and choose **Open with Live Server**.

No Live Server? Run `npm start` (needs Node.js), or just double-click `index.html`.

## Run in Visual Studio (full IDE)
Use **File > Open > Website** (or "Open Folder"), pick this folder, then right-click
`index.html` and choose **View in Browser**.

## Structure
- `index.html`  page markup
- `css/style.css`  all styling
- `js/main.js`  3D scenes (Three.js), card effects, search, music, transitions
- `vendor/three.min.js`  Three.js r128, bundled locally

## Notes
- Google Fonts (Cinzel, Poppins) load from the internet. Offline, the page falls back to system fonts.
- Music: the "Add your favorite Demon Slayer song" button plays an audio file you choose from your own device.
  No copyrighted audio is included. Without a file, generated ambient music plays.
- Mobile: the layout is responsive. On touch screens, tap a card to play its effect and tap again to stop it. Drag the dojo sideways to rotate; swipe up or down to keep scrolling.
- Language: the nav button switches between English and Japanese (your choice is remembered). Card names and descriptions are fully translated.
- Quotes & Scenes: the "Quotes" section paraphrases iconic character moments in original wording (not verbatim lines), and the "Scenes" section groups key story beats by season. Both are translated in Japanese mode.
- All artwork is generated in code (CSS, canvas and WebGL). No third-party images are used.
