//Below I created a parse for the xlsx file to convert the data to JSON data to use

// import XLSX from "xlsx";

// const parse = (filename) => {
//     const excelData = XLSX.readFile(filename);

//     return Object.keys(excelData.Sheets).map((name) => ({
//         name,
//         data: XLSX.utils.sheet_to_json(excelData.Sheets[name],),
//     }));
// };

// parse("./BattedBallData.xlsx").forEach((element) => {
//     console.log(element.data);
// });

//Individual Tabs for Play Outcomes

function outcomeClick(data) {
    var outcomeClick = data;

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(xhttp.responseText);

            var players = response.players;
            var item = '';

            for (var i = 0; i < players.length; i++) {

                if(outcomeClick == players[i].PLAY_OUTCOME){
                item += `<li id="playerItems">${players[i].batter} <br />
            ${players[i].PLAY_OUTCOME} <br />
            ${players[i].VIDEO_LINK} <hr />
            
            </li>`
                }
            }
            document.getElementById('players').innerHTML = item;
        }
    };


xhttp.open("GET", "players.json", true);
xhttp.send();

}

