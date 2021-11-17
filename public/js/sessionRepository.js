const sessionURL = 'sessions.json';

// if I want this to be a default export I can add export default right before the word function. Then if I do an import anyName from './sessionRepository.js'; it will automatically get this for me, even if I don't know the name of it. //

let sessionList = [];

function getSessions(){
    return new Promise(function(resolve, reject){
      var oReq = new XMLHttpRequest();
      oReq.onload = function (e) {
          sessionList = e.target.response;
        resolve(sessionList);
      };
      oReq.open('GET', sessionURL, true);
      oReq.responseType = 'json';
      oReq.send();
    })
  }

  export {getSessions as default, sessionURL};

  // can also rename like this--> export {getSessions as sessions};
  // can also set as default like this --> export {getSessions as default, sessionURL} (that last part is optional if you also want to export other things)

  export {sessionTemplate} from './template.js'

  // this is used to export stuff from other areas too if you just want to do it all from the same place. Re-exporting it it is called Aggregating Modules.