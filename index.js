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

const about = [
  {
    title: "Manisan",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt placeat, et minima sunt reiciendis recusandae perferendis fugiat odio illo! Fuga consequatur quod, quo asperiores magni ea.",
    image: "/logo/manisan.jpeg"
  },
  {
    title: "Tauco",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt placeat, et minima sunt reiciendis recusandae perferendis fugiat odio illo! Fuga consequatur quod, quo asperiores magni ea.",
    image: "/logo/tauco.jpeg"
  },
  {
    title: "Moci",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt placeat, et minima sunt reiciendis recusandae perferendis fugiat odio illo! Fuga consequatur quod, quo asperiores magni ea.",
    image: "/logo/moci.jpg"
  },
  {
    title: "Laksa Cianjur",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt placeat, et minima sunt reiciendis recusandae perferendis fugiat odio illo! Fuga consequatur quod, quo asperiores magni ea.",
    image: "/logo/laksa.jpg"
  },
  {
    title: "Bandrek",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt placeat, et minima sunt reiciendis recusandae perferendis fugiat odio illo! Fuga consequatur quod, quo asperiores magni ea.",
    image: "/logo/Bandrek.jpg"
  },
  {
    title: "Geco Cianjur",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt placeat, et minima sunt reiciendis recusandae perferendis fugiat odio illo! Fuga consequatur quod, quo asperiores magni ea.",
    image: "/logo/Geco.jpg"
  },
  {
    title: "Batagor Cianjur",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt placeat, et minima sunt reiciendis recusandae perferendis fugiat odio illo! Fuga consequatur quod, quo asperiores magni ea.",
    image: "/logo/Batagor-Cianjur.jpg"
  },
  {
    title: "Nasi Pepes",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt placeat, et minima sunt reiciendis recusandae perferendis fugiat odio illo! Fuga consequatur quod, quo asperiores magni ea.",
    image: "/logo/NasiPepes.jpg"
  }
];

const products = document.getElementById("products");

about.forEach(item => {
  products.innerHTML += `
    <div class="product-items">
      <img src="${item.image}" alt="${item.title}" width="420" height="250">

      <div class="desc">
        <h1>${item.title}</h1>
        <p>${item.desc}</p>
      </div>
    </div>
  `;
});


