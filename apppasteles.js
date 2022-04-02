const appx2 = new Vue({
    el: "#appx2",
    data: {
      sabor1:"Chocolate",
      sp1:"$140.00",
      sabor2:"Fresa",
      sp2:"$155.00",
      sabor3:"Vainilla",
      sp3:"$155.00",
      sabor4:"Limon",
      sp4:"$125.00",
      sabor5:"Cafe",
      sp5:"$185.00",
      adorno1:"Fruta",
      ad1:"$15.00",
      adorno2:"Velas",
      ad2:"$30.00",
      adorno3:"texto",
      ad3:"$50.00",
      adorno4:"Cereales",
      ad4:"$45.00",
      adorno5:"Imagen",
      ad5:"$60.00",
      HTMLcontent2: null,
    },
    mounted() {
      this.HTMLcontent2 = ` <h1 id="h1titulo">Pasteles</h1>
      <div id="divpasteles">
          <div id="izquierda">
              <table>
                  <thead>
                      <tr>
                          <th>Sabor</th>
                          <th>precio</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>`+this.sabor1+`</td>
                          <td>`+this.sp1+`</td>
                      </tr>
                      <tr>
                          <td>`+this.sabor2+`</td>
                          <td>`+this.sp2+`</td>
                      </tr>
                      <tr>
                          <td>`+this.sabor3+`</td>
                          <td>`+this.sp3+`</td>
                      </tr>
                      <tr>
                          <td>`+this.sabor4+`</td>
                          <td>`+this.sp4+`</td>
                      </tr>
                      <tr>
                          <td>`+this.sabor5+`</td>
                          <td>`+this.sp5+`</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div id="derecha">
              <table>
                  <thead>
                      <tr>
                          <th>Adornos</th>
                          <th>precio</th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td>`+this.adorno1+`</td>
                          <td>`+this.ad1+`</td>
                      </tr>
                      <tr>
                          <td>`+this.adorno2+`</td>
                          <td>`+this.ad2+`</td>
                      </tr>
                      <tr>
                          <td>`+this.adorno3+`</td>
                          <td>`+this.ad3+`</td>
                      </tr>
                      <tr>
                          <td>`+this.adorno4+`</td>
                          <td>{`+this.ad4+`</td>
                      </tr>
                      <tr>
                          <td>`+this.adorno5+`</td>
                          <td>`+this.ad5+`</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>`
    }
    
  });