Package.describe({
  name: 'react-packages:lib', 
  summary: 'third party libraries and global namespace.',
  version: '0.2.0'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.3-rc.1']); 
  
  var packages = [
    'meteor-base@1.0.1', // Packages that every Meteor app needs
    'accounts-base@1.2.2', // A user account system
    'accounts-password@1.1.4', // Password support for accounts
    'session@1.1.1', // Session variable
    'tracker@1.0.9', // Dependency tracker to allow reactive callbacks
    'browser-policy@1.0.5', // Configure security policies enforced by the browser
    'react@0.14.3', // Everything you need to use React with Meteor.
    'react-meteor-data@0.2.4', // React mixin for reactively tracking Meteor data
    'jquery@1.11.4', // Manipulate the DOM using CSS selectors
    'stylus@2.511.1', // Expressive, dynamic, robust CSS
    'mongo@1.1.3', // Adaptor for using MongoDB and Minimongo over DDP
    'standard-minifiers@1.0.2', // Standard minifiers used with Meteor apps by default.
    'kadira:flow-router@2.10.1', // Carefully Designed Client Side Router for Meteor
    'stevezhu:lodash@4.6.1', // A utility library delivering consistency, customization, performance, & extras.
    'digilord:faker@1.0.7', // Faker.js packaged for Meteor. Generate massive amounts of fake data
    'themeteorchef:bert@2.1.0', // A client side, multi-style alerts system for Meteor.
    'themeteorchef:jquery-validation@1.14.0', // jQuery Validation by jzaefferer, repackaged for Meteor.
    'twbs:bootstrap@3.3.6', // The most popular front-end framework for developing responsive, mobile first projects on the web.
  ];

  api.use(packages);

  api.imply(packages);

  api.addFiles([
    'app.js',
  ], ['client', 'server']);

  api.export([
    'App'
  ]);
});