
var hmtlBox = CodeMirror(document.getElementById('html-input'), {
    value: "<div class=\"btn btn-primary\">Button</div>",
    mode: "text/html",
    lineNumbers: true
  });

  
var cssBox = CodeMirror(document.getElementById('css-input'), {
    value: "body{\n\tbackground-color: blue;\n}",
    mode: "text/html",
    lineNumbers: true
  });