//function filterYears(data){
  //return parseInt(data.release_year) > 2019
//}
var query = "http://127.0.0.1:5000/data4"

d3.json(query).then(function(data){
  data.forEach(element => {element.gross = +element.gross
  });  
  
  var movieTitle = data.map(d => d.movie_title)
  console.log(data);

  var top10 = data.sort(function(a, b) { return a.gross < b.gross ? 1 : -1; })
  .slice(0, 10);
  console.log(top10);
  
    var trace = {
    x: top10.map(d => d.movie_title),
    y: top10.map(d => d.gross),
    //mode: 'markers',
    type: 'bar'};

    console.log("Top Movies ",top10.map(d => d.movie_title))
    console.log("gross ",top10.map(d => d.gross)) 
 var data = [trace];

// 7. Define our plot layout
var layout = {
  title: "Top 10 Highest Grossing Movies Worldwide",
  xaxis: { title: "Movie Title"},
  yaxis: { title: "Gross Revenue"}
 };

 Plotly.newPlot('myDiv', data, layout)

});
 
