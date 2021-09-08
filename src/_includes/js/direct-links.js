const h2s = document.querySelectorAll("main h2");
const h3s = document.querySelectorAll("main h3");
const h4s = document.querySelectorAll("main h4");

function getId(s) {
    regex = /\s+/gm;
    s = s.toLowerCase().replace(regex, "_");
    return s;
}

function linkify(headings) {
    if (headings.length > 0) {
        headings.forEach(h => {
            h.setAttribute("id", `${getId(h.textContent)}`)
            const a = document.createElement("a");
            a.setAttribute("href", `#${getId(h.textContent)}`);
            a.textContent = h.textContent;
            h.textContent = "";
            h.appendChild(a);
        });
    }
}

linkify(h2s);
linkify(h3s);
linkify(h4s);