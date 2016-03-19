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
  var path = 'lib/client';
  api.addFiles([
    path+'/authenticated/routes.jsx',
    path+'/public/routes.jsx',
    path+'/index.styl',
    path+'/startup.js'
  ], 'client');
};

function addServerFiles (api) {
  var path = 'lib/server';
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

  api.addFiles([
    'test/client/modules/login.js'
  ], 'client');

});