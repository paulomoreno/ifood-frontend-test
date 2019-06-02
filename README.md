# Spotifood

Spotifood is a React Application that can display a list of featured playlists using Spotify's API. It also lets the user filter the playlists locally using a search input, or, on Spotify using their API and a custom built filter that's dinamically loaded from an [API](http://www.mocky.io/v2/5a25fade2e0000213aa90776).

It's currently live and can be accessed [here](https://paulomoreno.github.io/ifood-frontend-test/).

### Architecture

The application was built on top of react and redux. It is based on fours basic reducers:

- Authentication 
  - This is responsible for storing the access token used to consume Spotify's API;
- User Information
  - Current logged in user information;
- Filters
  - Loading, parsing and storing the dynamic filters;
- Playlists 
  - Playlists loaded according to the current dynamic filters;
    
There are also a couple of utility files that helpes retrieving the access_token and making API requests.

Environment vairables were use to store callback URLs for development and production envinroments - as well as saving the cliend_id.

The main libraries used were:
 - [react-boostrap](https://react-bootstrap.github.io): an accessible front-end framework
 - [redux](https://redux.js.org)
 - [redux-form](https://redux-form.com/8.2.2/) form state management
 - [axios](https://github.com/axios/axios) API Calls
 - [gh-pages](https://github.com/tschaub/gh-pages) deployment
 - [aXe](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd) extension to test accessibility


A css pre-compiler (such as sass) was not used for simplicity.

Airbnb JavaScript code style was used.

### Features

#### Error handling
All API requests that comes with an error will result in a custom toastr message. If a message is provided on the API error response, it will be used to inform the user. Otherwise, a default error message will be shown.

#### Session management
The access_token is always saved on local storage so the user can refresh the page and his token will still be accessible. Also, when the current token expires, the user will receive the option to a) go to spotify's login page or b) logout.

#### Auto-refresh
The page will always make a new API request every 30 seconds to make sure the user always have the latest information available.

#### Mobile friendly
the page is fully responsive. When on small screen devices, the filters are hidden and available trhough the navigation bar.

#### Acessible
With accessibility in mind, the website was built using bootstrap, and verified using [aXe's chrome extension](https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd).


### Known Issues and Improvements

- After the user logs out, the access_token is removed, but the routine that refreshs the playlists keeps running, causing a "Session expired" alert.



