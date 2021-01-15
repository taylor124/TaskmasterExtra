var saved = [];

var currentDayEL = document.getElementById('currentDay');

setInterval(function () {
    currentDayEL.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
}, 1000);


for (var i = 0; i < 9; i++) {
    var timeBlockEL = document.createElement('div')
    var timeBlockspan = document.createElement('span')
    timeBlockspan.textContent = (i + 9) + ':00'
    var timeBlocktextArea = document.createElement('textarea')
    var timeBlockbtn = document.createElement('button')
    timeBlockbtn.id = (i+9)
    timeBlockbtn.classList.add('saveBtn')
    timeBlockbtn.addEventListener('click', function (event) {
        console.log(event.target.parentElement.id)
        localStorage.setItem(event.target.parentElement.id,
            event.target.parentElement.parentElement.children[1].value)
    });

    var timeBlockIcon = document.createElement('i')
    timeBlockIcon.textContent = 'save'
    timeBlockbtn.appendChild(timeBlockIcon)
    timeBlockEL.appendChild(timeBlockspan)
    timeBlockEL.appendChild(timeBlocktextArea)
    timeBlockEL.appendChild(timeBlockbtn)
    document.querySelector('.container').appendChild(timeBlockEL)
}

console.log(moment().hours())