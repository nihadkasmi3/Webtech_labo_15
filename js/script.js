function printTextBox(text){
    const length = text.length + 4;
     console.log("/" + "*".repeat(length) + "\\");
     console.log("| " + text + " |");
     console.log("\\" + "*".repeat(length) + "/");
}
printTextBox("HELLO WORLD");
printTextBox("HALLO WERELD");
printTextBox("HOLA MUNDO");

