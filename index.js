function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "navbar-nav") {
      x.className += " responsive";
    } else {
      x.className = "navbar-nav";
    }
  }