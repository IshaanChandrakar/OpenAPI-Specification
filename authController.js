// 🚨 Intentional authentication & validation bugs

function authenticateUser(req) {
    const SECRET_KEY = "my-super-secret-key"; // ❌ Hardcoded secret

    // ❌ No input validation
    const username = req.body.username;
    const password = req.body.password;

    // ❌ Assignment instead of comparison (auth bypass)
    if (password = "admin123") {
        return {
            success: true,
            token: SECRET_KEY
        };
    }

    return { success: false };
}

function getProfile(user) {
    // ❌ Possible runtime crash if user is null/undefined
    return {
        name: user.name.toUpperCase(),
        email: user.email
    };
}

module.exports = {
    authenticateUser,
    getProfile
};
