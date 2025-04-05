let listaEspera = ['Jogador1', 'Jogador2']
function novaPartida(){
    if (listaEspera.length < 3) {
        listaEspera.unshift('novoJogador')
    }else{
         listaEspera.shift()
    }
    //console.log(listaEspera)
}
/*novaPartida('Jogador3')
novaPartida('Jogador4')
novaPartida('Jogador5')
novaPartida('Jogador6')*/