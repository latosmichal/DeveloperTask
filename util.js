function calculatePolynomial(firstPoly, secondPoly) {
    let expression1 = evaluateExpression(firstPoly);
    let expression2 = evaluateExpression(secondPoly);
    let combinedPolynomialDicts = sumDicts(expression1,expression2);
    return preparePolynomialAsString(combinedPolynomialDicts);
}

function insertValueToDict(dict, key, value) {
    if (key in dict) {
        dict[key] += value;
    }
    else {
        dict[key] = value;
    }
}

function evaluateExpression(_expression) {
    _expression = _expression.replace(/\^/g,'');
    let splittedExpression = _expression.split(' ');
    let baseAttributes;
    let dict = {};
    let negativePositiveMultiplier;
    for (let i = 0; i < splittedExpression.length; i += 2) {
        negativePositiveMultiplier = 1;
        if (i > 0 && splittedExpression[i-1] == '-') {
            negativePositiveMultiplier = -1;
        }

        baseAttributes = splittedExpression[i].split('x');
        if (baseAttributes[0] == '-') {
            baseAttributes[0] = -1;
        }
        if (baseAttributes[0] == '' && baseAttributes[1] == '') {
            insertValueToDict(dict, '1', negativePositiveMultiplier);
        }
        else if (baseAttributes[0] == '' && baseAttributes[1] != '') {
            insertValueToDict(dict, baseAttributes[1], negativePositiveMultiplier);
        }
        else if (baseAttributes[0] != '' && baseAttributes[1] == '') {
            insertValueToDict(dict, '1', parseFloat(baseAttributes[0])*negativePositiveMultiplier);
        }
        else {
            if (baseAttributes.length == 1) {
                insertValueToDict(dict, '0', parseFloat(baseAttributes) * negativePositiveMultiplier);
            } else {
                insertValueToDict(dict, baseAttributes[1], parseFloat(baseAttributes[0]) * negativePositiveMultiplier)
            }
        }
    }
    return dict;
}

function sumDicts(dict1, dict2) {
    let combinedDicts = {}
    for (const key in dict1) {
        if (isNaN(dict1[key])) { throw new Error('Wrong expression, NaN in dictonary') }
        if (key == 'undefined' || key == '-') { throw new Error('Wrong exponent'); }
        else if (dict2[key]) {
            combinedDicts[key] = dict2[key] + dict1[key];
        }
        else {
            combinedDicts[key] = dict1[key];
        }
    }

    for (const key in dict2) {
        if (isNaN(dict2[key])) { throw new Error('Wrong expression, NaN in dictonary') }
        if (key == 'undefined' || key == '-') { throw new Error('Wrong exponent');}
        else if (!(key in dict1)) {
            combinedDicts[key] = dict2[key];
        }
    }
    let combinedDictsToArray = Object.keys(combinedDicts).map(function (key) {
        return [key, combinedDicts[key]];
    })

    combinedDictsToArray.sort(function (first,second) {
        return second[0] - first[0];
    }).reverse()

    return combinedDictsToArray;
}

function preparePolynomialAsString(combinedPolynomialDicts) {
    let polynomialString = '';
    let sign;
    let baseAttributes;
    for (const index in combinedPolynomialDicts) {
        baseAttributes = combinedPolynomialDicts[index];
        sign = ' + ';
        if (baseAttributes[1] < 0) {
            sign = ' - ';
            baseAttributes[1] *= -1;
        }

        if (baseAttributes[1] == 0) {
            continue;
        }
        else if (baseAttributes[0] == '0') {
            polynomialString = sign + baseAttributes[1] + polynomialString;
        }
        else if (baseAttributes[0] == '1' && baseAttributes[1] != 1) {
            polynomialString = sign + baseAttributes[1] + 'x' + polynomialString;
        }
        else if (baseAttributes[0] == '1' && baseAttributes[1] == 1) {
                polynomialString = sign + 'x' + polynomialString;
        }
        else if (baseAttributes[1] == 1 && parseFloat(baseAttributes[0]) != 1) {
            polynomialString = sign + 'x<sup>' + baseAttributes[0] + '</sup>' + polynomialString;
        }
        else {
            polynomialString =  sign + baseAttributes[1] + 'x' + '<sup>'+ baseAttributes[0] +'</sup>' + polynomialString;
        }
    }

    if (polynomialString[1] == '+') {
        polynomialString = polynomialString.slice(3,);
    }
    return polynomialString;
}

module.exports = { calculatePolynomial}