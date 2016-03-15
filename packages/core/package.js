Package.describe({
  name: 'react-packages:core',
  summary: 'react-packages core libraries.',
  version: '0.0.1'
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
  api.addFiles([
  ], ['client', 'server']); 
}

function addClientFiles (api) {
  var path = 'lib/client',
  routes = path+'/routes',
  modules = path+'/modules',
  components = path+'/components';
  api.addFiles([
    modules+'/_modules.js',
    modules+'/login.js',
    modules+'/recover-password.js',
    modules+'/reset-passworf.js',
    modules+'/signup.js',
    modules+'/startup.js',
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
    routes+'/configure.jsx',
    routes+'/public.jsx',
    routes+'/authenticated.jsx',
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

});