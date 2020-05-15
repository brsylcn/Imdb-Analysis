function filterYears(data){
  return parseInt(data.release_year) > 2019
}


var query = "http://127.0.0.1:5000/data2"

d3.json(query).then(function(data){

var myPlot = document.getElementById('myDiv'),
   budget = data.map(d => d.budget)
   gross = data.map(d => d.gross)
   title = data.map(d => d.movie_title)
   imdb = data.map(d => d.imdb_score)

   roi = data.map(d => d.RoI)

trace = {
  x: budget,
  y: gross,
  text: title,
  mode:'markers', marker:{size: 3, color: "red"},
  type: 'scatter',
  hovertemplate: "%{text} <br> Budget: %{x} <br> Gross: %{y}<extra></extra>"
};

data1 = [trace];

// 7. Define our plot layout
layout = {
  title: "Biggest Box Office Hits",
  xaxis: { title: "Budget ($)" },
  yaxis: { title: "Gross ($)"},
  hovermode:'closest'
};

Plotly.newPlot('myDiv', data1, layout)

// var top10 = data.sort(function(a, b) { return a.RoI < b.RoI ? 1 : -1; }).slice(0, 10);
// console.log(top10);

// var tbody1 = d3.select('tbody.top10')

// top10.forEach((d) => {
//   var row = tbody1.append("tr");
//   Object.entries(d).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });

// });

// var bottom10 = data.sort(function(a, b) { return a.RoI < b.RoI ? 1 : -1; }).slice((data.length- 10), data.length);
// console.log(bottom10)

// var tbody2 = d3.select('tbody.bottom10')

// bottom10.forEach((d) => {
//   var row = tbody2.append("tr");
//   Object.entries(d).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });

// });

});
