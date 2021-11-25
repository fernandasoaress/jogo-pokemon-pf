//Fase 1

function entrarNaFloresta() {
  var floresta = prompt('Entrar na floresta? Sim ou Não?')
  if (floresta.toLowerCase() == 'sim') {
    return (location = './fase2.html')
  } else if (floresta.toLowerCase() == 'não') {
    return (location = './pagina-inicial.html')
  }
}

//fase 3
function seguirPokemon() {
  var pokemon = prompt('Seguir para o norte? Sim ou Não?')
  if (pokemon.toLowerCase() == 'sim') {
    return (location = './fase4.html')
  } else if (pokemon.toLowerCase() == 'não') {
    return (location = './pagina-inicial.html')
  }
}

//fase 4
function equipeRocket() {
  var rocket = prompt('Enfrentar a Equipe Rocket? Sim ou Não?')
  if (rocket.toLowerCase() == 'sim') {
    return (location = './fase-final.html')
  } else if (rocket.toLowerCase() == 'não') {
    return (location = './pagina-inicial.html')
  }
}

//ultima-batalha

function ultimaBatalha() {
  var charmander = prompt('Atacar a equipe Rocket com lança chamas? Sim ou Não')
  if (charmander.toLowerCase() == 'sim') {
    return (location = './fim-do-jogo.html')
  } else if (charmander.toLowerCase() == 'não') {
    return (location = './pagina-inicial.html')
  }
}

//ultima-batalha-2
function ultimaBatalha2() {
  var onix = prompt('Atacar a equipe Rocket com Hyper bean? Sim ou Não')
  if (onix.toLowerCase() == 'sim') {
    return (location = './fim-do-jogo.html')
  } else if (onix.toLowerCase() == 'não') {
    return (location = './pagina-inicial.html')
  }
}

//ultima-batalha-3
function ultimaBatalha3() {
  var psyduck = prompt('Atacar a equipe Rocket com Jato DÁgua? Sim ou Não')
  if (psyduck.toLowerCase() == 'sim') {
    return (location = './game-over.html')
  } else if (psyduck.toLowerCase() == 'não') {
    return (location = './pagina-inicial.html')
  }
}
