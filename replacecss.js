module.exports = (stringInput, idOverClass, callback) => {
    try {
        if (stringInput.length != 0) {
            const parser = new DOMParser();
            var htmlElements = parser.parseFromString(stringInput, "text/html").body;
        }
    } catch (e) {
        console.log(e);
    }

    let cssOutput = [];
    htmlElements.querySelectorAll("body *").forEach((node) => {
        if (node.hasAttribute("style")) {
            let style = ("." + node.className.split(" ").join(" .") + "\{\n\t" + node.getAttribute("style") + "\n\}");

            if (idOverClass && node.hasAttribute('id')) {
                style = ("#" + node.id + "\{\n\t" + node.getAttribute("style") + "\n\}");
            }
            node.removeAttribute("style");
            cssOutput.push(style);
        }
    });
    let htmlOutput = htmlElements.innerHTML;

    return callback(null, cssOutput.join("\n"), htmlOutput);
}