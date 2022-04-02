const appxx = new Vue({
    el: "#appxx",
    data: {
      imagent: "Images/facebook.png",
      imagen2: "Images/whatsapp.png",
      lugar: "Plaza Ciudadela",
      telefono:"Telefono: 33422-000",
      dias1:"Lunes a Viernes",
      dias2:"Sabado y Domingo",
      horario1:" 8:00 a 20:00",
      horario2:"9:00 a 20:00",
      htmlconact:null,
    },
    mounted() {
      this.htmlconact = `
    <div id="contacto">
            <h1>Contacto</h1>
            <p>`+this.lugar+`<br> <h4>`+this.telefono+`</h4></p>
            <p id="hora">Horario de atención:<br>
            `+this.dias1+`<br>
            `+this.horario1+`<br>
                   `+this.dias2+`<br>
                   `+this.dias2+`</p>
            <img id="img" type="image/png" src="`+this.imagent+`">
            <img id="img"  type="image/png" src="`+this.imagen2+`">
       </div>`
      }
  });