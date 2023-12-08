$(document).ready(function () {
    var url = 'data.json';

    $.getJSON(url, function (data) {
        // Función que se ejecuta después de cargar los datos
        showData(data);
    });
});

function showData(data) {
    var about_me_section = $("#about-me");
    var work_experience = $("#work-experience");

    console.log(data["work-experience"]);
    about_me_section.append(data["about-me"]);

    data["work-experience"].forEach(e => {

        var item = "";
        item += "<li class=\"row\">";
        item += "   <div class=\"col-4\">"
        item += "       <p>" + e["company"] + "</p>";
        item += "       <p>" + e["place"] + "</p>";
        item += "       <p>" + e["start"] + " - " + e["end"] + "</p>";
        item += "   </div>"
        item += "   <div class=\"col\">"
        item += "       <p>" + e["role"] + "</p>";
        item += "       <p>" + e["roleDescription"] + "</p>";

        item += "       <ul>";
        e["responsabilities"].forEach(r => {
            console.log(r);
            item += "       <li>";
            item += "           <p>" + r + "</p>";
            item += "       </li>";
        });
        item += "       </ul>";

        item += "   </div>"
        item += "</div>"

        // item += "<li class=\"row\">";
        // item += "   <div class=\"col\">"
        // item += "       <p>" + e["company"] + "</p>";
        // item += "       <p>" + e["role"] + "</p>";
        // item += "   </div>"
        // item += "</div>"

        // item += "<li class=\"row\">";
        // item += "   <div class=\"col\">"
        // item += "       <p>" + e["place"] + "</p>";
        // item += "       <p>" + e["roleDescription"] + "</p>";
        // item += "   </div>"
        // item += "</div>"

        // item += "<li class=\"row\">";
        // item += "   <div class=\"col\">"
        // item += "       <p>" + e["start"] + " - " + e["end"] + "</p>";
        // item += "       <p>" + e["roleDescription"] + "</p>";
        // item += "   </div>"
        // item += "</div>"


        item += "</li>";

        console.log(item);

        work_experience.append(item);
    });
}