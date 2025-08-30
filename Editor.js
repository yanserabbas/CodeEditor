
// Declaring output button for running the code
let outputBtn = document.getElementById('outputLabel');

// Function for Showing code result
function CodeEditor(){
    let htmlCode = document.getElementById('htmlCode').value;
    let cssCode = document.getElementById('cssCode').value;
    let jsCode = document.getElementById('jsCode').value;
    let Output = document.getElementById('Output');

    Output.contentDocument.body.innerHTML = htmlCode + "<style>"+cssCode+"</style>";
    Output.contentWindow.eval(jsCode);

}

// EventListener on output button
outputBtn.addEventListener('click',CodeEditor);