"use strict";
const loggedIn = () => {
    if (localStorage.getItem("user_id")) {
        return true;
    }
    else {
        return false;
    }
};
module.exports = loggedIn;
