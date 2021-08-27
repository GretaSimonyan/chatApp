export function initFacebookSdk () {
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

      console.log("ASDASDASDASd")
      resolve(window.FB);

      
      /* window.FB.getLoginStatus(function(response) {
        console.log('response', response)
        resolve()
      });

      window.FB.login(function(response){
        console.log('response', response)
      });*/
    };
  })
}