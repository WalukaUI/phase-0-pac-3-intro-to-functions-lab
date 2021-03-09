const Case = "Hello";

function shout(Case) {
    return Case.toUpperCase();
}
function whisper(Case) {
    return Case.toLowerCase();
}
function logShout(Case) {
    const spy = Case.toUpperCase();
    console.log(spy);
}
function logWhisper(Case) {
    const spy = Case.toLowerCase();
    console.log(spy);
}

function sayHiToGrandma(Case){
if(Case === "hello"){
    return "I can't hear you!" 
}else if (Case === "HELLO"){
    return "YES INDEED!"
}else if(Case === "I love you, Grandma."){
    return "I love you, too."
}
}

