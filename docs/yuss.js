// var targetDiv = "project-thumbs-5";
var targetDiv = "project-thumbs-1";


var projects = [
    {
        name: "Progress Summit",
        link: "./progress-summit",
        type: "Conference Visual Identity",
        description: "The Atlantic’s Progress Summit is an event that brings together scientists, entrepreneurs, and storytellers to discuss science, technology, and curiosity. The summit aims to highlight innovative ideas and discuss how to use technology to create a better world.",
        cover: "./progress-summit/img/progress_summit.003.png"
    },
    {
        name: "AMC Theatres",
        link: "./amc-theatres",
        type: "Entertainment Visual Identity",
        description: "AMC Theatres, the largest movie theater chain in the world, has faced a downturn as the rapid growth of streaming services has led to significant audience loss.",
        cover: "./amc-theatres/img/amc.001.png"
    },
    {
        name: "List Arts Center",
        link: "./list-arts-center",
        type: "Cultural Visual Identity",
        description: "List Arts Center is the contemporary art museum on campus at MIT. This project looks at the semantic value of the name/word “List” to create new organizational methodologies that reflect the Center's commitment to the circulation of knowledge."
    },
    {
        name: "Midjourney",
        link: "./midjourney",
        type: "Technology Visual Identity",
        description: "Midjourney’s visual language alienates non-technical audiences. This hypothetical rebrand makes the brand more approachable from the logotype to envisioning a new conference—Midjourney Navigate."
    }
];

// TODO: override on each page
var imgs = [];

function buildProjectThumb(project) {
    var element = document.createElement('div');
    element.classList.add('project-thumb');

    var thumb = `<a href="${project.link}">`;
    thumb += '<div class="YUSS-grid-2">';
    
    
    // Col 1
    thumb += '<div>';
    thumb += `<h2>${project.name}</h2>`;
    thumb += `<p>${project.type}</p>`;
    thumb += `<br><p>${project.description}</p>`;
    thumb += '</div>';

    // Col 3
    if (project.cover) {
        thumb += `<img src="${project.cover}" class="img-full-w">`;
    } else {
        thumb += '<div class="thumb-img-placeholder"></div>';
    }

    thumb += "</div>";
    thumb += '</a>';

    element.innerHTML = thumb;
    document.getElementById(targetDiv).appendChild(element);
}

function buildProjectImg(project) {
    var row = document.createElement('div');
    row.classList.add("YUSS-grid-6");
    row.classList.add("project-thumb-row");
    
    var media = document.createElement('div');
    media.classList.add('project-thumb');
    var caption = document.createElement('div');
    caption.classList.add('project-caption');


    // TODO: need to make this responsive so caption wraps on mobile

    var thumb = "";
    // TODO: img/video src logic
    if (project.img) {
        thumb += `<img src="${project.img}" class="img-full-w">`;
    } else if (project.video) {
        // thumb += '<div class="thumb-img-placeholder"></div>';
        // thumb += '<div class="img-full-w">';
        thumb += '<video width="1920" height="1080" controls="" autoplay="" style="aspect-ratio: 16 / 9; max-height: max-content;" class="img-full-w">';
        thumb += `<source src="${project.video}" type="video/mp4">`;
        thumb += '</video>';
        // thumb += '</div>';

        /**
         <video width="1920" height="1080" controls="" style="aspect-ratio: 16 / 9; width: 1625.87px; height: 914.552px;" data-video="0">
                     <source src="https://files.cargocollective.com/c1603295/widescreen.mp4" type="video/mp4">
                 </video>
         */
    } else {
        thumb += '<div class="thumb-img-placeholder"></div>';
    }

    media.innerHTML = thumb;
    row.appendChild(media);
    caption.innerHTML = `<p class="img-caption">${project.caption || ""}</p>`;
    row.appendChild(caption);

    document.getElementById("project-content").appendChild(row);
}

function buildAudienceAndSolution(aud, sol) {
    var row = document.createElement('div');
    row.classList.add("YUSS-grid-6");

    var audience = '<div style="grid-column: span 2;">';
    audience += `<p><strong>Audience</strong><br>${aud}</p>`;
    audience += '</div>';

    var space = `<div style="grid-column: span 1;"></div>`;
    
    var solution = '<div style="grid-column: span 2;">';
    solution += `<p><strong>Solution</strong><br>${sol}</p>`;
    solution += '</div>';

    row.innerHTML = audience + space + solution + space;
    document.getElementById("project-content").appendChild(row);
}


function buildAllThumbs() {
    for (var p = 0; p < projects.length; p++) {
        buildProjectThumb(projects[p]);
    }
}

function buildAllImgs(aud, sol) {
    for (var p = 0; p < imgs.length; p++) {
        buildProjectImg(imgs[p]);

        // Add audience and solution
        if (p === 0 && aud && sol) {
            buildAudienceAndSolution(aud, sol);
        }
    }
}