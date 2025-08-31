
// Declaring output button for running the code and declaring variables
let outputBtn = document.getElementById('outputLabel');
let htmlDiv = document.getElementById('htmlCode');
let cssDiv = document.getElementById('cssCode');
let jsDiv = document.getElementById('jsCode');

// Function for Showing code result
function CodeEditor(){
    let htmlDiv = document.getElementById('htmlCode');
    let cssDiv = document.getElementById('cssCode');
    let jsDiv = document.getElementById('jsCode');
    let htmlCode = document.getElementById('htmlCode').value;
    let cssCode = document.getElementById('cssCode').value;
    let jsCode = document.getElementById('jsCode').value;
    let Output = document.getElementById('Output');

    let HtmlCodeOutput = htmlCode;
    let CssCodeOutput =  cssCode;
    let JsCodeOutput = jsCode;

    localStorage.setItem('HtmlCodeOutput',HtmlCodeOutput);
    localStorage.setItem('CssCodeOutput',CssCodeOutput);
    localStorage.setItem('JsCodeOutput',JsCodeOutput);

    
    let HtmlOutput = localStorage.getItem('HtmlCodeOutput');
    let CssOutput = localStorage.getItem('CssCodeOutput');
    let JsOutput = localStorage.getItem('JsCodeOutput');

    htmlDiv.innerHTML = HtmlOutput;
    cssDiv.innerHTML = CssOutput;
    jsDiv.innerHTML = JsOutput;
}

let HtmlOutput = localStorage.getItem('HtmlCodeOutput');
let CssOutput = localStorage.getItem('CssCodeOutput');
let JsOutput = localStorage.getItem('JsCodeOutput');

htmlDiv.innerHTML = HtmlOutput;
cssDiv.innerHTML = CssOutput;
jsDiv.innerHTML = JsOutput;

Output.contentDocument.body.innerHTML = HtmlOutput + "<style>"+CssOutput+"</style>";
Output.contentWindow.eval(JsOutput);



// EventListener on output button
outputBtn.addEventListener('click',()=>{
    window.open('Editor.html',"_self");
    outputBtn.style.backgroundColor = 'rgb(148, 42, 42)';
});