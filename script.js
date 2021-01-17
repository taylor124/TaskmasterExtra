var currentDayEL = document.getElementById('currentDay');

setInterval(function () {
    currentDayEL.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);

//for loop creates the span, textarea and save button 9 times
for (var i = 0; i < 9; i++) {
    var timeBlockEL = document.getElementById(''+ (i + 9))
    timeBlockEL.childNodes[5].addEventListener('click', function (event) {
        console.log(event.target.parentElement.parentElement.id)
        localStorage.setItem(event.target.parentElement.parentElement.id,
            event.target.parentElement.parentElement.childNodes[3].value)
    });

    /*const timeBlockclass = timeBlocktextArea.getAttribute('class')
    console.log(timeBlockclass)*/

    var localStoragefunction = localStorage.getItem(i+9)
    console.log(localStoragefunction)
    timeBlockEL.childNodes[3].textContent = localStoragefunction


    if (moment().hours() === (i+9)){
        timeBlockEL.childNodes[3].classList.add('present')
    }
    else if (moment().hours() > (i+9)){
        timeBlockEL.childNodes[3].classList.add('past')
    }
    else {
        timeBlockEL.childNodes[3].classList.add('future')
    }
    //document.querySelector('div').classList.add()

}
console.log(localStorage)