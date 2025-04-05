let chamada = ['Isabela', 'Benjamim', 'Anne']
function inserirAluno(pos,aluno,renAluno){
    chamada.splice(pos,0,aluno)
    let pos1 = chamada.indexOf(renAluno)
    if(pos1 != -1){
    chamada.splice(pos1,1)
    }
    //console.log(chamada)
}
/*inserirAluno(0,'Alana', 'Benjamim')
inserirAluno(1,'Ana', 'Anne')*/