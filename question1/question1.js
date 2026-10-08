const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        const stringArr = mixedArray.filter(item =>
            'string' === typeof item);

        const lowerCaseArr = stringArr.map(word =>
            word.toLowerCase()
        );

        resolve(lowerCaseArr);
    });
};

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result);
    });