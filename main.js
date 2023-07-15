const electron = require('electron');
const app = electron.app;

const path = require('path');
const url = require('url');

const BrowserWindow = electron.BrowserWindow;

// 初始化并准备创建主窗口
app.on('ready', function() {
	// 创建一个窗口
	mainWindow = new BrowserWindow({
		// width: 800,
		// height: 600,
		minimizable: true,//最小化
		maximizable: true,//最大化
		closable: true,
		movable: true,
		frame: true,//边框
    fullscreen: false,//全屏
    titleBarStyle: 'hidden',
    autoHideMenuBar: true,
    //图标
    icon: path.join(__dirname, '/WebContent/favicon.ico')
  });

  // 最大化窗口
  mainWindow.maximize();

	// 载入应用的index.html
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, '/WebContent/index.html'),
		protocol: 'file:',
		slashes: true
  }));

	// 窗口关闭时触发
	mainWindow.on('closed', function() {
		// 想要取消窗口对象的引用， 如果你的应用支持多窗口，你需要将所有的窗口对象存储到一个数组中，然后在这里删除想对应的元素
		mainWindow = null
  });

  // 开发者窗口
  // mainWindow.webContents.openDevTools()
});