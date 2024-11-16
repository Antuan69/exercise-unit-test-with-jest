let oneEuroIs = {
    "JPY": 156.5, // Japan yen
    "USD": 1.07, // US dollar
    "GBP": 0.87, // British pound
};

function fromDollarToYen(dollars) {
    let result = +((dollars / oneEuroIs["USD"]) * oneEuroIs["JPY"]).toFixed(2);
    return result 
}

function fromEuroToDollar(euros) {
    return euros * oneEuroIs["USD"];
}

function fromYenToPound(yen) {
    let nose = +((yen / oneEuroIs["JPY"]) * oneEuroIs["GBP"]).toFixed(2);
    return nose
}

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
