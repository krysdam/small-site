
let first3 = [];
let last3 = [];

document.getElementById("generate").disabled = true;
Promise.all([
    loadList('first3.txt').then(list => first3 = list),
    loadList('last3.txt').then(list => last3 = list)
]).then(() => {
    document.getElementById("generate").disabled = false;
});

function loadList(fname) {
    return fetch(fname)
        .then(response => response.text())
        .then(text =>
            text.split('\n').map(f => f.trim()).filter(f => f)
        )
        .catch(error => {
            console.error(`Failed to load ${fname}:`, error);
        })
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

function setRandomWord() {
    const word = getRandomElement(first3) + getRandomElement(last3);
    document.getElementById("password").textContent = word;
}