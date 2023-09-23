fetch("js/demo-json-data.json")
.then(response=>{
    return response.json();
})
.then(data => getData(data));

function getData(data){
    let table = document.getElementById("table");

    for(let i=0; i<data.length; i++){
        let tr =document.createElement("tr");
        tr.innerHTML= `<td>${data[i].id}</td>
        <td>${data[i].first_name} ${data[i].last_name}</td>
        <td>${data[i].gender}</td>
        <td>${data[i].class}</td>
        <td>${data[i].marks}</td>
        <td>${data[i].passing}</td>
        <td>${data[i].email}</td>`

        table.appendChild(tr);
    }
}