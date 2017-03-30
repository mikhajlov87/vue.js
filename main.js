/**
 * @author S.Mikhajlov
 * @param first {number}
 * @param second {number}
 * @return {string} Fibonacci sequence, length 100 numbers;
 **/
const fibonacci = (first = 0, second = 1) => {
    let third;
    let i;
    let maxNumberCount = 98;
    let result = first + ' ' + second;
    
    for (i = 0; i < maxNumberCount; i++) {
        third = first + second;
        first = second;
        second = third;
        result += ' ' + third;
    }

    return result;
};

fibonacci();