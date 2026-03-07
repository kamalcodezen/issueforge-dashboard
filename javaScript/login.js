document.getElementById("sign-in-btn").addEventListener("click", () => {

    const userName = document.getElementById("user-name-input").value.trim().toLowerCase();
    const userPass = document.getElementById("user-pass-input").value.trim();

    const btn = document.getElementById("sign-in-btn");
    const spinner = document.getElementById("btn-spinner");
    const text = document.getElementById("btn-text");

    if (userName === "admin" && userPass === "admin123") {

        spinner.classList.remove("hidden");
        text.innerText = "Signing in...";
        btn.disabled = true;

        setTimeout(() => {

            spinner.classList.add("hidden");
            text.innerText = "Success";

        }, 1500);

        setTimeout(() => {
            window.location.href = "home.html";
        }, 2000);

    } else {
        alert("Invalid Username or Password");
    }

});