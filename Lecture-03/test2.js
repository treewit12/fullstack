let value1 = ['Apple',1,false];
let value2 = ['Fries',2,true,'Apple'];
let value3 = ['Mars',9,'Apple'];
for (let val of value1) {
    for (let val2 of value2) {
        for (let val3 of value3) {
            if (val === val2 && val === val3) {
                console.log(`Common value is: ${val}`);
            }
        }
    }   

}