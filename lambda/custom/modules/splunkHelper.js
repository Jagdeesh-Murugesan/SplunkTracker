const req = require('request-promise');
const config = require('../config');

const splunkRestClient = {};

splunkRestClient.getClaimCountByStatus = function(){

    return req({
        url: "https://dev52396.service-now.com/api/now/table/incident?sysparm_query=active=true&sysparm_fields=urgency,priority",
        method: "GET",
        json: true,
        headers: {
          "Authorization": "Basic " + (new Buffer(config.username + ":" + config.password)).toString("base64"),
          "Accept": "application/json"
        }
      });  
    
}

module.exports = splunkRestClient;