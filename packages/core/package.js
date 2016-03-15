Package.describe({
  name: 'react-packages:core',
  summary: 'react-packages core libraries.',
  version: '0.0.1'
});

Npm.depends({
  "react": "0.14.7",
  "react-dom": "0.14.7",
  "react-mounter": "1.0.0",
});

function addPackagesAndVersion (api) {
  api.versionsFrom("METEOR@1.0");
  var packages = [
    'react-packages:lib@0.0.1',
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
}

function addClientFiles (api) {
  var path = 'lib/client',
  routes = path+'/routes',
  modules = path+'/modules',
  components = path+'/components',
  styl = path+'/stylesheets';
  api.addFiles([
    components+'/authenticated/dashboard.jsx',
    components+'/authenticated/settings.jsx',
    components+'/globals/authenticated-navigation.jsx',
    components+'/globals/header.jsx',
    components+'/globals/loading.jsx',
    components+'/globals/not-found.jsx',
    components+'/globals/public-navigation.jsx',
    components+'/layouts/default.jsx',
    components+'/modals/index.jsx',
    components+'/public/login.jsx',
    components+'/public/recover-password.jsx',
    components+'/public/reset-password.jsx',
    components+'/public/signup.jsx',
    styl+'/components/login.import.styl',
    styl+'/components/navbar.import.styl',
    styl+'/application.styl',
    modules+'/_modules.js',
    modules+'/login.js',
    modules+'/recover-password.js',
    modules+'/reset-password.js',
    modules+'/signup.js',
    modules+'/startup.js',
    routes+'/public.jsx',
    routes+'/authenticated.jsx',
    routes+'/configure.jsx',
  ], 'client');
};

function addServerFiles (api) {
    var path = 'lib/server',
    modules = path+'/modules';
    api.addFiles([
    path+'/admin/reset-password.js',
    modules+'/_modules.js',
    modules+'/generate-accounts.js',
    modules+'/set-environment-variables.js',
    modules+'/startup.js',
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

});