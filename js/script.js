//Definiamo i Square del html

function createSquare(ind) {
    const squareDiv = document.createElement('div');
    squareDiv.className = 'square';
    squareDiv.innerText = ind;
    return squareDiv;
}

//Colleghiamo il play button alla creazione campo in base alla difficoltà
//Colleghiamo un listener al click sulle caselle che le colora di azurro

let button_play = document.getElementById('play');
button_play.addEventListener('click', function(){
    
    let contain_square = document.getElementById('grid');
    contain_square.innerHTML = "";

    let cell;
    let cells_num;
    let diff_sel = document.getElementById('difficulty').value;

    if (diff_sel === 'easy'){
        cells_num = 100;
    }
    else if (diff_sel === 'normal'){
        cells_num = 81;
    }
    else {
        cells_num = 49;
    }

    for (let i = 1; i <= cells_num; i++) {
        cell = createSquare(i);

        cell.addEventListener('click', function(){
            this.classList.toggle('even');
            console.log(this.innerText);
        })

        contain_square.append(cell);

        if (diff_sel === 'easy') {
            cell.classList.add('hard-field');
        }
        else if (diff_sel === 'normal') {
            cell.classList.add('normal-field');
        }
        else {
            cell.classList.add('easy-field');
        }
    }

})