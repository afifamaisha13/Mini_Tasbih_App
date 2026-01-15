/*let count = 0;
let labelValue = 0;

function increase() {
    count++;

    if (count === 100) {
        labelValue++;   
        count=0;
    }

    updateCounter();
}

function decrease() {
    if (count > 0) {
        count--;
    }
    updateCounter();
}

function reset() {
    count = 0;
    labelValue = 0;
    updateCounter();
}

function updateCounter() {
    document.getElementById("counter").innerHTML = count;
    document.getElementById("label").innerHTML = labelValue;
}*/

let count = 0;
let cycle = 0;
const maxCount = 100; // Tasbih cycle limit

function incrementCount() {
    count++;
    document.getElementById('countDisplay').innerText = count;

    if (count % maxCount === 0) {
        cycle++;
        document.getElementById('cycleDisplay').innerText =
            "Cycles completed: " + cycle;
        alert("Spiritual milestone achieved! 🎉");
    }
}

function resetCount() {
    count = 0;
    cycle = 0;
    document.getElementById('countDisplay').innerText = 0;
    document.getElementById('cycleDisplay').innerText =
        "Cycles completed: 0";
}

function decrementCount(){
    if (count > 0) {
        count--;
        document.getElementById('countDisplay').innerText = count;
    }
}