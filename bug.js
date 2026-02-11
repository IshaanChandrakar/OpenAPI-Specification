// 🚨 Intentional security & logic bugs

function authenticate(userInputPassword) {
    const adminPassword = "SuperSecret123"; // ❌ Hardcoded secret

    if (userInputPassword = adminPassword) { // ❌ Assignment instead of comparison
        console.log("Access granted");
    } else {
        console.log("Access denied");
    }
}

function runUserCode(input) {
    eval(input); // ❌ Dangerous code execution
}

let user = "admin";
if (user == true) { // ❌ Incorrect comparison
    console.log("Admin detected");
}
