var date = new Date();
var minutes = 3;
date.setMinutes(date.getMinutes() + minutes);
console.log(date)

function count() {
    let newDate = new Date();
    let msDate = date - newDate;
    let min = Math.floor(msDate / 1000 / 60) % 60;
    let sec = Math.floor(msDate / 1000) % 60;
    let msec = Math.floor(msDate) % 100;

    if (msDate < 0) {
        clearInterval(count);
        document.getElementById('present__timer-min').innerText = "00"; 
        document.getElementById('present__timer-sec').innerText = "00";
        document.getElementById('present__timer-minsec').innerText = "00";
    } else {
        document.getElementById('present__timer-min').innerText = "0" + min;
        document.getElementById('present__timer-sec').innerText = sec;
        document.getElementById('present__timer-minsec').innerText = msec;
    }

    let a = String(document.getElementById('present__timer-min').innerText).split('');
    let b = String(document.getElementById('present__timer-sec').innerText).split('');
    let c = String(document.getElementById('present__timer-minsec').innerText).split('');
    if (a.length < 2) {
        document.getElementById('present__timer-min').innerHTML = '<div class="present__timer-item">0</div>' + '<div class="present__timer-item">' + a[0] + '</div>';
    } else {
        document.getElementById('present__timer-min').innerHTML = '<div class="present__timer-item">' + a[0] + '</div>' + '<div class="present__timer-item">' + a[1] + '</div>';
    }
    if (b.length < 2) {
        document.getElementById('present__timer-sec').innerHTML = '<div class="present__timer-item">0</div>' + '<div class="present__timer-item">' + b[0] + '</div>';
    } else {
        document.getElementById('present__timer-sec').innerHTML = '<div class="present__timer-item">' + b[0] + '</div>' + '<div class="present__timer-item">' + b[1] + '</div>';
    }
    if (c.length < 2) {
        document.getElementById('present__timer-minsec').innerHTML = '<div class="present__timer-item">0</div>' + '<div class="present__timer-item">' + c[0] + '</div>';
    } else {
        document.getElementById('present__timer-minsec').innerHTML = '<div class="present__timer-item">' + c[0] + '</div>' + '<div class="present__timer-item">' + c[1] + '</div>';
    }

}
setInterval(count, 10);