// 🚨 Intentional async + race condition bugs

let usersCache = [];

async function fetchUsersFromDB() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, name: "Alice" }]);
        }, 1000);
    });
}

// ❌ Race condition: cache updated asynchronously but returned immediately
function getUsers() {
    if (usersCache.length === 0) {
        fetchUsersFromDB().then((users) => {
            usersCache = users;
        });
    }

    return usersCache; // ❌ Might return empty array before DB call finishes
}

// ❌ Async inside forEach (not awaited properly)
async function saveUsers(users) {
    users.forEach(async (user) => {
        await fakeSave(user);
    });
}

async function fakeSave(user) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Saved:", user.name);
            resolve();
        }, 500);
    });
}

module.exports = {
    getUsers,
    saveUsers
};
