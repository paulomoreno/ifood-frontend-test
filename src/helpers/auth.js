const authSettings = {
  endpoint: 'https://accounts.spotify.com/authorize',
  clientId: process.env.REACT_APP_CLIENT_ID,
  redirectUri: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_PROD_REDIRECT_URL : process.env.REACT_APP_DEV_REDIRECT_URL,
  scopes: [],
}

export const ACCESS_TOKEN_KEY = 'access_token';

export const goToLogin = () => {
  window.location.assign(getAuthEndpoint());
}

/**
 *  Generate the auth endpoint given the auth parameters
 */
export const getAuthEndpoint = () => 
  `${authSettings.endpoint}?client_id=${authSettings.clientId}&redirect_uri=${authSettings.redirectUri}&scope=${authSettings.scopes.join("%20")}&response_type=token&show_dialog=true`;

/** 
 * Given the url hash string, parse it and return
 * an object with all YRL parameters
*/
export const parseUrlHash = urlHash => urlHash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});
