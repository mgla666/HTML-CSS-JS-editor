function output() {
    var htmlCode = document.getElementById("htmlCode").value;
    var cssCode = "<style>"+document.getElementById("cssCode").value+"</style>";
    var jsCode = "<scr"+"ipt>"+document.getElementById("jsCode").value+"</scr"+"ipt>";
    var frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode+cssCode+jsCode);
    frame.close();
}