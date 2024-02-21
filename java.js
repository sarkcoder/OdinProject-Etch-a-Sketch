

const createButton = document.querySelector('#create')

createButton.addEventListener('click',() => {
    generateGrid(16)
})

// remove black class from all elements to clear the board
const clearButton = document.querySelector('#clear')

clearButton.addEventListener('click',() =>{
    console.log('clear')
        let allElements = document.querySelectorAll('*')
        allElements.forEach((element) => {
            element.classList.remove('blacksquare');
        })
})



// Function to create grid based on number entered, and size it. 
// 960 are the dimensions of the grid in px
// adds event listener to change color of div on mouseover

function generateGrid(noOfSquares){

    let numberOfSquares = noOfSquares * noOfSquares
    let squareSize = (960 / noOfSquares)
    

    for (let i = 0; i < numberOfSquares; i++){
        let container = document.querySelector('#container')
        let square = document.createElement('div')
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.classList.add('square')
        container.appendChild(square)

        square.addEventListener('mouseover', function(){
            square.classList.add('blacksquare')})

        
        console.log('squares created')
    }}

 ;



 // square.style.backgroundColor = 'black'})

