document.addEventListener("DOMContentLoaded",()=>{
    const form = document.getElementById("login-form");

    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        let formdata = new FormData(form);
        let username = formdata.get("username").trim();
        let password = formdata.get("password").trim();

        if(username=="admin" && password =="admin"){
            let token = "token"+Date.now();

            sessionStorage.setItem("auth",token);
            sessionStorage.setItem("Username",username);
            window.location.href = "home.html";
        }else{
            form.style.backgroundColor = "red";
            console.log("Authentication error")
        }
    })
})