const signInBtn = document.getElementById("sign-in-btn")
    .addEventListener("click", () => {

        const userName = document.getElementById("user-name-input");
        let userNameValue = userName.value.trim().toLowerCase();

        if (userNameValue === "" || !/^[a-z]+$/.test(userNameValue)) {
            alert("Invalid Username");
            return;
        }

        const userPassword = document.getElementById("user-pass-input");
        let userPassValue = userPassword.value.trim();

        if (userPassValue === "" || userPassValue.length < 6) {
            alert("Wrong Password");
            return;
        }

        
        if (userNameValue === "admin" && userPassValue === "admin123") {
            // alert("login Success");
            window.location.assign("home.html");
            return;
        } else {
            alert("PLease Enter a valid Username or Password");
            return;
        }


    });