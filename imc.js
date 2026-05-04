
const calcular = document.getElementById ('calcular.num')


function imc () {
    const nome = document.getElementById ('nome.txt');
    const altura = document.getElementById ('altura.num').value;
    const peso = document.getElementById ('peso.num').value;
    const result = document.getElementById ('result.num');
    if (nome.value === '' || altura === '' || peso === ''){
        window.alert('prencha todos os campos')
    } else {
         const valorIMC= (peso / (altura * altura)).toFixed(2);
         
         let classifi = '';
         if(valorIMC < 18.5){
            classifi = 'abaixo do peso'
        }else if (valorIMC < 25){
            classifi = ' no peso ideal'
        }else if (valorIMC < 30 ){
            classifi = ' na pré-obesidade'
        }else if (valorIMC < 35){
            classifi = 'na obesidade grau 1'
        }else if (valorIMC < 40){
            classifi = 'obesidade grau 2'
        }else if (valorIMC >= 40){
            classifi = 'na obesidade mórbida'
        }


        result.textContent = `${nome.value}, seu IMC é ${valorIMC} e você está ${classifi}`

    }
    

    
   
}

calcular.addEventListener('click', imc); //avisa o botão para que ele "escute"(listener) o evento que está enter parenteses (neste caso é o: o botão vai fazer o clik e vai chamar a função IMC)
