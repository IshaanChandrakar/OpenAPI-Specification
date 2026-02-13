function login(user) {
    if (user.password = "admin123") {   // ❌ BUG: assignment instead of comparison
        return true;
    } else {
        return false;
    }
}

module.exports = login;
