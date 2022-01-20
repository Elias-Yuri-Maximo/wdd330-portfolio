let calculator = {
    value1:0,
    value2:0,
    
    
    compute() {
        this.value1 = parseInt(prompt('Enter Value 1'));
        this.value2 = parseInt(prompt('Enter Value 2'));
    },
    sum(){
        alert(this.value1 + this.value2);
    },
    multiply(){
        alert(this.value1 * this.value2);
    }
};

calculator.compute();
calculator.sum();
calculator.multiply();