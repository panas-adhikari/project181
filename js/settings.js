document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("_checkbox-26");

  // load the permisssion state
  if (Notification.permission === "granted") {
    toggle.checked = true;   
  } else {
    toggle.checked = false;
  }

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      
      if (Notification.permission === "granted") {
        new Notification("eduTrack", {
          body: "You will now receive notifications."
        });
      } else if (Notification.permission === "default") {
        // Ask for permission
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            console.log("Permission granted");
            new Notification("eduTrack", {
              body: "You will now receive notifications."
            });
          } else {
            toggle.checked = false;
          }
        });
      } else {
        toggle.checked = false;
        alert("Notifications are blocked in your browser settings.");
      }
    } else {
      console.log("Notifications disabled by toggle.");
    }
  });

  const languageRadios = document.querySelectorAll(".glass-radio-group input");

// Save the first radio (default)
const firstRadio = languageRadios[0];
firstRadio.checked = true;

const message = document.getElementsByClassName("language-notification");
languageRadios.forEach((radio) => {
  radio.addEventListener("change", () => {
      message[0].style.display = "block";
    if (radio !== firstRadio) {
        
        setTimeout(() => {
            firstRadio.checked = true; // revert to default
            message[0].style.display = "none";
        }, 1000);
    } else {
        console.log(`Language is: ${radio.nextElementSibling.textContent}`);
    }
  });
});
});

const logoutButton = document.getElementById("logout-button");
logoutButton.addEventListener("click", () => {
  // demo logout
  window.location.href = "./index.html";
});
