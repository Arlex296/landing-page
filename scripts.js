function agregarDatos() {
    const nombre = document.getElementById('inputNombre').value;
    const apellido = document.getElementById('inputApellido').value;
    const celular = document.getElementById('inputCelular').value;
    const correo = document.getElementById('inputCorreo').value;

    const datos = nombre + " " + apellido + " - " + celular+ " - " + correo;
      
    console.log(datos);
    if (datos) {
      const datosMostrados = document.getElementById('datosMostrados');
      datosMostrados.textContent = datos;
    }
  }