
var inputHTMLBox = CodeMirror(document.getElementById('html-input'), {
    value: "<div class=\"btn btn-primary\" style=\"color: blue;\">Button</div>",
    mode: "htmlmixed",
    lineNumbers: true,
    theme: "dracula",
    autofocus: true,
    lineWrapping: true,
  });

  
var outputCSSBox = CodeMirror(document.getElementById('home'), {
    value: "body{\n\tbackground-color: blue;\n}",
    mode: "css",
    lineNumbers: true,
    theme: "dracula",
   // readOnly: true,
    lineWrapping: true,
  });

  var outputHTMLBox = CodeMirror(document.getElementById('profile'), {
    value: "<div class=\"btn btn-primary\">Button</div>",
    mode: "htmlmixed",
    lineNumbers: true,
    theme: "dracula",
    //readOnly: true,
    lineWrapping: true,
  });


  $('#html-tab').click( () => {
    $('#profile').attr('style', 'position: static;')
  });
