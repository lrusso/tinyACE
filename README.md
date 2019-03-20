# Tiny Code Editor

Tiny Code Editor based on Ace Code Editor. Allows the programmer to open a file of the computer, work on it online with this tool and then download it to the computer in order to update the local version of that file.

## Web

https://tinycodeeditor.lrusso.com.ar

## Based on Ace Code Editor with several modifications

| TYPE | ELEMENT | DETAILS |
| :------------: | :------------: | :------------ |
| Updated | ace.js | Changed **this.EOF_CHAR = "\xB6";** for **this.EOF_CHAR = "";** |
| Updated | ace.js | Changed **this.EOL_CHAR_LF = "\xAC";** for **this.EOL_CHAR_LF = "";** |
| Updated | ace.js | Changed **this.EOL_CHAR_CRLF = "\xa4";** for **this.EOL_CHAR_CRLF = "";** |
| Updated | ext-searchbox.js | Spanish language compatible. |
| Updated | theme-monokai.js | Color theme more like Sublime Text 3. |

The reason of this is to prevent from showing/marking breaklines in the document.

## Sample code for handle the editor height

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

## Core files
https://github.com/ajaxorg/ace-builds
