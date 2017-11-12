import {app, BrowserWindow} from 'electron';

const createWindow = async () => {
  return new BrowserWindow({
    frame: false
  })
}

app.on('ready', launchInfo => {
  createWindow()
    .then(win => app.win = win)
    .then(win => app.win.webContents.loadURL(`${__dirname}/index.html`))
})