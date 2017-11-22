var years = [];
var yaContemporaryNumbers = [];
var yaMysteryNumbers = [];
var yaRomanticNumbers = [];
var yaHistoricalNumbers = [];
var yaFantasyNumbers = [];
var yaSciFiNumbers = [];
var genresAdult = ["Mystery", "Romantic", "SciFi/Fantasy", "Historical", "Contemporary", "Women's", "Humor"];
var genresYA = ["Contemporary", "Mystery", "Romantic", "Historical", "Fantasy", "SciFi/Dystopian"];
var buffer = 20;
var x_genres = 0; //sidebar, value modified in code
var hoveredGenre = "";
var yCont, yMys, yRom, yHist, yFant, ySF;
var endX, endY;
var books;

function preload() {
  bestsellersAdult = loadTable("data/bestsellers.csv","header");
  bestsellersYA = loadTable("data/bestsellers_ya.csv","header");
  bestsellersYADetails = loadTable("data/bestsellers_ya_details.csv","header");
}

function setup() {
  createCanvas(960,540);
  //Years
  years = bestsellersYA.getColumn("Year");
  //Numbers by genre each year
  yaContemporaryNumbers = bestsellersYA.getColumn("Contemporary");
  yaMysteryNumbers = bestsellersYA.getColumn("Mystery");
  yaRomanticNumbers = bestsellersYA.getColumn("Romantic");
  yaHistoricalNumbers = bestsellersYA.getColumn("Historical");
  yaFantasyNumbers = bestsellersYA.getColumn("Fantasy");
  yaSciFiNumbers = bestsellersYA.getColumn("SciFi/Dystopian");
  //Preprocess lists of books by genre or year (can do specifics in code)
  //books = bestsellersYADetails.getColumn("Title");
}

