function calculate(a){
    return function(b){
        return function(c){
            return a+b+c;
        };
    };
}

console.log(calculate(5)(7)(11));