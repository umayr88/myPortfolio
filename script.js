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


document.querySelectorAll('.toggleButton').forEach(button => {
    button.addEventListener('click', function() {
        const projectDetails = this.nextElementSibling;

        if (projectDetails.classList.contains('hidden')) {
            projectDetails.classList.remove('hidden');
            this.textContent = "◀ Hide " + this.textContent.split(' ')[2] + " " + this.textContent.split(' ')[3];
            this.classList.add('open');
        } else {
            projectDetails.classList.add('hidden');
            this.textContent = "▶ Show " + this.textContent.split(' ')[2] + " " + this.textContent.split(' ')[3];
            this.classList.remove('open');
        }
    });
});
