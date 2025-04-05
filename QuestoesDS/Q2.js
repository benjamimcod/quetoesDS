let clientes = ['Isabela', 'Benjamim', 'Anne']
let limite = 4
function adicionarCliente(cliente){
    clientes.unshift(cliente)
    if(clientes.length > limite){
        clientes.pop()
    }
    //console.log(clientes)
}
/*adicionarCliente('Alana')
adicionarCliente('Ana')*/
