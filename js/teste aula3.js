
let area = prompt('Deseja seguir para área de Front-End ou seguir para a área de Back-End');

let language = '';

let sequencia = '';

if(area === 'Front-End'){
  language = prompt('se quer aprender React ou aprender Vue.');

} else if (area === 'Back-End'){
  language = prompt('Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.');
    
} else {
  alert('Você digitou algo errado');

}


let carreira = prompt('Deseja seguir se especializando na área escolhida? DIGITE 1 ou seguir se desenvolvendo para se tornar Fullstack - DIGITE 2');


if(carreira == 1) {
  alert('Excelente, procure sempre melhorar!');

} else if(carreira === 2) {
  alert('Excelente, procure estudar outras linguagens, estude bastante e BOA SORTE');

} else {
  alert('VOCÊ DIGITOU ALGO ERRADO');
}

let tec = prompt('Quais são as tecnologias nas quais a você gostaria de se especializar ou de conhecer');

while(tec === 'sim'){
  let novaTec = prompt('Qual?');
  alert(`${novaTec} é realmente uma tecnologia muito legal!`);
  tec = prompt('Tem mais alguma tecnologia que deseja aprender?Digite "sim" se estiver mais alguma'); 
}  

  






