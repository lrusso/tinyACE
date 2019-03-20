# Tiny Code Editor

Tiny Code Editor based on Ace Code Editor. Allows the programmer to open a file of the computer, work on it online with this tool and then download it to the computer in order to update the local version of that file. Works with HTML, Java, JavaScript, PHP, CSS and XML files.

## Web

https://tinycodeeditor.lrusso.com.ar

## Based on Ace Code Editor with several modifications

| FILE | BEFORE | AFTER |
| :------------: | :------------ | :------------ |
| ace.js | this.EOF_CHAR = "\xB6"; | this.EOF_CHAR = ""; |
| ace.js | this.EOL_CHAR_LF = "\xAC"; | this.EOL_CHAR_LF = ""; |
| ace.js | this.EOL_CHAR_CRLF = "\xa4"; | this.EOL_CHAR_CRLF = ""; |
| ext-searchbox.js | English only. | English and Spanish. |
| theme-monokai.js | Original theme. | More like Sublime Text 3 theme. |

The reason of this is to prevent from showing/marking breaklines in the document.

## Core files
https://github.com/ajaxorg/ace-builds
