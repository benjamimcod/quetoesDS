let recomendacoes = ['Video1', 'Video2', 'Video3', 'Video4']
let remocoes = 0
 function removerVideo(){
    recomendacoes.pop()
    remocoes++
    if(remocoes === 3){
        recomendacoes.push('NovoVideo')
        remocoes = 0
    }
    //console.log('recomendações ', recomendacoes)
 }
/*
 removerVideo()
 removerVideo()
 removerVideo()*/