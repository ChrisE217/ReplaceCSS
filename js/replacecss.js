
var hmtlBox = CodeMirror(document.getElementById('html-input'), {
    value: "<div class=\"btn btn-primary\" style=\"color: blue;\">Button</div>",
    mode: "htmlmixed",
    lineNumbers: true,
    theme: "dracula",
    autofocus: true,
    lineWrapping: true,
  });

  
var cssBox = CodeMirror(document.getElementById('css-input'), {
    value: "body{\n\tbackground-color: blue;\n}",
    mode: "css",
    lineNumbers: true,
    theme: "dracula",
    readOnly: true,
    lineWrapping: true,
  });

