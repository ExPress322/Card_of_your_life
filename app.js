console.log('Start script')

const CardInfo = {
    'sex': {
        1: {
            'name' : 'Tarorororo',
            'info': 'IFNIDNFIONIODNF'
        },
        2: {
            'name' : 'SEXUXIBFB',
            'info': 'sjnfgksjnfskj'
        },
        3: {
            'name' : 'GFIDBSFIB1',
            'info': 'gfdgdfgsfgdgfsdgsdfgsdgsf'
        },
        4: {
            'name' : 'DKJSBFK',
            'info': 'sfdagfgasgs'
        },
        5: {
            'name' : 'GIKHDSBI',
            'info': 'fdsfdsgdfs1'
        },
        6: {
            'name' : 'sex card 6',
            'info': 'sex card 6'
        },
        7: {
            'name' : 'sex card 7',
            'info': 'sex card 7'
        },
        8: {
            'name' : 'sex card 8',
            'info': 'sex card 8'
        },
        9: {
            'name' : 'sex card 9',
            'info': 'sex card 9'
        },
        10: {
            'name' : 'sex card 10',
            'info': 'sex card 10'
        }
    }
}


function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

const cards = document.querySelectorAll('.card');
const btn = document.querySelector('.btn');

function ChoiceCard() {
    id = this.id
    if (id === 'sex') {
        this.classList.toggle('choice');
        document.querySelector('#psy').style.display = 'none';
    } else {
        this.classList.toggle('choice');
        document.querySelector('#sex').style.display = 'none';
    }
    sleep(1).then(() => {
        this.style.display = 'none';
    });
    sleep(1).then(() => {
        NewCards('New cards', id)
    });
}

function NewCards(gg, id) {
    console.log(gg + ' ' + id)
    let i = 1
    const container = document.querySelector('.container');
    while (i <= 10){
        const card = document.createElement('div');
        card.id = i
        card.className = 'card-full'
        card.style.border = '3px solid black'
        card.style.height = '150px'
        card.style.width = '100px'
        if (id === 'sex') {
            card.style.backgroundColor = 'rgb(247, 190, 190)'
        } else {
            card.style.backgroundColor = 'rgb(216, 160, 241)'
        }
        card.textContent = 'Карта №' + i
        card.style.display = 'flex'
        card.style.justifyContent = 'center'
        card.style.alignItems =  'center';
        card.style.margin = '10px'
        card.style.cursor = 'pointer'

        

        container.appendChild(card);

        i++
    }

    container.replaceChildren

    const cards = document.querySelectorAll('.card-full');

    cards.forEach(card => card.addEventListener('click', Full));
    
}
  
function Full() {
    id = this.id
    const cardsFull = document.querySelectorAll('.card-full');
    cardsFull.forEach(card => card.style.display = 'none');

    const card = document.createElement('div');
        card.className = 'full-card-info'
        card.style.border = '3px solid black'
        card.style.height = '350px'
        card.style.width = '500px'
        card.textContent = CardInfo.sex[id].info
        card.style.display = 'flex'
        card.style.justifyContent = 'center'
        card.style.alignItems =  'center';
        card.style.backgroundColor = 'rgb(100, 190, 190)'

        const $container = document.querySelector('.container');

        $container.appendChild(card);

}


cards.forEach(card => card.addEventListener('click', ChoiceCard));



// function Check() {
//     console.log('checking...');
// }
// btn.addEventListener('click', Check);