Package.describe({
  name: 'react-packages:core',
  summary: 'react-packages core libraries.',
  version: '0.1.0'
});

Npm.depends({
  "react": "0.14.7",
  "react-dom": "0.14.7",
  "react-mounter": "1.0.0",
});

function addPackagesAndVersion (api) {
  api.versionsFrom("METEOR@1.3-rc.1");
  var packages = [
    'react-packages:lib@0.1.0',
  ];
  api.use(packages);
  api.imply(packages);
};

function addClientFiles (api) {
  var path = 'lib/client',
  authenticated = path+'/authenticated',
  _public = path+'/public',
  styl = path+'/stylesheets';
  api.addFiles([
    authenticated+'/modal.jsx',
    authenticated+'/dashboard.jsx',
    authenticated+'/settings.jsx',
    authenticated+'/layout.jsx',
    authenticated+'/routes.jsx',
    _public+'/login.jsx',
    _public+'/recover-password.jsx',
    _public+'/reset-password.jsx',
    _public+'/signup.jsx',
    _public+'/layout.jsx',
    _public+'/routes.jsx',
    path+'/index.styl',
    path+'/startup.js'
  ], 'client');
};


function addServerFiles (api) {
    var path = 'lib/server',
    modules = path+'/modules';
  api.addFiles([
    path+'/admin/reset-password.js',
    path+'/startup.js',
  ], 'server');
};

function addFiles (api) {
  addPackagesAndVersion(api);
  addClientFiles(api);
  addServerFiles(api);  
};

Package.onUse(function (api) {

  addFiles(api);

});

Package.onTest(function (api) {

  addFiles(api);

  var path = 'test/client/modules';
  api.addFiles([
    path+'/login.js'
  ], 'server');

});