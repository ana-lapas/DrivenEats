let hasClicked1 = false;
let hasClicked2 = false;
let hasClicked3 = false;
let comidaPedida;
let comidaPedida1;
let bebidaPedida;
let sobremesaPedida;

function selecionarPrato(comidaSelecionada) {
    const comidaSelected = document.querySelector('.barraPedidos1 .bordaVerde');
    comidaSelecionada.classList.add('bordaVerde');
    const check = document.querySelector('.barraPedidos1 .bordaVerde .ion-icon');
    check.classList.remove('escondido');
    
    if (comidaSelected !== null) {
        comidaSelected.classList.remove('bordaVerde'); 
        const checkOn = document.querySelector('.barraPedidos1 .bordaVerde .ion-icon');
        checkOn.classList.toggle('escondido');
        check.classList.toggle('escondido');
    }
    
    hasClicked1 = true;
    pedidoConcluido()
}

function selecionarBebida(bebidaSelecionada){
    const bebidaSelected = document.querySelector('.barraPedidos2 .bordaVerde');
    bebidaSelecionada.classList.add('bordaVerde');
    const check = document.querySelector('.barraPedidos2 .bordaVerde .ion-icon');
    check.classList.remove('escondido');
    if (bebidaSelected !== null) {
        bebidaSelected.classList.remove('bordaVerde');
        const checkOn = document.querySelector('.barraPedidos2 .bordaVerde .ion-icon');
        checkOn.classList.toggle('escondido');
        check.classList.toggle('escondido');
    }

    bebidaSelecionada.classList.add('bordaVerde');
    hasClicked2 = true;
    pedidoConcluido()
}

function selecionarSobremesa(sobremesaSelecionada){
    const sobremesaSelected = document.querySelector('.barraPedidos3 .bordaVerde');
    sobremesaSelecionada.classList.add('bordaVerde');
    const check = document.querySelector('.barraPedidos3 .bordaVerde .ion-icon');
    check.classList.remove('escondido');
    if (sobremesaSelected !== null) {
        sobremesaSelected.classList.remove('bordaVerde'); 
        const checkOn = document.querySelector('.barraPedidos3 .bordaVerde .ion-icon');
        checkOn.classList.toggle('escondido');
        check.classList.toggle('escondido');
    }

    sobremesaSelecionada.classList.add('bordaVerde');
    hasClicked3 = true;
    pedidoConcluido()
}

let pcomidaPedida1;
let pbebidaPedida;
let psobremesaPedida;
let valor;

function pedidoConcluido(){
    if (hasClicked1 !== false && hasClicked2 !== false && hasClicked3 !== false) {
        const pedidoFeito = document.querySelector('.pedidoFinal .textoBotao');
        pedidoFeito.innerHTML = 'Fechar pedido';
        pedidoFeito.classList.add('pedidoCompleto');
        }
}

let valorPrato;
let valorBebida;
let valorSobremesa;
let mensagem;
let mensagemPronta;
let mensagemFim;
function pedidoSelecionado() {
    comidaPedida = document.getElementsByClassName('bordaVerde');
        comidaPedida1 = comidaPedida[0].querySelector('.nomePrato').innerHTML;
        bebidaPedida = comidaPedida[1].querySelector('.nomeBebida').innerHTML;
        sobremesaPedida = comidaPedida[2].querySelector('.nomeSobremesa').innerHTML;
        
        pcomidaPedida1 = comidaPedida[0].querySelector('.preco').innerHTML;
        valorPrato = pcomidaPedida1.substring(2);
        valorPrato = Number(valorPrato);
        
        pbebidaPedida = comidaPedida[1].querySelector('.preco').innerHTML;
        valorBebida = pbebidaPedida.substring(2);
        valorBebida = Number(valorBebida);      

        psobremesaPedida = comidaPedida[2].querySelector('.preco').innerHTML;
        valorSobremesa = psobremesaPedida.substring(2);
        valorSobremesa = Number(valorSobremesa);
       
        valor = valorPrato + valorBebida + valorSobremesa;       
        mensagem = `Olá, gostaria de fazer o pedido:
- Prato: ${comidaPedida1}
- Bebida: ${bebidaPedida}
- Sobremesa: ${sobremesaPedida} 
Total: R$ ${valor.toFixed(2)}`;
        console.log(mensagem);    
        mensagemPronta = encodeURIComponent(mensagem);
        console.log(mensagemPronta);      
        
}

function linkPronto(){
    mensagemFim = `https://wa.me/5567993357065?text=${mensagemPronta}`;
    console.log(mensagemFim);
    window.open(mensagemFim);
}