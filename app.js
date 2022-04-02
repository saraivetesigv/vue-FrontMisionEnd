const app = new Vue({
  el: '#app',
  data: {
    name: '',
    tel:'',
    correo: '',
    dia:'',
    sabor1x:'',
    sabor2x:'',
    adorno1x:'',
    adorno2x:'',
    leyenda:'',
    descri:'',
    HTMLcontent: null,
      
  },
  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
    }
    if (localStorage.tel) {
        this.tel = localStorage.tel;
    }
    if (localStorage.correo) {
        this.correo = localStorage.correo;
    }
    if(localStorage.sabor1x){
        this.sabor1x = localStorage.sabor1x;
    }
    if(localStorage.sabor2x){
        this.sabor2x = localStorage.sabor2x;
    }
    if(localStorage.adorno1x){
        this.adorno1x = localStorage.adorno1x;
      
    }
    if(localStorage.adorno2x){
        this.adorno2x = localStorage.adorno2x;
    }
    if(localStorage.descri){
        this.descri = localStorage.descri;
    }
   
    
  },
  methods: {
    persist() {
        if(this.name == '' || this.tel == '' || this.correo == '' ||
        this.sabor1x == '' || this.sabor2x == '' || this.adorno1x == '' || this.adorno2x == '' || this.descri == ''){
            alert('Llenar los campos para realizar el pedido!');
        }
      localStorage.name = this.name;
      localStorage.tel = this.tel;
      localStorage.correo = this.correo;
      localStorage.sabor1x = this.sabor1x;
      localStorage.sabor2x = this.sabor2x;
      localStorage.adorno1x = this.adorno1x;
      localStorage.adorno2x = this.adorno2x;
      localStorage.descri = this.descri;

      this.name = '';
      this.tel = '';
      this.correo = '';
      this.sabor1x = '';
      this.sabor2x = ''
      this.adorno1x = '';
      this.adorno2x = '';
      this.descri = '';
    

    },
    cargarinfo() {
        if(localStorage.name){
                this.HTMLcontent = `
            <table>
            <tr >
            <td class="tdcabecera">Nombre: </td>
            <td class="tdcabecera"> Telefono: </td>
            <td class="tdcabecera"> Correo: </td>
            </tr>
            <tr >
            <td class="tdbody">`+localStorage.name+`</td>
            <td class="tdbody">`+localStorage.tel+`</td>
            <td class="tdbody">`+localStorage.correo+`</td>
            </tr>
            </table>
            <table style="margin-top:15px">
            <tr >
            <td colspan="2" class="tdcabecera">Sabores</td>
            </tr>
            <tr>
            <td class="tdbody" style="width:50%">`+localStorage.sabor1x+`</td>
            <td class="tdbody" style="width:50%">`+localStorage.sabor2x+`</td>
            <tr>
            </table>
            <table style="margin-top:15px">
            <tr >
            <td colspan="2" class="tdcabecera">Adornos</td>
            </tr>
            <tr>
            <td class="tdbody" style="width:50%">`+localStorage.adorno1x+`</td>
            <td class="tdbody" style="width:50%">`+localStorage.adorno2x+`</td>
            <tr>
            </table>
            <table style="margin-top:15px">
            <tr>
            <td class="tdcabecera">Descripcion General</td>
            </tr>
            <tr>
            <td>`+localStorage.descri+`</td>
            </tr>
            </table>

        
        `
      
       
        if(localStorage.sabor1x == 'Chocolate'){
            document.getElementById('s1').value =  document.getElementById('s1').value -1;
        }
        if(localStorage.sabor2x == 'Chocolate'){
            document.getElementById('s1').value =  document.getElementById('s1').value -1;
        }
        if(localStorage.sabor1x == 'Fresa'){
            document.getElementById('s1f').value =  document.getElementById('s1f').value -1;
        }
        if(localStorage.sabor2x == 'fresa'){
            document.getElementById('s1f').value =  document.getElementById('s1f').value -1;
        }
        if(localStorage.sabor1x == 'Vainilla'){
            document.getElementById('s1v').value =  document.getElementById('s1v').value -1;
        }
        if(localStorage.sabor2x == 'Vainilla'){
            document.getElementById('s1v').value =  document.getElementById('s1v').value -1;
        }
        if(localStorage.sabor1x == 'Cafe'){
            document.getElementById('s1c').value =  document.getElementById('s1c').value -1;
        }
        if(localStorage.sabor2x == 'Cafe'){
            document.getElementById('s1c').value =  document.getElementById('s1c').value -1;
        }
        if(localStorage.sabor1x == 'Limon'){
            document.getElementById('s1l').value =  document.getElementById('s1l').value -1;
        }
        if(localStorage.sabor2x == 'Limon'){
            document.getElementById('s1l').value =  document.getElementById('s1l').value -1;
        }
        
        if(localStorage.adorno1x == 'fruta'){
            document.getElementById('ad1f').value =  document.getElementById('ad1f').value -1;
        }
        if(localStorage.adorno2x == 'fruta'){
            document.getElementById('ad1f').value =  document.getElementById('ad1f').value -1;
        } 

        if(localStorage.adorno1x == 'Velas'){
            document.getElementById('ad1v').value =  document.getElementById('ad1v').value -1;
        }
        if(localStorage.adorno2x == 'Velas'){
            document.getElementById('ad1v').value =  document.getElementById('ad1v').value -1;
        } 
        if(localStorage.adorno1x == 'Cereales'){
            document.getElementById('ad1v').value =  document.getElementById('ad1v').value -1;
        }
        if(localStorage.adorno2x == 'Cereales'){
            document.getElementById('ad1c').value =  document.getElementById('ad1c').value -1;
        } 
        if(localStorage.adorno1x == 'Imagen'){
            document.getElementById('ad1I').value =  document.getElementById('ad1I').value -1;
        }
        if(localStorage.adorno2x == 'Imagen'){
            document.getElementById('ad1I').value =  document.getElementById('ad1I').value -1;
        } 
       
        if(localStorage.adorno1x == 'Texto'){
            document.getElementById('ad1t').value =  document.getElementById('ad1t').value -1;
        }
        if(localStorage.adorno2x == 'Texto'){
            document.getElementById('ad1t').value =  document.getElementById('ad1t').value -1;
        } 
       
        localStorage.clear();
        }
      
        
    }
   
  }
})