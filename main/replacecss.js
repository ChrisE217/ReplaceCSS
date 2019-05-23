function getInput() {

    try {
        let textInput = inputHTMLBox.getValue();
        if (textInput.length != 0) {
            const parser = new DOMParser();
            let htmlElements = parser.parseFromString(textInput, "text/html").body;
            const ids = document.getElementById("id-checkbox").checked;
            const classes = document.getElementById("class-checkbox").checked;
            // const parent = document.getElementById("parent-checkbox").checked;
            extractStyles(ids, classes, parent, htmlElements);
        }
    } catch (e) {
        console.log(e);
    }
}

function extractStyles(useID, useClass, useParent, input) {
    let cssOutput = [];
    input.querySelectorAll("body *").forEach((node) => {
        if (node.hasAttribute("style")) {
            let style = "";
            if (useClass) {
                style = ("." + node.className.split(" ").join(" .") + "\{\n\t" + node.getAttribute("style") + "\n\}");
            }
            if (useID && node.hasAttribute('id')) {
                style = ("#" + node.id + "\{\n\t" + node.getAttribute("style") + "\n\}");
            }
            node.removeAttribute("style");
            cssOutput.push(style);
        }
    });
    console.log(input);
    let htmlOutput = input.innerHTML;
    setOutput(cssOutput.join("\n"), htmlOutput)
}

function setOutput(cssOutput, htmlOutput) {

    outputCSSBox.setValue(cssOutput);
    outputHTMLBox.setValue(htmlOutput);
}