function draw() {
  background(0);
  fill(255);
  stroke(255);
  strokeWeight(1);
  
  /*
   * Title
   */
  textSize(32);
  textAlign(CENTER);
  text("Coming of Age, Page by Page", width/2, height/6);
  
  /*
   * Genre Sidebar
   */
  textSize(18);
  textAlign(LEFT);
  x_genres = 5*width/6;
  for (var i = 0; i < genresYA.length; i++) {
    var y_genres = map(i, 0, genresYA.length-1, height/3, 5*height/6);
    if (mouseX < width && mouseX >= x_genres) {
      if (mouseY < y_genres + buffer && mouseY > y_genres - buffer) {
        stroke(255);
        fill(255);
        text(genresYA[i], x_genres, y_genres);
        hoveredGenre = genresYA[i];
      } else {
        stroke(120);
        fill(120);
        text(genresYA[i], x_genres, y_genres);
      } 
    } else {
      stroke(255);
      fill(255);
      hoveredGenre = null;
      text(genresYA[i], x_genres, y_genres);
    }
  }
  
  /* 
   * Graph -- make this look more like a bookshelf? 
   * have vertical be year, no "number of YA top 10 books" axis, 
   * but specify that somewhere
   */
  stroke(255);
  fill(255);
  
  // Axes
  strokeWeight(2);
  line(width/6, height/3, width/6, 5*height/6);
  line(width/6, 5*height/6, 2*width/3+buffer, 5*height/6);
  
  // Y Label
  strokeWeight(0);
  textSize(12);
  textAlign(RIGHT);
  text("Number of top 10\n Young Adult Books\n in that genre", width/6-2*buffer, height/2);
  
  // X Year Labels
  textAlign(LEFT);
  for (var i = 0; i < years.length; i++) {
    var x_years = map(i, 0, years.length-1, width/6, 2*width/3);
    var y_years = 5*height/6+buffer;
    text(years[i], x_years, y_years);
  }
  
  // Y Book # Labels
  textAlign(LEFT, CENTER);
  for (var i = 0; i <= 10; i++) {
    var y = map(i, 0, 10, 5*height/6, height/3);
    var x = width/6-buffer;
    text(i, x, y);
  }
  
  // Plotting the dots
  fill(255);
  stroke(255);
  for (var i = 0; i <= 10; i++) {
    var x = map(i, 0, years.length-1, width/6+buffer, 2*width/3+buffer);
    yCont = map(yaContemporaryNumbers[i], 0, 10, 5*height/6, height/3);
    yMys = map(yaMysteryNumbers[i], 0, 10, 5*height/6, height/3);
    yRom = map(yaRomanticNumbers[i], 0, 10, 5*height/6, height/3);
    yHist = map(yaHistoricalNumbers[i], 0, 10, 5*height/6, height/3);
    yFant = map(yaFantasyNumbers[i], 0, 10, 5*height/6, height/3);
    ySF = map(yaSciFiNumbers[i], 0, 10, 5*height/6, height/3);
    fill(125);
    stroke(125);
    switch(hoveredGenre){
      case "Contemporary":
        ellipse(x, yMys, 5);
        ellipse(x, yRom, 5);
        ellipse(x, yHist, 5);
        ellipse(x, yFant, 5);
        ellipse(x, ySF, 5);
        fill(255);
        stroke(255);
        ellipse(x, yCont, 5);
        if (endX == null || endY == null) {
          endX = x;
          endY = yCont;
        } else {
          if (endX < x) {
            strokeWeight(1);
            line(endX, endY, x, yCont);
            strokeWeight(0);
          }
          endX = x;
          endY = yCont;
        }
        break;
      case "Mystery":
        ellipse(x, yCont, 5);
        ellipse(x, yRom, 5);
        ellipse(x, yHist, 5);
        ellipse(x, yFant, 5);
        ellipse(x, ySF, 5);
        fill(255);
        stroke(255);
        ellipse(x, yMys, 5);
        if (endX == null || endY == null) {
          endX = x;
          endY = yMys;
        } else {
          if (endX < x) {
            strokeWeight(1);
            line(endX, endY, x, yMys);
            strokeWeight(0);
          }
          endX = x;
          endY = yMys;
        }
        break;
      case "Romantic":
        ellipse(x, yCont, 5);
        ellipse(x, yMys, 5);
        ellipse(x, yHist, 5);
        ellipse(x, yFant, 5);
        ellipse(x, ySF, 5);
        fill(255);
        stroke(255);
        ellipse(x, yRom, 5);
        if (endX == null || endY == null) {
          endX = x;
          endY = yRom;
        } else {
          if (endX < x) {
            strokeWeight(1);
            line(endX, endY, x, yRom);
            strokeWeight(0);
          }
          endX = x;
          endY = yRom;
        }
        break;
      case "Historical":
        ellipse(x, yCont, 5);
        ellipse(x, yRom, 5);
        ellipse(x, yMys, 5);
        ellipse(x, yFant, 5);
        ellipse(x, ySF, 5);
        fill(255);
        stroke(255);
        ellipse(x, yHist, 5);
        if (endX == null || endY == null) {
          endX = x;
          endY = yHist;
        } else {
          if (endX < x) {
            strokeWeight(1);
            line(endX, endY, x, yHist);
            strokeWeight(0);
          }
          endX = x;
          endY = yHist;
        }
        break;
      case "Fantasy":
        ellipse(x, yCont, 5);
        ellipse(x, yRom, 5);
        ellipse(x, yHist, 5);
        ellipse(x, yMys, 5);
        ellipse(x, ySF, 5);
        fill(255);
        stroke(255);
        ellipse(x, yFant, 5);
        if (endX == null || endY == null) {
          endX = x;
          endY = yFant;
        } else {
          if (endX < x) {
            strokeWeight(1);
            line(endX, endY, x, yFant);
            strokeWeight(0);
          }
          endX = x;
          endY = yFant;
        }
        break;
      case "SciFi/Dystopian":
        ellipse(x, yCont, 5);
        ellipse(x, yRom, 5);
        ellipse(x, yHist, 5);
        ellipse(x, yFant, 5);
        ellipse(x, yMys, 5);
        fill(255);
        stroke(255);
        ellipse(x, ySF, 5);
        if (endX == null || endY == null) {
          endX = x;
          endY = ySF;
        } else {
          if (endX < x) {
            strokeWeight(1);
            line(endX, endY, x, ySF);
            strokeWeight(0);
          }
          endX = x;
          endY = ySF;
        }
        break;
      default:
        fill(255);
        stroke(255);
        endX = null;
        endY = null;
        ellipse(x, yMys, 5);
        ellipse(x, yCont, 5);
        ellipse(x, yRom, 5);
        ellipse(x, yHist, 5);
        ellipse(x, yFant, 5);
        ellipse(x, ySF, 5);
        break;
    }
  }
  
}
//fun side notes
//use getRow(index) to get all the properties of a thing at a certain row