import {isLoginFailure,isLoginSuccess} from './action'

function authenticateUser(username,password) {
    return  dispatch => {
        return new Promise(function(resolve,reject){
          console.log("fetch called")
          console.log("username:",username)
          console.log("password:",password)
          
          fetch('https://admin-stage-temp.priskoll.occdev.axfood.se/axfood/axfood-security/login',
          {
              method: 'POST',
              body: JSON.stringify({
                username: username,
                password: password,
  
              }),
            })
          .then(res => {
              console.log("status: ",res.status)
              if (res.status==403) reject(403)
              if(res.status>=200 && res.status<300) {
                  var temp = res.headers.map.authorization.split(' ');
                  let header=temp[1]
                  console.log("header: ",header)
                  dispatch(isLoginSuccess(header))
                  resolve("Resolved")
                  
                 
                  
               
              }
  
              
              
  
          })
           .catch(error => {
              dispatch(isLoginFailure(error));
              reject(error)
          })
  
        })
  
          
      }
  }
  
  export default authenticateUser;