// import React, { useState } from 'react'

// function APIData() {
//     var states=[];

//     const[apiOutput,setAPIOutput]=useState(null);

//     var request = require('request');

//                 var headers = {
//                     'accept': 'application/json',
//                     // 'Accept-Language': 'en_US'
//                 };

//                 var options = {
//                     url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states',
//                     headers: headers
//                 };

//                 function callback(error, response, body) {
//                     if (!error && response.statusCode == 200) {
//                         states=((JSON.parse(body))["states"]);
//                         setAPIOutput(states);
//                         //console.log(states);
//                         }
//                     } 
                    

//                 request(options, callback);

//                 // console.log(states);


//     return (
//         <div>
            
//         </div>
//     )
// }

// export default APIData
