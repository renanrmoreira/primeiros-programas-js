var valorS1 = 0
var valorS2 = 0
var valorS3 = 0
var valorTS
    function confirmarS(){
    var carS = 1
    var salgado = Number(document.getElementById('salgados').value)
    
   switch (salgado) {
       case 1:  
        document.getElementById('carrinhoS').innerText += ` Coxinha caribenha Qt: ${carS++}`
        document.getElementById('MostrarS').innerText = ' Coxinha caribenha'
        valorS1 = 3.50
          break;
       case 2: 
        document.getElementById('carrinhoS').innerText += ` Croassaint Qt: ${carS++}`
        document.getElementById('MostrarS').innerText = ' Croassaint'
        valorS2 = 6
           break;
       case 3:
        document.getElementById('carrinhoS').innerText += ` Mini pizza Qt: ${carS++}`
        document.getElementById('MostrarS').innerText = ' Mini pizza'
        valorS3 = 4
          break;
   
       default: document.getElementById('MostrarS').innerText= 'Usuário não sabe ler'
           break;
        }
        valorTS = valorS1 + valorS2 + valorS3
        document.getElementById('valorTs').innerText= valorTS
    
    }
    var valorL1 = 0
    var valorL2 = 0
    var valorL3 = 0
    var valorTL

function confirmarL(){
    var carL = 1
    var lanche = Number(document.getElementById('lanches').value)

    switch (lanche) {
        case 1: 
        document.getElementById('carrinhoL').innerText += ` Sanduíche de presunto Qt: ${carL++}`
        document.getElementById('mostrarL').innerText = ' Sanduíche de presunto'
        valorL1 = 5
            break;
        case 2: 
        document.getElementById('carrinhoL').innerText += ` Hot dog Qt: ${carL++}`
        document.getElementById('mostrarL').innerText = ' Hot dog'
        valorL2 = 6 
            break;
        case 3:
        document.getElementById('carrinhoL').innerText += ` X-filé Qt: ${carL++}`
        document.getElementById('mostrarL').innerText = ' X-filé'
        valorL3 = 12 
            break; 
    
        default: document.getElementById('MostrarL').innerText= 'Usuário não sabe ler'
            break;
    }
    valorTL = valorL1 + valorL2 + valorL3
    document.getElementById('valorTl').innerText= valorTL
}
    var valorB1 = 0
    var valorB2 = 0
    var valorB3 = 0
    var valorTB

function confirmarB(){
    var bebida = Number(document.getElementById('bebidas').value)
    var carB = 1
    
    switch (bebida) {
        case 1: 
        document.getElementById('carrinhoB').innerText += ` Suco de laranja Qt: ${carB++}`
        document.getElementById('MostrarB').innerText = ' Suco de laranja'
        valorB1 = 2.50
            break;
        case 2: 
        document.getElementById('carrinhoB').innerText += ` Suco de acerola Qt: ${carB++}`
        document.getElementById('MostrarB').innerText = ' Suco de acerola '
        valorB2 = 2 
            break;
        case 3:
        document.getElementById('carrinhoB').innerText += ` Suco de abacaxi Qt: ${carB++}`
        document.getElementById('MostrarB').innerText = 'Suco de abacaxi '
        valorB3 = 3
            break;  
    
        default: document.getElementById('MostrarB').innerText= 'Usuário não sabe ler'
            break;    
        }
        valorTB = valorB1 + valorB2 + valorB3
        document.getElementById('valorTb').innerText= valorTB
    
}
var valorD1 = 0
var valorD2 = 0
var valorD3 = 0
var valorTD
var valorTF

    function confirmarD(){
    var doce = Number(document.getElementById('doces').value)
    var carD = 1
    
    switch (doce) {
        case 1:
            document.getElementById('carrinhoD').innerText += ` Brigadeiro Qt: ${carD++}`
            document.getElementById('MostrarD').innerText = ' Brigadeiro'
            valorD1 = 1
            break;
        case 2: 
            document.getElementById('carrinhoD').innerText += ` Casadinho Qt: ${carD++}`
            document.getElementById('MostrarD').innerText = ' Casadinho'
            valorD2 = 2
            break;
        case 3: 
            document.getElementById('carrinhoD').innerText += ` Mousse de limão Qt: ${carD++}`
            document.getElementById('MostrarD').innerText = ' Mousse de limão'
            valorD3 = 5    
            break;

        default: document.getElementById('MostrarD').innerText= 'Usuário não sabe ler'
            break;
    }
        valorTD = valorD1 + valorD2 + valorD3
        document.getElementById('valorTd').innerText= valorTD

        
        valorTF = valorTS + valorTL + valorTB + valorTD
        document.getElementById('valorTf').innerText = valorTF
    }
