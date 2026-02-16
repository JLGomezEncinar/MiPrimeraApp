// main.js (modo desarrollo)
const { app, BrowserWindow } = require('electron');
const path = require('path');

const isDev = !app.isPackaged;
const devURL = 'http://localhost:8081'; // o el puerto que use Expo Web

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
  });

  if (isDev) {
    // Si estás ejecutando `npx expo start --web`
    win.loadURL(devURL);
  } else {
    // En producción, carga el build estático
    win.loadFile(path.join(__dirname, 'dist', 'index.html'));
  }
}

app.whenReady().then(createWindow);
