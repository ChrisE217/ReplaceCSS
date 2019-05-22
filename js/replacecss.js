var inputHTMLBox = CodeMirror(document.getElementById("html-input"), {
    value: "<div class=\"btn btn-primary\" style=\"color: blue;\">Button</div>",
    mode: "htmlmixed",
    lineNumbers: true,
    theme: "dracula",
    autofocus: true,
    lineWrapping: true,
});

var outputCSSBox = CodeMirror(document.getElementById("home"), {
    mode: "css",
    lineNumbers: true,
    theme: "dracula",
    readOnly: true,
    lineWrapping: true,
});

var outputHTMLBox = CodeMirror(document.getElementById("profile"), {
    mode: "htmlmixed",
    lineNumbers: true,
    theme: "dracula",
    readOnly: true,
    lineWrapping: true,
});


$("#html-tab").click(() => {
    $("#profile").attr("style", "position: static;")
});

function getInput() {
    
    try {
        let textInput = inputHTMLBox.getValue();
        if (textInput.length != 0) {
            const parser = new DOMParser();
            let htmlElements = parser.parseFromString(textInput, "text/html").body;
            const ids = document.getElementById("id-checkbox").checked;
            const classes = document.getElementById("class-checkbox").checked;
            const parents = document.getElementById("parent-checkbox").checked;
            extractStyles(ids, classes, parents, htmlElements);
        }
    } catch (e) {
        console.log(e);
    }
}

function extractStyles(useID, useClass, useParent, input) {
    let cssOutput = [];
    input.querySelectorAll("body *").forEach((node) => {
        if (node.hasAttribute("style")) {
            let style = (node.className + "\{\n\t" + node.getAttribute("style") + "\n\}")
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
