$(document).ready(function () {
    var url = 'data.json';

    $.getJSON(url, function (data) {
        showData(data);
    });

    var scrollSpy = new bootstrap.ScrollSpy(document.body, {
        target: '#nav-sections'
    });

    var contentBody = document.getElementById('content-body');
    window.addEventListener('scroll', function () {
        contentBody.scrollTop = window.scrollY;
    });
});

function showData(data) {

    var your_name = $(".your-name");
    var title = $(".your-title");
    var role = $(".your-role");

    var about_me_section = $("#about-me");
    var work_experience = $("#work-experience");

    your_name.append(data["your-name"]);
    title.append(data["title"]);
    role.append(data["role"]);

    about_me_section.append(data["about-me"]);

    data["work-experience"].forEach(e => {

        var item = "";
        item += "<section>";
        item += "   <div class=\"row\">";
        item += "       <div class=\"col-4\">";
        item += "           <h5>" + e["company"] + "</h5>";
        item += "           <p>" + e["place"] + "</p>";
        item += "           <p>" + e["start"] + " - " + e["end"] + "</p>";
        item += "       </div>";
        item += "       <div class=\"col\">";
        item += "           <h5>" + e["role"] + "</h5>";
        item += "           <p>" + e["roleDescription"] + "</p>";
        item += "           <ul>";
        e["responsabilities"].forEach(r => {
            item += "           <li>" + r + "</li>";
        });
        item += "           </ul>";
        item += "       </div>";
        item += "   </div>"
        item += "</section>";

        // console.log(item);
        work_experience.append(item);
    });
}