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

function addSharedFiles (api) {
  var path = 'lib/both',
  modules = path+'/modules';
  api.addFiles([
    modules+'/_modules.js',
    modules+'/startup.js',
    path+'/startup.js',
  ], ['client', 'server']); 
};

function addClientFiles (api) {
  var path = 'lib/client',
  routes = path+'/routes',
  components = path+'/components',
  styl = path+'/stylesheets';
  api.addFiles([
    components+'/authenticated/modal.jsx',
    components+'/authenticated/layout.jsx',
    components+'/authenticated/dashboard.jsx',
    components+'/authenticated/settings.jsx',
    components+'/public/layout.jsx',
    components+'/public/login.jsx',
    components+'/public/recover-password.jsx',
    components+'/public/reset-password.jsx',
    components+'/public/signup.jsx',
    styl+'/components/login.styl',
    styl+'/components/navbar.styl',
    styl+'/application.styl',
    routes+'/public.jsx',
    routes+'/authenticated.jsx',
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
  addSharedFiles(api);
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