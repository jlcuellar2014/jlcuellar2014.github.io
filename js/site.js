$( document ).ready(function() {
    var url = 'data.json';

    $.getJSON(url, function(data) {
        // Función que se ejecuta después de cargar los datos
        showData(data);
      });

    console.log( "ready!" );
});

function showData(data) {
    var about_me_section =  $("#about-me-section");

    console.log(data);
    about_me_section.append(data["about-me"]);
  }