const loggedIn = () : boolean => {
    if (localStorage.getItem("user_id")) {
        return true;
    } else {
        return false;
    }
};

module.exports = loggedIn;
