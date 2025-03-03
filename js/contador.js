
    let counter = 200;
    const counterDisplay = document.getElementById("counter");
    counterDisplay.textContent = counter;

    function updateCounter() {
        counter++;
        counterDisplay.textContent = counter;
    }

    setInterval(updateCounter, 60000);