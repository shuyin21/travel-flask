const data = document.querySelectorAll('.data-row')
const selectWrapper = document.getElementById('select-wrapper');
let countrysfrom = [];
let countrysto = [];
let gender = [];
let date = []
data.forEach(x => {
    countrysfrom.push(x.childNodes[5].innerHTML)
    countrysto.push(x.childNodes[7].innerHTML)
    gender.push(x.childNodes[3].innerHTML)
    date.push(x.childNodes[9].innerHTML)
})
// data.forEach(x => {
//     if (x.childNodes[5].innerHTML == 'China') {
//         x.style.display = ''
//     }
//     else {
//         x.style.display = 'none'
//     }

// })



// 2: "Filter"
let newCountrysFrom = countrysfrom.filter((item, index) => countrysfrom.indexOf(item) === index).sort()
let newCountrysto = countrysto.filter((item, index) => countrysto.indexOf(item) === index).sort()
let newGender = gender.filter((item, index) => gender.indexOf(item) === index).sort()
let newDate = date.filter((item, index) => date.indexOf(item) === index).sort()
console.log(newCountrysFrom)
console.log(newCountrysto)
console.log(newGender)
console.log(newDate)

function countryFromHandler() {
    selectWrapper.innerHTML = '';
    newCountrysFrom.forEach(x => {
        let btn = document.createElement('button');
        btn.innerText = x;
        btn.classList.add('tvs-btn')
        selectWrapper.appendChild(btn);
        btn.addEventListener('click', () => {
            btnFunc(5, x)
        })
    })
}


function countryToHandler() {
    selectWrapper.innerHTML = '';
    notShow();
    newCountrysto.forEach(x => {
        let btn = document.createElement('button');
        btn.innerText = x;
        btn.classList.add('tvs-btn')
        selectWrapper.appendChild(btn);
        btn.addEventListener('click', () => {
            btnFunc(7, x)
        })
    })
}

function genderHandler() {
    notShow();
    selectWrapper.innerHTML = '';
    newGender.forEach(x => {
        let btn = document.createElement('button');
        btn.innerText = x;
        btn.classList.add('tvs-btn')
        selectWrapper.appendChild(btn);
        btn.addEventListener('click', () => {
            btnFunc(3, x)
        })
    })
}

function dateHandler() {
    notShow();
    selectWrapper.innerHTML = '';
    newDate.forEach(x => {
        let btn = document.createElement('button');
        btn.innerText = x;
        btn.classList.add('tvs-btn')
        selectWrapper.appendChild(btn);
        btn.addEventListener('click', () => {
            btnFunc(9, x)
        })
    })
}
function btnFunc(num, y) {
    console.log('working');
    data.forEach(x => {
        console.log(y, x.childNodes[num].innerHTML);
        if (x.childNodes[num].innerHTML == y) {
            selectWrapper.innerHTML = '';
            x.classList.remove('display-none')
            x.classList.add('tvsDataflex')
        }
        else {
            x.classList.add('display-none');
            x.classList.remove('tvsDataflex')
        }

    })
}
function showAll() {
    selectWrapper.innerHTML = '';
    data.forEach(x => {

        x.classList.remove('display-none')
        x.classList.add('tvsDataflex')
    })
}

function notShow() {
    selectWrapper.innerHTML = '';
    data.forEach(x => {
        x.classList.add('display-none')
        x.classList.remove('tvsDataflex')
    })
}