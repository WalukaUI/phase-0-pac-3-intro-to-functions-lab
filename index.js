const useCase = "Hello";

function shout(Case) {
    return Case.toUpperCase();
}
shout(useCase);
function whisper(Case) {
    return Case.toLowerCase();
}
whisper(useCase);

function logShout(Case) {
    const spy = Case.toUpperCase();
    console.log(spy);
}
logShout(useCase);

function logWhisper(Case) {
    const spy = Case.toLowerCase();
    console.log(spy);
}
logWhisper(useCase);

function sayHiToGrandma(Case){
if(Case.toLowerCase() === Case){
    return "I can't hear you!" 
}else if (Case.toUpperCase() === Case){
    return "YES INDEED!"
}else if(Case === "I love you, Grandma."){
    return "I love you, too."
}
}
sayHiToGrandma(useCase);

