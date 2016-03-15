Package.describe({
  name: 'react-packages:core',
  summary: 'react-packages core libraries.',
  version: '0.0.1'
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.0");
  
  var packages = [
    'react-packages:lib@0.0.1',
  ];

  api.use(packages);
  
  api.imply(packages);

  api.addFiles([
    'lib/router/config.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/*'
  ], 'client');

  api.addFiles([
    'lib/server/*'
  ], 'server');
});