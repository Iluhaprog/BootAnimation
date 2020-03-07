const IMG = 0;
const ICON = 1;
const TEXT = 2;

function toggleDown(id) {
    document.getElementById(id).children[0].style.marginTop = 0;
}

function deleteLastChild(id) {
    var child = document.getElementById(id).children[1];
    document.getElementById(id).removeChild(child);
}

function setContentType(contentType, inner) {
    if (contentType === IMG) {
        return "<img src='" + inner + "'>";
    } else if (contentType === ICON) {
        return "<i class='" + inner + "'></i>";
    } else if (contentType === TEXT) {
        return "<p>" + inner + "<p>";
    }
}

function addChild(id, tag, classes, inner, speed, contentType) {
    var parent = document.getElementById(id);
    var lastChild = parent.children[0];

    var newChild = document.createElement(tag);

    newChild.setAttribute("class", classes);
    newChild.innerHTML = setContentType(contentType, inner);
    newChild.style.transition = "ease-in-out " + speed / 1000 + "s";

    parent.insertBefore(newChild, lastChild);
}

function animation(id, speed, arr, stop, contentType) {

    addChild(id, "div", "preloader-column__item", arr[0], speed / 3, contentType);
    addChild(id, "div", "preloader-column__item", arr[1], speed / 3, contentType);

    var i = 0;

    setInterval(function () {

        if (i == stop) {
            return 0;
        }

        arr.unshift(arr.pop());
        toggleDown(id);
        setTimeout(function () {
            deleteLastChild(id);
            addChild(id, "div", "preloader-column__item", arr[0], speed / 3, contentType);
        }, speed / 3);
        i++;

    }, speed);

}

function setOptionalParameters(obj, data) {


    for (id in data.optional) {
        option = data.optional[id];
        obj.style[id] = option;
    }
}

function init(data, id) {
    var parent = document.getElementById(id);
    var child = null;
    for (d in data) {
        d = data[d];
        child = document.createElement("div");
        child.setAttribute("id", d.id);
        child.setAttribute("class", "preloader-column");
        child.style.width = d.width + "px";
        setOptionalParameters(child, d);
        parent.appendChild(child);
    }

    for (d in data) {
        d = data[d];
        animation(d.id, d.speed, d.arr, d.changeNumber, d.contentType);
    }
}

function CSSLoad(file) {
    var head = document.getElementsByTagName("head")[0];
    var link = document.createElement("link");
    link.setAttribute("rel", "stylesheet");
    link.setAttribute("type", "text/css");
    link.setAttribute("href", file);
    head.insertBefore(link, head.children[head.children.length - 1]);
}

CSSLoad("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css");
CSSLoad("BootAnimation/main.css");