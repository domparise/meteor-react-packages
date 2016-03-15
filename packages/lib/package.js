Package.describe({
  name: 'react-packages:lib', 
  summary: 'third party libraries and global namespace.',
  version: '0.1.0'
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.3-rc.1']); 
  
  var packages = [
    'accounts-base@1.2.2', // A user account system
    'accounts-oauth@1.1.8', // Common code for OAuth-based login services
    'accounts-password@1.1.4', // Password support for accounts
    'alanning:roles@1.2.15', // Authorization package for Meteor
    'aldeed:collection2@2.9.0', // Automatic validation of insert and update operations on the client and server.
    'audit-argument-checks@1.0.4', // Try to detect inadequate input sanitization
    'browser-policy@1.0.5', // Configure security policies enforced by the browser
    'check@1.1.0', // Check whether a value matches a pattern
    'digilord:faker@1.0.7', // Faker.js packaged for Meteor. Generate massive amounts of fake data
    'ecmascript@0.1.6', // Compiler plugin that supports ES2015+ in all .js files
    'es5-shim@4.1.14', // Shims and polyfills to improve ECMAScript 5 support
    'fourseven:scss@3.4.1', // Style with attitude. Sass and SCSS support for Meteor.js (with autoprefixer and sourcemaps).
    'jquery@1.11.4', // Manipulate the DOM using CSS selectors
    'kadira:flow-router@2.10.1', // Carefully Designed Client Side Router for Meteor
    'meteor-base@1.0.1', // Packages that every Meteor app needs
    // 'meteorhacks:fast-render@2.13.0', // Render your app before the DDP connection even comes alive - magic?
    // 'meteorhacks:npm@1.5.0', // Use npm modules with your Meteor App
    'meteorhacks:ssr@2.2.0', // Server Side Rendering for Meteor with Blaze
    // 'mike:mocha@0.6.6', // Run mocha tests in the browser
    'mongo@1.1.3', // Adaptor for using MongoDB and Minimongo over DDP
    // 'npm-container@1.2.0', // Contains all your npm dependencies
    'react-meteor-data@0.2.4', // React mixin for reactively tracking Meteor data
    'reactive-dict@1.1.3', // Reactive dictionary
    'reactive-var@1.0.6', // Reactive variable
    'reywood:publish-composite@1.4.2', // Publish a set of related documents from multiple collections with a reactive join
    'service-configuration@1.0.5', // Manage the configuration for third-party services
    'session@1.1.1', // Session variable
    'standard-minifiers@1.0.2', // Standard minifiers used with Meteor apps by default.
    'stevezhu:lodash@4.6.1', // A utility library delivering consistency, customization, performance, & extras.
    'stylus@2.511.1', // Expressive, dynamic, robust CSS
    'themeteorchef:bert@2.1.0', // A client side, multi-style alerts system for Meteor.
    'themeteorchef:jquery-validation@1.14.0', // jQuery Validation by jzaefferer, repackaged for Meteor.
    'tracker@1.0.9', // Dependency tracker to allow reactive callbacks
    'twbs:bootstrap@3.3.6', // The most popular front-end framework for developing responsive, mobile first projects on the web.
    'zimme:collection-timestampable@1.0.9', // Add timestamps to collections
    'react@0.14.3', // Everything you need to use React with Meteor.
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