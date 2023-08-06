document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    let decNum = 0;
    let found = false;
    const notAllowed = ['2', '3', '4', '5', '6', '7', '8', '9'];
    let binNum = document.querySelector('input#num').value;
    
    notAllowed.forEach(num => {
        if(binNum.includes(num)){
            found = true;
            document.querySelector('input#num').value = "";
        }
    });

    if(found){
        alert('Please, enter a binary number');
    }else{
        if(binNum.length > 8){
            alert('Please, enter a number with length below 8');
        }else{
            let arr = binNum.split("");
            arr.reverse().forEach((num, i) => {
                decNum += Math.pow(2, i) * num;
            });
            document.querySelector('p').innerText = `Decimal number for ${binNum} is ${decNum}`;
        }
    }
});