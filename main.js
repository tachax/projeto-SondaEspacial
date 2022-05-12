var x;
var y;

var plato = [
    [0, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 1, 1, 1, 0, 1, 0],
    [0, 0, 0, 1, 1, 0, 0, 2, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 2, 1, 0, 1, 0, 0, 0, 2],
    [0, 2, 0, 0, 1, 0, 0, 2, 2, 2],
    [0, 0, 1, 2, 0, 0, 1, 2, 2, 2],
    [0, 0, 2, 2, 1, 2, 0, 2, 2, 2]
];

var mapa = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

//enter no botão
function pousar() {
    x = document.getElementById('x').value;
    x = Number(x);
    y = document.getElementById('y').value;
    y = Number(y);

    for (let i = y - 1; i < y + 2; i++) {

        for (let j = x - 1; j < x + 2; j++) {

            //verificar se tem buraco ou elevação
            if (i==-1 || j==-1) {

            } else {
                switch (plato[i][j]) {
                    case 1:
                        mapa[i][j] = 'b';
                        break;
                    case 2:
                        mapa[i][j] = 'e';
                        break;
                    default:
                        break;
                }
            }
        }
    }

    formarMapa();
}

//mapa na tela
function formarMapa() {
    document.getElementById('mapaTela').innerHTML = `Mapa: <br><br>`;

    for (let i = 0; i < mapa.length; i++) {
        for (let j = 0; j < mapa[i].length; j++) {
            document.getElementById('mapaTela').innerHTML += `${mapa[i][j]} | `;

        }
        document.getElementById('mapaTela').innerHTML += `<br> `;
    }
}