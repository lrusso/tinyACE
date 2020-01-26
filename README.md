# TinyACE Editor

TinyACE Editor based on Ace Code Editor. Allows the programmer to open a file of the computer, work on it online with this tool and then download it to the computer in order to update the local version of that file. Compatible with HTML, Java, JavaScript, PHP, CSS, C and Arduino files.

![alt screenshot](https://raw.githubusercontent.com/lrusso/tinyACE/master/tinyACE.png)

## Web

https://lrusso.github.io/tinyACE/tinyACE.htm

## Based on Ace Code Editor with several modifications

| FILE | BEFORE | AFTER |
| :------------: | :------------ | :------------ |
| ace.js | this.EOF_CHAR = "\xB6"; | this.EOF_CHAR = ""; |
| ace.js | this.EOL_CHAR_LF = "\xAC"; | this.EOL_CHAR_LF = ""; |
| ace.js | this.EOL_CHAR_CRLF = "\xa4"; | this.EOL_CHAR_CRLF = ""; |
| ace.js | showContextMenu(); | //showContextMenu(); |
| theme-monokai.js | Original theme. | More like Sublime Text 3 Sunburst theme. |

The ace.js file was modified in order to prevent from showing/marking breaklines in the document and to hide the context menu in mobile devices (and by doing this, allowing the standard context menu for cut/copy/paste text).

## Core files
https://github.com/ajaxorg/ace-builds
