const appx = new Vue({
  el: "#appx",
  data: {
    p0:"Inicio",
    p1: "Pasteles",
    p2:"Pedidos",
    p3:"Pastelero",
    p4:"Contacto",
    imagent: "Images/imagen1.png",
    imagen2: "Images/pasteles.jpeg",
    HTMLcontent: null,
  },
  mounted() {
    this.HTMLcontent = ` <header>
    <div id="logo">
        <img src="Images/logo.png" alt="Milkmocha">
    </div>
    <nav>
        <ul>
            <li><a href="index.html">`+this.p0+`</a></li>
            <li><a href="Pasteles.html">`+this.p1+`</a></li>
            <li><a href="Pedidos.html">`+this.p2+`</a></li>
            <li><a href="Pastelero.html">`+this.p3+`</a></li>
            <li><a href="Contacto.html">`+this.p4+`</a></li>
        </ul>               
    </nav>
</header>`
  }
  
});


