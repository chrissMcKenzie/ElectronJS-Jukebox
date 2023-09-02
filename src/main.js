const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

// console.log(__dirname);
const createWindow = () => {
  const index = new BrowserWindow({
    width: 800, height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'SQLiteDB.js'),
      nodeIntegration: true
    },
  })
  index.loadFile('./public/index.html')
}

// app.whenReady().then(() => {
  app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })
// })