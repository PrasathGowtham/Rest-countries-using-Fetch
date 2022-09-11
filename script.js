let card = document.getElementById("card");

let p = new Promise((resolve, reject) => {
  let request = new XMLHttpRequest()
  request.open("GET", "https://restcountries.com/v2/all", true)
  request.send()
  request.onload = function () {
    let data = JSON.parse(this.response)
    resolve(data)
  }
})


p.then((data) => {
  console.log(data)
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div")
    div.innerHTML = `<div class="card" style="width: 18rem;"id=>
        <div class="card-head">
            <p><b><h3>${data[i].name}</h3><b></p>
        </div>
        <img src="${data[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body" >
            <!-- <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
            <ul>
                <li>Capital:<span id="special">${data[i].capital}</span></li>
                <li>Country Code:<span id="">${data[i].alpha2Code, data[i].alpha3Code}</span></li>
                <li>Region<span id="special">${data[i].region}</span></li>
                <button type="button" onclick="button()">Click For Wheather</button>
                </div>
                </div>`
    card.append(div);

  }
}).catch((error) => { console.log(error) })



 function button() {

  p.then((data) => {
    console.log(data)
    for (let i = 0; i < data.length; i++) {

      var url = ` https://api.openweathermap.org/data/3.0/onecall?lat=${data[i].latlng[0]}&lon=${data[i].latlng[1]}&exclude=hourly,daily&appid=9a49be813e33985bcee469f465b75711`;
      let result =  fetch(url);
      let result1 =  result.json();
      console.log(result1);}


    })}
    
    button();


