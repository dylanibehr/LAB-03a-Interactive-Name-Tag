const nameTag = document.getElementById('name-tag');
const updateButton = document.getElementById('update-button');
const nameInput = document.getElementById('name-input');
const nameDisplay = document.getElementById('name-display')
const bluebutton = document.getElementById('blue-button')
const tealbutton = document.getElementById('teal-button')
const orangebutton = document.getElementById('orange-button')



updateButton.addEventListener('click', () => {
    //This code runs when button is clicked
    console.log('you clicked this button');
    const newName = nameInput.value;
    nameDisplay.textContent = newName;
});

bluebutton.addEventListener('click', () => {
    //This code runs when button is clicked
    console.log('change this nametag blue');
    nameTag.style.background = "blue"
});

tealbutton.addEventListener('click', () => {
    //This code runs when button is clicked
    console.log('change this nametag teal');
    nameTag.style.background = "teal"
});

orangebutton.addEventListener('click', () => {
    //This code runs when button is clicked
    console.log('change this nametag orange');
    nameTag.style.background = "orange"
});