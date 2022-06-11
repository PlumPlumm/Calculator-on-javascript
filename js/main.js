const inputUser = document.querySelector('.inputUser')

console.log(inputUser);
let example = '';


function press(num){
    example += num;
    inputUser.value = example;
}

function reset(){
    example = '';
    inputUser.value = 0;
}

function clean(){
    example = example.substring(0, example.length-1);
    inputUser.value = example;
    console.log(inputUser.value)
    
    if(inputUser.value == ''){
        inputUser.value = 0
    }
}

function divibe(){

}

function equal(){
    if(eval(example)== undefined){
        inputUser.value = 0;
    } else{
        inputUser.value = eval(example)
    }
    example = '';
}


