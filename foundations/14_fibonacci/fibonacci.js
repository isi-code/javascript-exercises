const fibonacci = function(num) {
    const sequence = [];
    let number = typeof num === "number" ? num : parseInt(num);

    if (number === 0) return 0
    if (number < 0) return "OOPS";

    for(let i = 0; i < number; i++){
        if(!sequence.length || sequence.length < 2){
            sequence.push(1); 
            continue
        }

        let addNum = sequence[i - 1] + sequence[i - 2];
        sequence.push(addNum);
    }

    return sequence.pop();
};

// Do not edit below th is line
module.exports = fibonacci;
