function createGame(player1, hour, player2) {
    return `
    <li> 
           <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
           <strong>${hour}</strong>
           <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
        </li>

    `
}

let delay = -0.4;
function createCard(date, day,games) {
    delay = delay + 0.4;
    return `
    <div class="card" style="animation-delay: ${delay}s">
    <h2>${date} <span>${day}</span></h2>
    <ul> 
       ${games} 
    </ul>
</div>
 `
}


document.querySelector("#app").innerHTML = `
<header>    
    <img src="./assets/logo.svg" alt="logo da NLW">
</header>
<main id="cards"> 
    ${createCard('24/11', 'Quinta',
    createGame('brazil', '16:00', 'serbia')
    )}
    ${createCard('28/11', 'Segunda',
    createGame('brazil', '13:00', 'switzerland')
    )}
    ${createCard('02/12', 'Sexta',
    createGame('brazil', '16:00', 'cameroon')
    )}
    ${createCard('05/12', 'Segunda',
    createGame('brazil', '16:00', 'southkorea')
    )}
    ${createCard('09/12', 'Sexta',
    createGame('brazil', '12:00', 'croatia')
    )}

</main>
`