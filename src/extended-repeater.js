module.exports = function repeater(str, options) {
    let result='';
    let separator, additionSeparator, additionRepeatTimes, addition;
    if(str == null) str = 'null'; 
    if(typeof(str) != "string") str.toString();
    if(options.separator === undefined)         separator = '+';
    else separator = options.separator;
    if(options.addition === undefined)          addition = '';
    else addition = options.addition;
    if(options.additionSeparator === undefined) additionSeparator = '';
    else additionSeparator = options.additionSeparator;
    if(options.additionRepeatTimes === undefined) additionRepeatTimes = 1;
    else additionRepeatTimes = options.additionRepeatTimes;
    if(options.repeatTimes === undefined)       return str + addition;
    result = str + (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition + separator;
    result = result.repeat(options.repeatTimes-1) + str + (addition + additionSeparator).repeat(additionRepeatTimes-1) + addition;
    return result;







    if(typeof(options.separator) === undefined) ;
    //if(typeof(options.additionSeparator() === undefined) options.additionSeparator() = '|';
    result = str + options.addition() + options.additionSeparator();
    return result;
    //throw 'Not implemented';
    // remove line with error and write your code here

};
  