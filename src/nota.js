const alunos = [
    {nome: 'Luis', nota: 8},
    {nome: 'Juca', nota: 4},
    {nome: 'Karina', nota: 10},
    {nome: 'Rosamaria', nota: 9},
    {nome: 'Rebeca', nota: 6},
    {nome: 'Emanuela', nota: 5},
    {nome: 'Marcelo', nota: 4},
    {nome: 'Percival', nota: 6},
    {nome: 'Gabriela', nota: 7}
];

const filtrarAprovados = alunos.filter(function(item) {
    return item.nota >= 6;
})

console.log(filtrarAprovados);
