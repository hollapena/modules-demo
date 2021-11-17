//  import getSessions from "./sessionRepository.js";
//  import {sessionTemplate, errorMessage} from "./template.js";
 // for named imports like sessionTemplate you can also say (if you want everything from template.js) import * as template from './template.js'//
 //if you want to use sessionTemplate though you would have to call it as template.sessionTemplate
 //you could call 'getSessions' anything since it was exported as a default//

 //or since we are aggregating our sessions in the sessionRepository file we can just call them together from the same place like this:

 import getSessions, {sessionTemplate, sessionURL} from './sessionRepository.js';
 //or import getSessions, * as sessionRepository from './sessionRepository.js' and remember to just put sessionRepository.sessionTemplate in order to use the sessionTemplate function

  function render() {
    var list = document.querySelector('#sessions');
    if (!list) return;
    list.innerHTML = sessionTemplate(data.listItems);
  };
  
  
  var data = {
    listItems: []
  };
  
  getSessions()
    .then((sessions)=>{
      console.log('promises!')
      data.listItems = sessions;
      render();
    });