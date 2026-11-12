/* =====================================================================
   CRONOLOGIA.JS · Star Wars · Sesión 11
   $(document).ready(): espera a que la página cargue
   Sintaxis de jQuery: $(selector).accion()
   ===================================================================== */

$(document).ready(function () {

  /* --- Plugin FontFlex: título que se adapta al ancho de la ventana --- */
  $('.titulo-flex').fontFlex(28, 64, 18);


  /* --- Plugin bxSlider: banner animado ----------------------------- */
  $('.banner').bxSlider({
    mode: 'horizontal',   // las imágenes se deslizan de lado
    auto: true,
    pause: 3500,
    speed: 800,           // duración del deslizamiento (ms)
    captions: true,
    controls: true,
    autoHover: true
  });


  /* --- Plugin SweetAlert2: elegir el lado de la Fuerza ---------------
     La ventana tiene dos botones; según cuál se presione, .then()
     muestra un mensaje distinto */
  $('#elegir-lado').click(function () {
    Swal.fire({
      title: '¿De qué lado de la Fuerza estás?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Lado luminoso',
      cancelButtonText: 'Lado oscuro',
      confirmButtonColor: '#3FA9F5',
      cancelButtonColor: '#C0392B',
      background: '#14142A',
      color: '#EAEAEA'
    }).then(function (result) {
      if (result.isConfirmed) {
        Swal.fire({ title: 'Bienvenido, Jedi', text: 'Que la Fuerza te acompañe.', icon: 'success',
                    background: '#14142A', color: '#EAEAEA', confirmButtonColor: '#3FA9F5' });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire({ title: 'Has elegido el lado oscuro', text: 'Tu entrenamiento como Sith comienza hoy.', icon: 'warning',
                    background: '#14142A', color: '#EAEAEA', confirmButtonColor: '#C0392B' });
      }
    });
  });


  /* --- Plugin Timelinr: línea de tiempo ---------------------------- */
  $('#timeline').timelinr({
    arrowKeys: 'true',
    autoPlay: 'true',
    autoPlayPause: 4000
  });

});
