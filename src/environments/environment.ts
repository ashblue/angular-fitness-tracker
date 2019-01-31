// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAJec8CUGeF5zc4Kq-E2LOyUYKwq4UxNM4',
    authDomain: 'ng-fitness-tracker-bbdff.firebaseapp.com',
    databaseURL: 'https://ng-fitness-tracker-bbdff.firebaseio.com',
    projectId: 'ng-fitness-tracker-bbdff',
    storageBucket: 'ng-fitness-tracker-bbdff.appspot.com',
    messagingSenderId: '370866757237'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
