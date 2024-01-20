const themeSwitch = document.getElementById("theme-switch");

themeSwitch.addEventListener("change", function() {
  document.body.classList.toggle("theme-light");
});

function mode() {
    window.setTimeout(function (){
        document.querySelector('#mode').classList.toggle('dark-mode'); 
      document.querySelector('#mode').classList.toggle('light-mode'); 
    },200);

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    var cookieDegeri = getCookie('dark');
    if (cookieDegeri === '1') {
        document.cookie = 'dark=0; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'
    }else{
        document.cookie = 'dark=1; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/'
    }
}

