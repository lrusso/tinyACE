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

The reason of this is to prevent from pointing breaklines in the document.
