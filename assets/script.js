let plusButton = document.querySelector('.add');
let minusButton = document.querySelector('.minus');

let quantity = 0;

// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Ryan Paez" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle


document.getElementById('credit').textContent = `Created by ${yourName}`


document.getElementById('add-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!');
    quantity +=1;
    document.getElementById('qty-gb').textContent = quantity;

})

document.getElementById('minus-gb').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!');
    if (quantity > 0) {
        quantity -= 1;
    }
    document.getElementById('qty-gb').textContent = quantity;
})
 
    



document.getElementById('add-cc').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('chocolatechip + button was clicked!');
    quantity +=1;
document.getElementById('qty-cc').textContent = quantity;

})

document.getElementById('minus-cc').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!');
    if (quantity > 0) {
        quantity -= 1;
    }
    document.getElementById('qty-cc').textContent = quantity;

})




document.getElementById('add-sugar').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('sugar sprinkle + button was clicked!');
    quantity +=1;
document.getElementById('qty-sugar').textContent = quantity;

})

document.getElementById('minus-sugar').addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!');
    if (quantity > 0) {
        quantity -= 1;
    }
    document.getElementById('qty-sugar').textContent = quantity;

})
    
let gb= 0 
let cc= 0
let sugar= 0

for (let i=0;< )

    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked


// TODO: Hook up event listeners for the rest of the buttons