let nomes = ["Alana", "Constantino", "Maristelaine", "Isabela"]
function maior10(){
  return nomes.find(nome => nome.length > 10)
}
console.log(maior10())