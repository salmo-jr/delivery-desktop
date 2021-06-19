import electron from 'electron';
import path from 'path';
import url from 'url';
import 'babel-polyfill';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const Menu = electron.Menu;

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  mainWindow.webContents.toggleDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

const templateMenu = [
  {
    label: 'Home',
    click: () => {
      mainWindow.webContents.executeJavaScript("location.assign('#');");
    }
  },
  {
    label: 'Lista de Entregadores',
    click: () => {
      mainWindow.webContents.executeJavaScript("location.assign('#deliverymenList');");
    }
  },
];

const menu = Menu.buildFromTemplate(templateMenu);
Menu.setApplicationMenu(menu);
// https://github.com/SimulatedGREG/electron-vue/issues/576
// https://stackoverflow.com/questions/46776262/electron-menu-not-showing/48234202

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
