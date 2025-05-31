const url = "https://official-joke-api.appspot.com/jokes/random/25";
let getRow = document.querySelector(".row");
const type = document.querySelector("#type");
const setup = document.querySelector("#setup");
const punchline = document.querySelector("#punchline");

const getResult = async () => {
    let response = await fetch(url);
    console.log(response);
    let getData = await response.json();
    for(result of getData){
        const col = document.createElement("div");
        col.classList.add("cols");
        col.innerHTML = `
                            <p>Type: ${result['type']}</p>
                            <p>Setup: ${result['setup']}<p>
                            <p>Punchline: ${result['punchline']}</p>`;
        getRow.append(col);
        //console.log(result);
    }
}
getResult();