# Starvix Systems Node App

## Folder structure
- `server.js` - Express server
- `public/index.html` - Page content and HTML structure
- `public/styles.css` - All styling
- `public/script.js` - Animations, theme toggle, rotating text, counter
- `package.json` - Dependencies and scripts

## Run locally
```bash
npm install
npm start
```

Open:
```bash
http://localhost:3000
```

## Easy edits
- Change text/content: `public/index.html`
- Change colors/layout: `public/styles.css`
- Change animations/rotating text/counter/theme toggle: `public/script.js`

## Deploy on AWS
### EC2 / Elastic Beanstalk
```bash
npm install
npm start
```

### ZIP deploy
Upload this folder, install dependencies, and start with:
```bash
node server.js
```
