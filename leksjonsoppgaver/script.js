const deposits = [50, 100, 200, 300]

const totalDeposits = deposits.reduce((total, deposit) => total + deposit, 0)
console.log(totalDeposits)

const list = [19, 22]

console.log(list)

document.getElementById("inputsubmit").addEventListener("click", add)

function add(){
    const inputtext = document.getElementById("inputtext").value
    const inputnumber = document.getElementById("inputnumber").value
    list.push(inputtext, inputnumber)
    console.log(list)
}




const books = {
    "978-3-16-148410-0": {
        name: "The Hound of the Baskervilles",
        year: 1902,
        category: "crime"
    },
    "978-0-7432-7356-0": {
        name: "In Cold Blood",
        year: 1966,
        category: "crime"
    },
    "978-0-452-28423-4": {
        name: "Pride and Prejudice",
        year: 1813,
        category: "romance"
    }
};

// Objekt for å lagre priser med ISBN som nøkkel
const prices = {
    "978-3-16-148410-0": 15.99,
    "978-0-7432-7356-0": 12.99,
    "978-0-452-28423-4": 9.99
};


