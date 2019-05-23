var replaceCSS = require("./replacecss");

replaceCSS("<div class=\"jeff\" style=\"color: red;\"></div>", true, (err ,html, css) =>{
    console.log(html);
    console.log(css);
})