// Bài tập 1
document.getElementById('selection').onclick = function () {
    var so1 = document.getElementById('iSo1').value;
    var so2 = document.getElementById('iSo2').value;
    var so3 = document.getElementById('iSo3').value;

    if (so1 < so2) {
        if (so2 < so3) {
            document.getElementById('result').innerHTML = so1 + " " + so2 + " " + so3;
        } else {
            document.getElementById('result').innerHTML = so1 + " " + so3 + " " + so2;
        }
    } else {
        if (so3 > so1) {
            document.getElementById('result').innerHTML = so2 + " " + so1 + " " + so3;
        } else {
            if (so3 > so2) {
                document.getElementById('result').innerHTML = so2 + " " + so3 + " " + so1;
            } else {
                document.getElementById('result').innerHTML = so3 + " " + so2 + " " + so1;
            }
        }
    }
}

// Bài tập 2
document.getElementById('hello').onclick = function () {
    var x = document.getElementById('people').value;
    if (x == 'B') {
        document.getElementById('hi').innerHTML = 'bố ạ';
    } else if (x == 'M') {
        document.getElementById('hi').innerHTML = 'mẹ ạ';
    } else if (x == 'A') {
        document.getElementById('hi').innerHTML = 'anh trai ạ';
    } else {
        document.getElementById('hi').innerHTML = 'em gái ạ';
    }
}


// Bài tập 3
document.getElementById('chanle').onclick = function () {
    var so1 = Number(document.getElementById('number1').value);
    var so2 = Number(document.getElementById('number2').value);
    var so3 = Number(document.getElementById('number3').value);

    var demle = 0;
    var demchan = 0;

    if (so1 % 2 == 0) {
        demchan++;
    } else {
        demle++;
    }
    if (so2 % 2 == 0) {
        demchan++;
    } else {
        demle++;
    }
    if (so3 % 2 == 0) {
        demchan++;
    } else {
        demle++;
    }
    document.getElementById('hienthi').innerHTML = 'số lẻ là: ' + demle + ' và số chẳn là: ' + demchan;
}



// bài tập 4

document.getElementById('hinhdang').onclick = function () {
    var a = document.getElementById('canh1').value;
    var b = document.getElementById('canh2').value;
    var c = document.getElementById('canh3').value;

    if (a === b && b === c) {
        document.getElementById('tamgiac').innerHTML = "tam giác đều";
    } else if (a === b || a === c || b === c) {
        document.getElementById('tamgiac').innerHTML = "tam giác cân";
    } else if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
        document.getElementById('tamgiac').innerHTML = "tam giác vuông";    
    }else if(((a * a + b * b == c * c) && (a == b)) ||
    ((a * a + c * c == b * b) && (a == c)) ||
    ((b * b + c * c == a * a) && (b == c))){
        document.getElementById('tamgiac').innerHTML = "tam giác vuông cân"; 
    } else {
        document.getElementById('tamgiac').innerHTML = "tam giác thường";
    }
}