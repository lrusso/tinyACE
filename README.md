# Tiny Code Editor

Tiny Code Editor based on Ace Code Editor. Allows the programmer to open a file of the computer, work on it online with this tool and then download it to the computer in order to update the local version of that file.

## Web

https://tinycodeeditor.lrusso.com.ar

## Compatible languages or file types

- HTML
- JavaScript
- CSS
- Java
- PHP
- XML

## The following lines has been edited from ace.js

| BEFORE  | AFTER  |
| :------------ | :--------------- |
| this.EOF_CHAR = "\xB6"; | this.EOF_CHAR = ""; |
| this.EOL_CHAR_LF = "\xAC"; | this.EOL_CHAR_LF = ""; |

The reason of this is to prevent from showing/marking breaklines in the document.

## Sample code for handle editor height

CSS code
```
#tinycodeeditor-textcode-container{width:100%;height:100px;display:block;position:relative;padding:0;margin:0}
#tinycodeeditor-textcode{position:absolute;top:0;right:0;bottom:0;left:0;}
```

HTML code
```
<div id="tinycodeeditor-textcode-container"><div id="tinycodeeditor-textcode"></div></div>
```

JavaScript code
```
function resizeTinyCodeEditor()
    {
    var w = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], x = w.innerWidth || e.clientWidth || g.clientWidth, y = w.innerHeight|| e.clientHeight|| g.clientHeight;
    var editHeight = y - 156; // OR SOME VALUE THAT YOU WANT
    document.getElementById("tinycodeeditor-textcode-container").style.height = editHeight.toString() + "px";
    editor.resize();
    };

window.onresize = function()
    {
    resizeTinyCodeEditor();
    };

window.onload = function()
    {
    resizeTinyCodeEditor();
    };
```

## Core files:
https://github.com/ajaxorg/ace-builds
