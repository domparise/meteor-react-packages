let startup = () => {
  _setBrowserPolicies();
  _generateAccounts();
  _setEnvironmentVariables();
};

let _setBrowserPolicies = () => {
  BrowserPolicy.content.allowOriginForAll( "default-src *; font-src * data:;" );
};

let _generateAccounts = () => Modules.server.generateAccounts();

let _setEnvironmentVariables = () => Modules.server.setEnvironmentVariables();

// letsencrypt package

// auth package

Modules.server.startup = startup;
