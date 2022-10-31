// function buttonClick() {
// 	var input = document.getElementById('input');
// 	input.value = 'Забайчен';
// }

// function buttonClick() {
// 	var input = document.getElementById('input');
// 	alert(input.value);
// }

// function buttonClick() {
// 	var input = document.getElementById('input');
// 	var number = Number(input.value);
// 	var square = number*number;
// 	alert(square);
// }


// function buttonClick() {
// 	var input1 = document.getElementById('input1');
// 	var input2 = document.getElementById('input2');
// 	var input1Value = input1.value;
// 	var input2Value = input2.value;
// 	input1.value = input2Value;
// 	input2.value = input1Value;
// }

// function buttonClick(elem) {
// 	elem.value = 'Новый текст кнопки';
// }


// function buttonClick() {
// 	document.getElementById('input').style.color = 'red';
// }




// function button1Click() {
// 	var input = document.getElementById('input');
// 	input.disabled = true;
// }
// function button2Click() {
// 	var input = document.getElementById('input');
// 	input.disabled = false;
// }


// function onclick() {
//     var input = document.getElementById('input');
//     input.value = 'Привет!';
//     }


// function onmouseover() {
//     var input = document.getElementById('input');
//     input.value = 'Привет!';
//     }


// function ondblckick() {
//         var input = document.getElementById('input');
//         input.value = 'Привет!';
//         }

// function onmouseout() {
//             var input = document.getElementById('input');
//             input.value = 'Привет!';
//             }


// function buttonClick() {
// 	var input = document.getElementById('input');
// 	alert(input.value);
// }

// function buttonClick() {
// 	var input = document.getElementById('input');
// 	input.value = 'Ой, а я поменял текст';
// }

// function go() {
// 	var test = document.getElementById('test');
// 	test.src = './assets/img/img2.jpg'
// }

// function go(elem) {
//     elem.value = 'Ой, а я поменял текст';
// }

// function go(elem) {
//     elem.value = 'Ой, на меня больше не нажать';
//     elem.disabled = true;
// }


// function over() {
// 	var test = document.getElementById('test');
// 	test.src = './assets/img/img2.jpg'
// }
// function out() {
// 	var test = document.getElementById('test');
// 	test.src = './assets/img/img1.png'
// }

// function hide() {
// 	var test = document.getElementById('test');
// 	test.style = 'display: none'
// }
// function show() {
// 	var test = document.getElementById('test');
// 	test.style = 'display: inline-block'
// }


//     function go() {
//     test.style="width: 300px; height: 50px; color: red; border-radius: 10px;"
//     test.value = 'Ой css и текст поменялись';
// }



// function block(){
//     var block = document.getElementById('block');
//     var unblock = document.getElementById('unblock');
//     block.value = 'О, теперь на меня больше не нажать!';
//     block.disabled = true;
//     unblock.style.display = 'block';
// }
// function unblock(){
//     var block = document.getElementById('block');
//     var unblock = document.getElementById('unblock');
//     block.value = 'О, на меня снова можно нажимать!';
//     block.disabled = false;
//     unblock.style.display = 'none';
// }


// function go(elem) {
//     elem.value = parseInt(elem.value) + 1;
// }

// function go(){
//     test.value = "Теперь я плаваю справа"
//     test.style = "float: right;"
// }


// function go(){
//     elem = document.getElementById('test');
//     elem.value = 'Мои css классы: '+elem.className;
// }


// function buttonClick() {
// 	var input1 = document.getElementById('input1');
// 	var input2 = document.getElementById('input2');
// 	var input1Value = input1.value;
// 	var input2Value = input2.value;
// 	input1.value = input2Value;
// 	input2.value = input1Value;
// }


// function go(){
//     var test = document.getElementById('test');
//     var value = test.value;
//     var result = document.getElementById('result');
//     result.value =  value*value;
// }


// function go(){
//     var test = document.getElementById('test');
//     var value = test.value;
//     if(!isNaN(value)){
//         var result = document.getElementById('result');
//         result.value =  value*value;
//     } else {
//         alert('Введено не число!')
//     }
// }


// function go(elem){
//     elem.disabled = true;
//     elem.style.cursor = 'not-allowed';
// }


function add(text){
    var input = document.getElementById('input');
    input.value = input.value + text;
}
