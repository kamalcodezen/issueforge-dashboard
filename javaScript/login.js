const signInBtn = document.getElementById("sign-in-btn")
    .addEventListener("click", () => {

        const userName = document.getElementById("user-name-input");
        let userNameValue = userName.value.trim().toLowerCase();

        if (userNameValue === "" || !/^[a-z]+$/.test(userNameValue)) {
            alert("Invalid Username");
            return;
        }


    });