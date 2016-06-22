/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
  '@angular2-material': 'vendor/@angular2-material',
  'ng2-translate': 'vendor/ng2-translate'
};

/** User packages configuration. */
const materialPackages:string[] = [
  'core',
  'toolbar',
  'icon',
  'button',
  'sidenav',
  'list',
  'card',
  'input',
  'radio',
  'checkbox'
];

const packages: any = createCustomConfig(materialPackages);


packages['ng2-translate'] = {
  format: 'cjs',
  defaultExtension: 'js',
  main: 'ng2-translate'
};


function createCustomConfig(packages: string[]): any {
  return packages.reduce((packageConfig: any, packageName: string) => {
    packageConfig[`@angular2-material/${packageName}`] = {
      format: 'cjs',
      defaultExtension: 'js',
      main: packageName
    };
    return packageConfig;
  }, {});
}

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Third party barrels.
  'rxjs',

  // App specific barrels.
  'app',
  'app/shared',
  'app/+portal',
  'app/+landing',
  'app/+portal/+dashboard',
  'app/+portal/+packages',
  'app/+portal/+packages/add-package-form',
  'app/+portal/+adapter',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  cliSystemConfigPackages[barrelName] = { main: 'index' };
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
