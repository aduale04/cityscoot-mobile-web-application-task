// Anonymous "self-invoking" function
(function () {
    var startingTime = new Date().getTime();
    // Load the script
    var script = document.createElement("SCRIPT");
    script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js';
    script.type = 'text/javascript';
    document.getElementsByTagName("head")[0].appendChild(script);
    var style = localStorage.getItem('styles')
    var prepareCssVariable
    if (style) {
        prepareCssVariable = {...JSON.parse(style)}
        var styles = `
        --primary-color:${prepareCssVariable.primaryColor};
        --secondary-color:${prepareCssVariable.secondaryColor};
        --body-bg-color:${prepareCssVariable.bodyBg};
        --primary-font:${prepareCssVariable.fontFamily};
        --nav-bg-color:${prepareCssVariable.naveBgColor};
        --font-size-default:${prepareCssVariable.fontSize}px;
        `
        var bodyElm = document.getElementsByTagName("body")
        bodyElm[0].setAttribute('style', styles);
        document.getElementById('primaryColor').value=prepareCssVariable.primaryColor
        document.getElementById('secondaryColor').value=prepareCssVariable.secondaryColor
        document.getElementById('naveBgColor').value=prepareCssVariable.naveBgColor
        document.getElementById('bodyBg').value=prepareCssVariable.bodyBg
        document.getElementById('fontFamily').value=prepareCssVariable.fontFamily
        document.getElementById('fontSize').value=prepareCssVariable.fontSize
    }

})();

function applyTheme() {

    var primaryColor = document.getElementById('primaryColor').value
    var secondaryColor = document.getElementById('secondaryColor').value
    var naveBgColor = document.getElementById('naveBgColor').value
    var bodyBg = document.getElementById('bodyBg').value
    var fontFamily = document.getElementById('fontFamily').value
    var fontSize = document.getElementById('fontSize').value
    var style = localStorage.getItem('styles')
    var prepareCssVariable
    if (style) {
        prepareCssVariable = {...JSON.parse(style)}
        if (primaryColor) prepareCssVariable = {...prepareCssVariable, primaryColor}
        if (secondaryColor) prepareCssVariable = {...prepareCssVariable, secondaryColor}
        if (naveBgColor) prepareCssVariable = {...prepareCssVariable, naveBgColor}
        if (bodyBg) prepareCssVariable = {...prepareCssVariable, bodyBg}
        if (fontFamily) prepareCssVariable = {...prepareCssVariable, fontFamily}
        if (fontSize) prepareCssVariable = {...prepareCssVariable, fontSize}
        localStorage.setItem('styles', JSON.stringify(prepareCssVariable))
    } else {
        prepareCssVariable = {primaryColor, secondaryColor, naveBgColor, bodyBg, fontFamily, fontSize}
    }
    var styles = `
        --primary-color:${prepareCssVariable.primaryColor};
        --secondary-color:${prepareCssVariable.secondaryColor};
        --body-bg-color:${prepareCssVariable.bodyBg};
        --primary-font:${prepareCssVariable.fontFamily};
        --nav-bg-color:${prepareCssVariable.naveBgColor};
        --font-size-default:${prepareCssVariable.fontSize}px;
        `
    localStorage.setItem('styles', JSON.stringify(prepareCssVariable))
    var bodyElm = document.getElementsByTagName("body")
    bodyElm[0].setAttribute('style', styles);
};
