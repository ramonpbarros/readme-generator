// TODO: import axios module
const axios = require("axios");

// TODO: use dotenv module to get environmental variables if necessary

// TODO: do not make a commit with GitHub api key or access token in any file. (Only applies if your app uses access tokens or api keys.)

const api = {
    // TODO: Return promise for GitHub api response to get user data.
    // (Hint: Use axios to send a get request and return the promise created by calling axios.get())
    getUser(response) {
        const url = `https://api.github.com/users/${response}`;
        return axios.get(url);
    }
};

module.exports = api;