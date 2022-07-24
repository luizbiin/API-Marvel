// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {Md5} from 'ts-md5/dist/md5';

var timestamp = Number(new Date());
var publicKey = '973ebf18429bc8a79879aa1f92c20adf';
var privateKey = 'd138bf02f6dadfa4e01e5fe8560acd4d7812377a'
var hash = Md5.hashStr(timestamp + privateKey + publicKey);


export const environment = {
  production: false,
  API: {
    baseURL: `https://gateway.marvel.com/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
    baseCharacters:`https://gateway.marvel.com/v1/public/characters`,
    baseKeys:`?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`,
  },
  

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
