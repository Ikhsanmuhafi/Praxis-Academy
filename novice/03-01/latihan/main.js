let Gunung = document.querySelector('#lihat-table')
Gunung.addEventListener("click",()=>{
    const data = [
        {nama: "Kilimanjaro",ketinggian: 5895, tempat: "Tanzania"},
        {nama: "Everest",ketinggian: 8848, tempat: "Nepal"},
        {nama: "Mount Fuji",ketinggian: 3776, tempat:"Japan"},
        {nama: "Vaalserberg",ketinggian: 323, tempat: "Netherlands"},
        {nama: "Denali",ketinggian: 6168, tempat:"United States"},
        {nama: "Popocatepelt",ketinggian: 5465, tempat: "Mexico"},
        {nama: "Mont Blanc",ketinggian: 4808, tempat: "Italy/France"}
    ]

    let table_html = "<table>\n"

    table_html += "\t<tr>\n"

    for (let key of Object.keys(data[0])){
        table_html+=`
        <th>${key}</th>
        `;
    }
    for (let mountain of data){
        table_html += `
        <tr>
            <th>${mountain.nama}</th>
            <th style="text-align: right">${mountain.ketinggian}</th>
            <th>${mountain.tempat}</th>
        </tr>    
        `
    }

    table_html += "</table>\n";
    document.querySelector("#mountains").innerHTML = table_html
}
)
