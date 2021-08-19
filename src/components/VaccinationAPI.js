import React, { useState } from 'react';
import sha256 from 'sha256';


function VaccinationAPI() {
    var otp;
    // const [txnid,settxnid]=useState(null);
    const [txnid,settxnid]=useState(null);
    const [token,settoken]=useState(null);


const getBeneficiaries=()=>{
    var request = require('request');

    var headers = {
        'accept': 'application/json'
    };
    var dataString = `{"token":"${token}"}`;
    var options = {
        url: 'https://api.demo.co-vin.in/api/v2/appointment/beneficiaries',
        headers: headers,
        body: dataString
    };
    
    function callback(error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body);
        }
    }
    
    request(options, callback);
    
};



    const handleChange=()=>{
                        otp=sha256(document.getElementById('otp_field').value);
                    console.log(otp);
                };



        const submitotp=()=>{
                                    var request = require('request');

                                var headers = {
                                    'accept': 'application/json',
                                    'Content-Type': 'application/json'
                                };

                                var dataString = `{"otp":"${otp}","txnId":"${txnid}"}`;
                                console.log(dataString);
                                var options = {
                                    url: 'https://cdn-api.co-vin.in/api/v2/auth/public/confirmOTP',
                                    method: 'POST',
                                    headers: headers,
                                    body: dataString
                                };

                                function callback(error, response, body) {console.log(response["body"]);
                                    if (!error && response.statusCode == 200) {
                                        console.log(body);
                                        settoken((JSON.parse(body))["token"]);
                                      
                                    }
                                }

                                request(options, callback);
        }




    return (
        <div>
            <button onClick={()=>{
                
                var request = require('request');

                var headers = {
                    'accept': 'application/json',
                    'Content-Type': 'application/json'
                };
                
                var dataString = '{"mobile":"6289363522"}';
                
                var options = {
                    url: 'https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP',
                    method: 'POST',
                    headers: headers,
                    body: dataString
                };
                
                function callback(error, response, body) {console.log(response["body"]);
                    if (!error && response.statusCode == 200) {
                        console.log(body);
                        settxnid((JSON.parse(body))["txnId"]);
                        

                    }
                }
                
                request(options, callback);
                

}}> GENERATE OTP</button>

<button onClick={()=>{submitotp();}}>SUBMIT OTP</button>

<input id="otp_field" type="text" onChange={()=>{handleChange();}}/>
<button onClick={()=>{getBeneficiaries();}}>Get Benefs</button>
        </div>
    )
}

export default VaccinationAPI
