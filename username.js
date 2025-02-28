function get_username() {
  const cookie = document.cookie
  const name = "username"
  const nvs = cookie.split("; ")

  if (name != "") {
    for (const nv of nvs) {
      if (nv.startsWith(name + "=")) {
        return nv.substring(name.length + 1)
      }
    }
  } else {
    for (const nv of nvs) {
      if (!nv.includes("=")) {
        return nv
      }
    }
  }
  return ""
}

window.onload = function () {
  //check if currently on index.html
  if (window.location.pathname.endsWith("index.html")) {
    const username = get_username()

    if (username) {
      // if username exists, display a greeting
      const greetingSpan = document.getElementById("greeting")
      if (greetingSpan) {
        const textNode = document.createTextNode(`Hello, ${username}`)
        greetingSpan.appendChild(textNode)
      }
    } else {
      // if no username is found, redirect to login page
      window.location.replace("index.html")
    }
  }
}

const homeNav = document.getElementById('homeNav');
homeNav.addEventListener('click', function(){
  window.location.assign("index.html");
});

const linkedIn = document.getElementById('linkedIn');
homeNav.addEventListener('click', function(){
  window.location.assign("https://www.linkedin.com/in/aavalencia2004");
});