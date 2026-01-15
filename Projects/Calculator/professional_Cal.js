let str = "12*3+43/54-4";
console.log(str);
let newNum = [];
let newOp = [];
let temp = "";

//Step1
//  Extract numbers and operators
for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
        temp += str[i];
    }
    else {
        newNum.push(Number(temp));
        temp = "";
        newOp.push(str[i]);
    }
}
if (temp != "") {
    newNum.push(Number(temp));
}

//Step2
//Solution for / and *
for (let i = 0; i < newOp.length; i++) {
    if (newOp[i] == "/") {
        let result = newNum[i] / newNum[i + 1];
        newNum[i] = result;
        newNum.splice(i + 1, 1);
        newOp.splice(i, 1);
        i--;
    }
    else if (newOp[i] == "*" && newOp != "/") {
        let result = newNum[i] * newNum[i + 1];
        newNum[i] = result;
        newNum.splice(i + 1, 1);
        newOp.splice(i, 1);
        i--;
    }

}

//Solution for + and -
for (let i = 0; i < newOp.length; i++) {
    if (newOp[i] == "+") {
        let result = newNum[i] + newNum[i + 1];
        newNum[i] = result;
        newNum.splice(i + 1, 1);
        newOp.splice(i, 1);
        i--;
    }
    else if (newOp[i] == "-" && newOp != "+") {
        let result = newNum[i] - newNum[i + 1];
        newNum[i] = result;
        newNum.splice(i + 1, 1);
        newOp.splice(i, 1);
        i--;
    }

}
console.log(newNum);

