const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database(":memory:");

function getUser(username) {
    const query = "SELECT * FROM users WHERE username = '" + username + "'"; // ❌ SQL Injection vulnerability

    db.all(query, [], (err, rows) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(rows);
    });
}

module.exports = getUser;
