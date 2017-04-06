function myFunction(){
    console.log('Function was called');
}

var myString = 'It is variable';

module.exports.myFunction = myFunction;
module.exports.myString = myString;