import {
  isLoginFailure,
  isLoginSuccess,
  isConceptDataSuccess,
  isStoreDataSuccess,
  isSearchedStoreDataSuccess,
  
  
} from '../Authentication/action';

export function authenticateUser(username, password) {
  return dispatch => {
    return new Promise(function(resolve, reject) {
      console.log('fetch called');
      console.log('username:', username);
      console.log('password:', password);

      fetch(
        'https://admin-stage-temp.priskoll.occdev.axfood.se/axfood/axfood-security/login',
        {
          method: 'POST',
          body: JSON.stringify({
            username: username,
            password: password,
          }),
        },
      )
        .then(res => {
          console.log('status: ', res.status);
          if (res.status == 403) reject(403);
          if (res.status >= 200 && res.status < 300) {
            var temp = res.headers.map.authorization.split(' ');
            let header = temp[1];
            console.log('header: ', header);
            dispatch(isLoginSuccess(header));
            resolve('Resolved');
          }
        })
        .catch(error => {
          dispatch(isLoginFailure(error));
          reject('Rejected');
        });
    });
  };
}

export function loadConcept(token) {
  return dispatch => {
    return new Promise(function(resolve, reject) {
      console.log('inside Load Concept');
      fetch(
        'https://admin-rel.priskoll.occdev.axfood.se/axfood/axfood-product-scan/concepts? ',
       {
          method: 'GET',
          headers: {
            authorization: token,
          },
        },
      )
        .then(res => {
          console.log('status: ', res.status);
          if (res.status >= 200 && res.status < 300) {
            return res.json();
          }

          if (res.status == 403) reject(403);
        })
        .then(data => {
          console.log('data received:', data);
          dispatch(isConceptDataSuccess(data));
          resolve('Success');
        })
        .catch(error => {
          reject('ServerIssue');
        });
    });
  };
}

export function loadStores(token) {
  return dispatch => {
    return new Promise(function(resolve, reject) {
      console.log('inside Load Stores');
      fetch(
        'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/stores',
        {
          method: 'GET',
          headers: {
            authorization: token,
          },
        },
      )
        .then(res => {
          console.log('status: ', res.status);
          if (res.status >= 200 && res.status < 300) {
            return res.json();
          }

          if (res.status == 403) reject(403);
        })
        .then(data => {
          console.log(' store data received:', data);
          dispatch(isStoreDataSuccess(data));
          resolve('Success');
        })
        .catch(error => {
          reject('ServerIssue');
        });
    });
  };
}


export function loadSearchStores(token,query) {
  return dispatch => {
    return new Promise(function(resolve, reject) {
      console.log('inside Search Stores');
      fetch(
        'https://admin-stage.priskoll.occdev.axfood.se/axfood/axfood-product-scan/searchResults/'+query+"?",
        {
          method: 'GET',
          headers: {
            authorization: token,
          },
        },
      )
        .then(res => {
          console.log('status: ', res.status);
          if (res.status >= 200 && res.status < 300) {
            return res.json();
          }

          if (res.status == 403) reject(403);
        })
        .then(data => {
          console.log(' search store data received:', data);
          dispatch(isSearchedStoreDataSuccess(data));
          resolve('Success');
        })
        .catch(error => {
          reject('ServerIssue');
        });
    });
  };
}


