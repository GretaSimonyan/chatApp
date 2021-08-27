const initPromise = (function initFacebookSdk () {
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  return new Promise((resolve, reject) => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '205717071574925',
        cookie     : true,
        xfbml      : true,
        version    : 'v11.0'
      });
        
      window.FB.AppEvents.logPageView();
      resolve(window.FB);
    };
  });
})();

export const getLoginStatus = () => initPromise.then(() => {
  return new Promise((resolve, reject) => {
    window.FB.getLoginStatus(response => console.log('getLoginStatus', response) || resolve(response?.status === 'connected'));
  });
});

export const login = () => initPromise.then(() => {
  return new Promise((resolve, reject) => {
    window.FB.login(response => console.log('login', response) || resolve(response?.status === 'connected'));
  });
});

export const logout = () => initPromise.then(() => {
  return new Promise((resolve, reject) => {
    window.FB.logout(resolve);
  });
});

export const getUser = (userId) => initPromise.then(() => {
  return new Promise((resolve, reject) => {
    window.FB.api(userId ? `/${userId}` : '/me', {fields: 'last_name, first_name, picture'}, resolve);
  });
});

