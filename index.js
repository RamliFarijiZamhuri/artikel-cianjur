function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "navbar-nav") {
    x.className += " responsive";
  } else {
    x.className = "navbar-nav";
  }
}



function dark() {
  let body = document.body;
  let sun = document.getElementById("sun")
  let moon = document.getElementById("moon")
  body.classList.toggle("dark")
  
  if (body.className !== "dark") {
    sun.style.display = "none";
    moon.style.display = "inline";
  } else {
    moon.style.display = "none";
    sun.style.display = "inline"
  }
}


