const activeLink = document.querySelectorAll('ul li a')
const rightSection = document.querySelector('.rightSection')

activeLink.forEach((link) => {
    link.addEventListener('click', () => link.classList.toggle('active'))
})

const dataArray = [
    {
        svg:`<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M35.4837 8.67252C37.0945 4.31943 43.2514 4.31944 44.8622 8.67253L51.3058 26.0861C51.8122 27.4547 52.8913 28.5337 54.2599 29.0401L71.6734 35.4837C76.0265 37.0945 76.0265 43.2514 71.6734 44.8622L54.2599 51.3058C52.8913 51.8122 51.8122 52.8913 51.3058 54.2599L44.8622 71.6734C43.2514 76.0265 37.0945 76.0265 35.4837 71.6734L29.0401 54.2599C28.5337 52.8913 27.4546 51.8122 26.0861 51.3058L8.67252 44.8622C4.31943 43.2514 4.31944 37.0945 8.67253 35.4837L26.0861 29.0401C27.4547 28.5337 28.5337 27.4546 29.0401 26.0861L35.4837 8.67252Z" stroke="#FFAA4C" stroke-width="10"/>
    </svg>`,
        t1: 'Contactless',
        t2: 'Budss uses near field communication (NFC) for making contactless payments.'
    },
    {
        svg: `<svg width="54" height="85" viewBox="0 0 54 85" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25.5379 79.4598C-2.86424 69.1294 5.37583 44.6971 28.0364 37.5112C56.3622 28.5288 54.636 64.0225 27.9347 55.1692C-15.4168 40.7953 14.1064 6.77878 36.9658 5.69891" stroke="#A64CED" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`,
        t1: 'Increased Buying Power',
        t2: 'Returning customers spend up to 3X more.'
    },
    {
        svg: `<svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.22705 44.1794L23.0731 5.82373L40.9191 44.1794L58.7651 5.82373L76.6111 44.1794L94.4572 5.82373" stroke="#2FDBBC" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
`,
        t1: 'Analytics & Insights',
        t2: 'Gain a holistic view into your customers’ buying behavior & purchasing patterns. '
    },
    {
        svg: `<svg width="101" height="51" viewBox="0 0 101 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="5.70605" y="5.85059" width="55.8757" height="29.3462" rx="14.6731" stroke="#C1DB2F" stroke-width="10"/>
    <rect x="37.0891" y="22.9663" width="55.8757" height="29.3462" rx="14.6731" transform="rotate(-22.1921 37.0891 22.9663)" stroke="#C1DB2F" stroke-width="10"/>
    </svg>
`,
        t1: 'Fraud Protection',
        t2: 'Budss handles all payments with a fraud prevention algorithm to flag high risk purchases & a user set PIN code to keep payment info secure. '
    }  
]


dataArray.forEach((data) => {
    rightSection.innerHTML += `
    <div class="dataBlocks">
        ${data['svg']}
        <p class="textHeader">${data['t1']}</p>
        <p>${data['t2']}</p>
    </div>
`
})



// /////////////////////////////animated part////////////////////////////////////////////////\


window.addEventListener("scroll", () => {
    const currentY = window.scrollY;   
    const animated = document.querySelectorAll('.animated')
        
    if (window.innerWidth > 994) {
        currentY > 1000 ? animated[0].classList.add('isAnim1') : animated[0].classList.remove('isAnim1')
        currentY > 1200 ? animated[1].classList.add('isAnim2') : animated[1].classList.remove('isAnim2')
        currentY > 1400 ? animated[2].classList.add('isAnim1') : animated[2].classList.remove('isAnim1')
    } else if (window.innerWidth <= 994 && window.innerWidth > 768) {
        currentY > 800 ? animated[0].classList.add('isAnim1') : animated[0].classList.remove('isAnim1')
        currentY > 900 ? animated[1].classList.add('isAnim2') : animated[1].classList.remove('isAnim2')
        currentY > 1000 ? animated[2].classList.add('isAnim1') : animated[2].classList.remove('isAnim1')
    }
    else if (window.innerWidth <= 768 ) {
        currentY > 600 ? animated[0].classList.add('isAnim1') : animated[0].classList.remove('isAnim1')
        currentY > 675 ? animated[1].classList.add('isAnim2') : animated[1].classList.remove('isAnim2')
        currentY > 750 ? animated[2].classList.add('isAnim1') : animated[2].classList.remove('isAnim1')
    }
});

const closeCookie = () => {
    const cookie = document.querySelector('.cookieBlock')

    cookie.classList.add('cookieDone')
}

const closeForm = () => {
    const form = document.querySelector('.form_block')
    const overlay = document.querySelector('.overlay')

    form.classList.add('form_closed')
    overlay.classList.add('form_closed')
}

const openForm = () => {
    const form = document.querySelector('.form_block')
    const overlay = document.querySelector('.overlay')

    form.classList.remove('form_closed')
    overlay.classList.remove('form_closed')
}


const formSubmit = (e) => {
    e.preventDefault()

    let correctInput = true;

    for(let i = 0; i < 3; i++) {
        if(e.target[i].value === '') {
            correctInput = false
            const mainText = document.querySelector('.form_incor_mainText')

            e.target[i].classList.add('incorrect_input')
            e.target[i].nextElementSibling.classList.add('incorrect_input')

            mainText.classList.add('incorrect_input')
        } 
    }

    if(correctInput) {
        const isCorrectBlock = document.querySelector('.filled_form_block')

        e.target.style.display = 'none'
        isCorrectBlock.style.display = 'flex'
    }
}

const correct_input = (e) => {
    e.target.classList.remove('incorrect_input')
    e.target.nextElementSibling.classList.remove('incorrect_input')
}

const openSmallMenu = () => {
    const frontMenu = document.querySelector('.openning_menu')

    frontMenu.style.display = 'flex'

}

const closeSmallMenu = () => {
    const frontMenu = document.querySelector('.openning_menu')

    frontMenu.style.display = 'none'
}