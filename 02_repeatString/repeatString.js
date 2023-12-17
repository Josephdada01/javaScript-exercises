const repeatString = function(word, times) {
    if (times < 0) return "Error"
    let answer = "";
    for (let i = 0; i < times; i++) {
        answer += word;
    }
    return answer;
};

// Do not edit below this line
module.exports = repeatString;
