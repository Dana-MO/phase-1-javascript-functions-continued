// code your solution here

function saturdayFun(string="roller-skate") {
    return `This Saturday, I want to ${string}!`
}

const mondayWork = function(string="go to the office") {
    return `This Monday, I will ${string}.`;
}

function wrapAdjective(string="*") {
    return function(singleParameter="special") {
        return `You are ${string}${singleParameter}${string}!`;
    }
}