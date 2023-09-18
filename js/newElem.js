function addNewElem(htmlCode) {
    var newElem = document.createElement('template');
    newElem.innerHTML = htmlCode;
    document.body.appendChild(newElem.content);
}

function extractFilename(filepath) {
    var link = document.createElement('a');
    link.href = filepath;
    return link.pathname.split('/').pop().replace(/\.[^/.]+$/, "")
}

function footer() {
    const id = "footer_" + extractFilename(document.location.href);
    addNewElem(`
<footer name=${id} id="footer"><nav><ul>
<a href="index.html">Home</a><br>
<a href="user.html">User</a><br>
<a href="txHistory.html">History</a><br>
<a href="about.html">About</a><br>
<a href="#header">↑ Back to top</a>
</ul></nav></footer>
    `);
}

function header() {
    const id = "header_" + extractFilename(document.location.href);
    addNewElem(`
    <div class="container">
    <a class="button" name=${id} id="header" href="#footer">Menu</a>
    </div>
`);
}