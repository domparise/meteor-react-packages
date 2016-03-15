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

/*
// getFilesFromFolder( 'folderName', '.extension (use .* for wildcard)' )
// api.addAssets(getFilesFromFolder('images','.*'), ['client']);
function getFilesFromFolder(folder, withExt) {

  // MAKE SURE NAME OF PACKAGE IS CORRECT
  var packageName = 'react-packages:core';


  withExt = withExt || '.*';
  if(withExt.constructor === Array) {
    var str = "(";
    for(var i=0;i<withExt.length;i++) {
      str += withExt[i];
      if(i!=(withExt.length - 1)) str += "|";
    }
    withExt = str + ")";
  } else {
    withExt += "$";
  }

  if(folder.constructor != Array) {
    folder = [folder];
  }  

  var _ = Npm.require("underscore");
  var fs = Npm.require("fs");
  var path = Npm.require("path");

  
  var allFiles = [];
  
  for(var i=0;i<folder.length;i++) {
    function walk(folder, withExt) {
      var filenames = [];
      var folderContent = fs.readdirSync(folder);
      
      _.each(folderContent,function(filename) {

        var regex = new RegExp(withExt,'gi');
        var absoluteFilename = folder + path.sep + filename;
        var stat = fs.statSync(absoluteFilename);

        if(stat.isDirectory()) {
          filenames = filenames.concat(walk(absoluteFilename, withExt));
        } else {
          if(regex.test(absoluteFilename)) filenames.push(absoluteFilename);
        }

      });

      return filenames;
    }
    
    var cwd = process.cwd();
    process.chdir("packages" + path.sep + packageName);

    var result = walk(folder[i], withExt);
    process.chdir(cwd);

    allFiles = allFiles.concat(result);
  }

  return allFiles;
}
*/

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
}

/*
function addClientFiles (api) {
  var path = 'lib/client',
  components = path+'/components';
  api.addFiles(getFilesFromFolder(components+'/authenticated','.*'), 'client');
  api.addFiles(getFilesFromFolder(components+'/globals','.*'), 'client');
  api.addFiles(getFilesFromFolder(components+'/layouts','.*'), 'client');
  api.addFiles(getFilesFromFolder(components+'/modals','.*'), 'client');
  api.addFiles(getFilesFromFolder(components+'/public','.*'), 'client');
  api.addFiles(getFilesFromFolder(path+'/stylesheets/components','.*'), 'client');
  api.addFiles(getFilesFromFolder(path+'/stylesheets','.*'), 'client');
  api.addFiles(getFilesFromFolder(path+'/modules','.*'), 'client');
  api.addFiles(getFilesFromFolder(path+'/routes','.*'), 'client');
};
*/

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