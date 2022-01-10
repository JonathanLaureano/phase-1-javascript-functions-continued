// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function(activity1 = "go to the office") {
    return `This Monday, I will ${activity1}.`;
};
function wrapAdjective(flair = '*') {
   return function innerFunction (adjective = "special") {
    return `You are ` + flair + adjective + flair + `!`;
    }  
}