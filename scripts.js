let color = `black`;

const matrix = document.querySelector(".matrix")
const size = document.querySelector(".sizeinput")
const newSketch = document.querySelector(".newSketch")
const colorButtons = document.querySelectorAll(".color")

colorButtons.forEach(button => {
    button.addEventListener("click", e => {
        color = button.innerText.toLowerCase()
        console.log(color)
},0)
},)

function getColor(pick) {
    if(pick === `random`){
        return `#${Math.floor(Math.random()*16777215).toString(16)}`
    } else {
        return pick
    }
}

console.log(getColor(color))

function newGrid (size){
    if(size <1) {
        let row  = document.createElement("div")
//        row.classList.add('row')
        row.innerHTML = "<p>You stupid fuck. Write a number <strong>bigger than 0</strong> and don't try to break me.</p>"
        matrix.append(row)
    } else {
        for (y = 0 ; y < size ; y++){
            let row  = document.createElement("div")
            row.classList.add('row')
            for (i = 0 ; i < size ; i++){
                let column  = document.createElement("div")
                column.classList.add('column')
                column.addEventListener("mouseover", draw => {
                    column.setAttribute("style",`background-color:${getColor(color)}`)
                },false);
                row.append(column)
            }
            matrix.append(row)
        }
    }
}

newSketch.addEventListener("click", e => {
    matrix.replaceChildren();
    newGrid(size.value)
},0)

newGrid(size.value)