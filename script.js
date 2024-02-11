let box = document.querySelectorAll(".box");
let id = document.getElementById("show");
let load = document.getElementById("restart");
let newgame = document.getElementById("newgame");
const win1 = document.getElementById("win1");
const loose1 = document.getElementById("loose1");
const win2 = document.getElementById("win2");
const loose2 = document.getElementById("loose2");
const match = document.querySelectorAll(".match")
const container_2 = document.querySelector(".container_2");
show.innerText = ("");
let num = 0;
let value = "O";
let count = 0;
let count_x = 0;
let count_y = 0;
match.forEach((e) => {
    e.innerText = "MATCH : " + num;
})
win1.innerText = "WIN : " + 0;
win2.innerText = "WIN : " + 0;
loose1.innerText = "LOOSE : " + 0;
loose2.innerText = "LOOSE : " + 0;
function change() {
    if (value == "X") {
        value = "O";
    }
    else {
        value = "X";
    }
}

function check() {
    let arr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    arr.forEach((e, i) => {

        if (box[e[0]].innerText === box[e[1]].innerText && box[e[1]].innerText === box[e[2]].innerText && box[e[0]].innerText !== "") {
            show.innerText = (`'"' ${box[e[0]].innerText} '"' ` + " WINS!...");
            box[e[0]].style.backgroundColor = "green";
            box[e[1]].style.backgroundColor = "green";
            box[e[2]].style.backgroundColor = "green";
            num++;
            match.forEach((e) => {
                e.innerText = "MATCH : " + num;
            })
            if (box[e[0]].innerText == "X") {
                count_x++;

                win1.innerText = `WINS - ${count_x}`;
                loose2.innerText = `LOOSE - ${count_x}`;
            }
            else {
                count_y++;
                loose1.innerText = `LOOSE - ${count_y}`;
                win2.innerText = `WINS - ${count_y}`;
            }

            setTimeout(() => {
                box.forEach((e) => {
                    e.innerText = "";
                    e.style.backgroundColor = "";
                    count = 0;
                })
                container_2.classList.add("pop");
            }, 2000);

        }
        else {
            if (count == 9 && box[e[0]].innerText !== box[e[1]].innerText && box[e[1]].innerText !== box[e[2]].innerText) {
                box.forEach((e) => {
                    e.style.backgroundColor = "red";
                })
                num++;
                setTimeout(() => {
                    box.forEach((e) => {
                        e.innerText = "";
                        e.style.backgroundColor = "";
                        count = 0;
                    })
                    container_2.classList.add("pop");
                }, 2000);
            }
            match.forEach((e) => {
                e.innerText = "MATCH : " + num;
            })

        }


    })


}


box.forEach((element) => {
    element.addEventListener("click", (e) => {
        if (e.target.innerText === "") {
            count++;
            show.innerText = (`NEXT TURN FOR "${value}"`);
            show.style.backgroundColor = "blue";
            change();
            e.target.innerText = value;
            check();


        }
    })
})


load.addEventListener("click", () => {
    location.reload();
})


newgame.addEventListener("click", () => {
    box.forEach((e) => {
        e.innerText = "";
        e.style.backgroundColor = "";
        count = 0;
    })
})


