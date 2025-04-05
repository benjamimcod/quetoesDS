let eventos = ['7:00 - Acordar', '8:00 - Ir trabalhar', '17:00 - Ir treinar']
function inserirEvento(pos,even){
    eventos.splice(pos,0,even)
    //console.log(eventos)
}
function removeEvento(even){
    pos = eventos.indexOf(even)
    if(pos != -1){
    eventos.splice(pos,1)
    }
    //console.log(eventos)
}
/*inserirEvento(1,'7:30 - Sair de casa')
removeEvento('8:00 - Ir trabalhar')*/
