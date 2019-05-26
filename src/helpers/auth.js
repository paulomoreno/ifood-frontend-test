const authSettings = {
  endpoint: 'https://accounts.spotify.com/authorize',
  clientId: "525daf8037874b95b21b21fda6399d0e",
  redirectUri: "http://localhost:3000",
  scopes: [],
}

const ACCESS_TOKEN_KEY = 'access_token';

/**
 * 
 */
export const getAccessToken = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  if (!token || token === '') return null;
  return token;
}

export const clearToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
}

export const goToLogin = () => {
  window.location.assign(getAuthEndpoint());
}

/**
 *  Generate the auth endpoint given the auth parameters
 */
export const getAuthEndpoint = () => 
  `${authSettings.endpoint}?client_id=${authSettings.clientId}&redirect_uri=${authSettings.redirectUri}&scope=${authSettings.scopes.join("%20")}&response_type=token&show_dialog=true`;

/**
 * Retrieves all URL parameters from the current URL hash,
 *  and if the access_token is available, save it to local storage
 */
export const retrieveAccessTokenFromHash = () => {
  const hash = parseUrlHash(window.location.hash);
  window.location.hash = "";

  // Tries to save the access_token
  if (hash.access_token) 
    localStorage.setItem(ACCESS_TOKEN_KEY,hash.access_token)
}

/** 
 * Given the url hash string, parse it and return
 * an object with all YRL parameters
*/
const parseUrlHash = urlHash => urlHash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

/** 
 *  Always tries to retrieve the access_token
 *    on first run
 */
retrieveAccessTokenFromHash()