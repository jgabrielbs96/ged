module.exports = {
    userA: {
        matricula: 'F048755',
        senha: 'bnb@2024',
        dossies: [
            { numero: '326072752', folder: '1', acesso: true },
            { numero: '326072754', folder: '2', acesso: true },
            { numero: '326072756', folder: '3', acesso: true },
            { numero: '326072758', folder: '4', acesso: true }
        ]
    },
    userB: {
        matricula: 'C009585',
        senha: 'bnb@2024',
        dossies: [
            { numero: '326072752', folder: '1', acesso: true },
            { numero: '326072754', folder: '2', acesso: true },
            { numero: '326072756', folder: '3', acesso: false },
            { numero: '326072758', folder: '4', acesso: false }
        ]
    },
    userC: {
        matricula: 'J000709',
        senha: 'bnb@2024',
        dossies: [
            { numero: '326072752', folder: '1', acesso: false },
            { numero: '326072754', folder: '2', acesso: false },
            { numero: '326072756', folder: '3', acesso: true },
            { numero: '326072758', folder: '4', acesso: false }
        ]
    }
}
