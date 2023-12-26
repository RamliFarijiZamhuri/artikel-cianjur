function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "navbar-nav") {
    x.className += " responsive";
  } else {
    x.className = "navbar-nav";
  }
}



function dark() {
  let sun = document.getElementById("sun")
  let moon = document.getElementById("moon")
  let body = document.body;
  body.classList.toggle("dark")
  Text.style.color = "white"
    moon.style.display = "inline"
}
