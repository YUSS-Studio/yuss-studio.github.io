// var targetDiv = "project-thumbs-5";
var targetDiv = "project-thumbs-1";


var projects = [
    {
        name: "Progress Summit",
        link: "./progress-summit",
        type: "Conference Visual Identity",
        description: ""
    },
    {
        name: "AMC Theaters",
        link: "./amc-theaters",
        type: "Entertainment Visual Identity",
        description: ""
    },
    {
        name: "List Arts Center",
        link: "./list-arts-center",
        type: "Cultural Visual Identity",
        description: ""
    },
    {
        name: "Midjourney",
        link: "./midjourney",
        type: "Technology Visual Identity",
        description: ""
    },
    {
        name: "In: Situ",
        link: "./in-situ",
        type: "Exhibition Catalog",
        description: ""
    }
];

// TODO: override on each page
var imgs = [];


function buildProjectThumb(project) {
    var element = document.createElement('div');
    element.classList.add('project-thumb');

    var thumb = `<a href="${project.link}">`;
    thumb += '<div class="thumb-img-placeholder"></div>';
    thumb += `<h3>${project.name}</h3>`;
    thumb += `<p>${project.type}</p>`;
    thumb += '</a>';

    element.innerHTML = thumb;
    document.getElementById(targetDiv).appendChild(element);
}

function buildProjectImg(project) {
    var element = document.createElement('div');
    element.classList.add('project-thumb');

    var thumb = "";
    // TODO: img/video src logic
    thumb += '<div class="thumb-img-placeholder"></div>';
    thumb += `<p class="img-caption">${project.type}</p>`;

    element.innerHTML = thumb;
    document.getElementById(targetDiv).appendChild(element);
}


function buildAllThumbs() {
    for (var p = 0; p < projects.length; p++) {
        buildProjectThumb(projects[p]);
    }
}

function buildAllImgs() {
    for (var p = 0; p < imgs.length; p++) {
        buildProjectImg(imgs[p]);
    }
}