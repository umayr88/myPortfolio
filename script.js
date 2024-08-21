let startDate = new Date("2020-09-11T09:00:00Z");

function updateCounter() {
    let now = new Date();
    let difference = now - startDate;

    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("counter").innerHTML = 
        days + " Days " + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds";
}

setInterval(updateCounter, 1000);
updateCounter();
