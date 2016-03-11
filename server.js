var express = require('express'),
    serveStatic = require('serve-static'),
    azureMobileApps = require('azure-mobile-apps');

var app = express();

var mobile = azureMobileApps({
    homePage: false,
    swagger: true
});

// Configure the Azure Mobile Apps middleware
mobile.tables.import('./tables');

// Configure the static area
app.use(serveStatic('public'));

// Configure a router for /node_modules - this will allow
// you to include files directly from /node_modules
var npmRouter = express.Router();
npmRouter.use(serveStatic('node_modules', {
    dotfile: 'ignore',
    etag: true,
    index: false,
    lastModified: true
}));
app.use('/node_modules', npmRouter);

// Initialize the app and start listening on the port
mobile.tables.initialize().then(function () {
    app.use(mobile);
    app.listen(process.env.PORT || 3000);
});
