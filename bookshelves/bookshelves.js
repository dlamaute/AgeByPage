var years = [];
var genresYA = ["Contemporary", "Mystery", "Romantic", "Historical", "Fantasy", "SciFi/Dystopian"];
var buffer = 20;
var x_genres = 0; //sidebar, value modified in code
var hoveredGenre = "";
var description = "";
var displayBookInfo = false;
var shelfWidth, shelfHeight;
var index2006 = 100;
var index2007 = 90;
var index2008 = 80;
var index2009 = 70;
var index2010 = 60;
var index2011 = 50;
var index2012 = 40;
var index2013 = 30;
var index2014 = 20;
var index2015 = 10;
var index2016 = 0;

function preload() {
  bestsellersYA = loadTable("data/bestsellers_ya.csv","header");
  bestsellersYADetails = loadTable("data/bestsellers_ya_details.csv","header");
  //load all the book cover images
  //2006
  cover0601 = loadImage("images/06_harrypotterandthehalfbloodprince.jpg");
  cover0602 = loadImage("images/06_twilight.jpg");
  cover0603 = loadImage("images/06_eldest.jpg");
  cover0604 = loadImage("images/06_rebelangels.jpg");
  cover0605 = loadImage("images/06_peeps.jpg");
  cover0606 = loadImage("images/06_13littleblueenvelopes.jpg");
  cover0607 = loadImage("images/06_poison.jpg");
  cover0608 = loadImage("images/06_captainhooktheadventuresofanotoriousyouth.jpg");
  cover0609 = loadImage("images/06_ifihaveawickedstepmotherwheresmyprince.jpg");
  cover0610 = loadImage("images/06_elsewhere.jpg");
  //2007
  cover0701 = loadImage("images/07_newmoon.jpg");
  cover0702 = loadImage("images/07_justlisten.jpg");
  cover0703 = loadImage("images/07_howtoruinasummervacation.jpg");
  cover0704 = loadImage("images/07_schoolsoutforever.jpg");
  cover0705 = loadImage("images/07_firegirl.jpg");
  cover0706 = loadImage("images/07_allhallowseve.jpg");
  cover0707 = loadImage("images/07_lifeasweknewit.jpg");
  cover0708 = loadImage("images/07_riversecrets.jpg");
  cover0709 = loadImage("images/07_badkitty.jpg");
  cover0710 = loadImage("images/07_theroadofthedead.jpg");
  //2008
  cover0801 = loadImage("images/08_eclipse.jpg");
  cover0802 = loadImage("images/08_harrypotterandthedeathlyhallows.jpg");
  cover0803 = loadImage("images/08_diaryofawimpykid.jpg");
  cover0804 = loadImage("images/08_vampireacademy.jpg");
  cover0805 = loadImage("images/08_savingtheworldandotherextremesports.jpg");
  cover0806 = loadImage("images/08_cityofbones.jpg");
  cover0807 = loadImage("images/08_thesweetfarthing.jpg");
  cover0808 = loadImage("images/08_extras.jpg");
  cover0809 = loadImage("images/08_beforeidie.jpg");
  cover0810 = loadImage("images/08_twisted.jpg");
  //2009
  cover0901 = loadImage("images/09_papertowns.jpg");
  cover0902 = loadImage("images/09_breakingdawn.jpg");
  cover0903 = loadImage("images/09_thehungergames.jpg");
  cover0904 = loadImage("images/09_cityofashes.jpg");
  cover0905 = loadImage("images/09_identical.jpg");
  cover0906 = loadImage("images/09_thegraveyardbook.jpg");
  cover0907 = loadImage("images/09_wake.jpg");
  cover0908 = loadImage("images/09_untamed.jpg");
  cover0909 = loadImage("images/09_thedisreputablehistoryoffrankielandaubanks.jpg");
  cover0910 = loadImage("images/09_graceling.jpg");
  //2010
  cover1001 = loadImage("images/10_catchingfire.jpg");
  cover1002 = loadImage("images/10_cityofglass.jpg");
  cover1003 = loadImage("images/10_heistsociety.jpg");
  cover1004 = loadImage("images/10_shiver.jpg");
  cover1005 = loadImage("images/10_hushhush.jpg");
  cover1006 = loadImage("images/10_beautifulcreatures.jpg");
  cover1007 = loadImage("images/10_alongfortheride.jpg");
  cover1008 = loadImage("images/10_ifistay.jpg");
  cover1009 = loadImage("images/10_fire.jpg");
  cover1010 = loadImage("images/10_wintergirls.jpg");
  //2011
  cover1101 = loadImage("images/11_clockworkangel.jpg");
  cover1102 = loadImage("images/11_mockingjay.jpg");
  cover1103 = loadImage("images/11_crescendo.jpg");
  cover1104 = loadImage("images/11_iamnumberfour.jpg");
  cover1105 = loadImage("images/11_theironking.jpg");
  cover1106 = loadImage("images/11_matched.jpg");
  cover1107 = loadImage("images/11_angel.jpg");
  cover1108 = loadImage("images/11_paranormalcy.jpg");
  cover1109 = loadImage("images/11_beforeifall.jpg");
  cover1110 = loadImage("images/11_nightshade.jpg");
  //2012
  cover1201 = loadImage("images/12_divergent.jpg");
  cover1202 = loadImage("images/12_thefaultinourstars.jpg");
  cover1203 = loadImage("images/12_legend.jpg");
  cover1204 = loadImage("images/12_missperegrineshomeforpeculiarchildren.jpg");
  cover1205 = loadImage("images/12_whathappenedtogoodbye.jpg");
  cover1206 = loadImage("images/12_acrosstheuniverse.jpg");
  cover1207 = loadImage("images/12_cinder.jpg");
  cover1208 = loadImage("images/12_thescorpioraces.jpg");
  cover1209 = loadImage("images/12_whereshewent.jpg");
  cover1210 = loadImage("images/12_abandon.jpg");
  //2013
  cover1301 = loadImage("images/13_codenameverity.jpg");
  cover1302 = loadImage("images/13_thefalseprince.jpg");
  cover1303 = loadImage("images/13_insurgent.jpg");
  cover1304 = loadImage("images/13_pushingthelimits.jpg");
  cover1305 = loadImage("images/13_poisonprincess.jpg");
  cover1306 = loadImage("images/13_theravenboys.jpg");
  cover1307 = loadImage("images/13_crewel.jpg");
  cover1308 = loadImage("images/13_everyday.jpg");
  cover1309 = loadImage("images/13_killmesoftly.jpg");
  cover1310 = loadImage("images/13_butter.jpg");
  //2014
  cover1401 = loadImage("images/14_eleanorpark.jpg");
  cover1402 = loadImage("images/14_splintered.jpg");
  cover1403 = loadImage("images/14_therithmatist.jpg");
  cover1404 = loadImage("images/14_the5thwave.jpg");
  cover1405 = loadImage("images/14_skyonfire.jpg");
  cover1406 = loadImage("images/14_earthgirl.jpg");
  cover1407 = loadImage("images/14_thetesting.jpg");
  cover1408 = loadImage("images/14_steelheart.jpg");
  cover1409 = loadImage("images/14_siegeandstorm.jpg");
  cover1410 = loadImage("images/14_theeyeofminds.jpg");
  //2015
  cover1501 = loadImage("images/15_theshadowthrone.jpg");
  cover1502 = loadImage("images/15_ibecomeshadow.jpg");
  cover1503 = loadImage("images/15_toalltheboysivelovedbefore.jpg");
  cover1504 = loadImage("images/15_mylifewiththewalterboys.jpg");
  cover1505 = loadImage("images/15_heiroffire.jpg");
  cover1506 = loadImage("images/15_thebanechronicles.jpg");
  cover1507 = loadImage("images/15_theyoungelites.jpg");
  cover1508 = loadImage("images/15_thekissofdeception.jpg");
  cover1509 = loadImage("images/15_sinceyouvebeengone.jpg");
  cover1510 = loadImage("images/15_thegeographyofyouandme.jpg");
  //2016
  cover1601 = loadImage("images/16_alive.jpg");
  cover1602 = loadImage("images/16_allthebrightplaces.jpg");
  cover1603 = loadImage("images/16_thegameofloveanddeath.jpg");
  cover1604 = loadImage("images/16_sixofcrows.jpg");
  cover1605 = loadImage("images/16_everythingeverything.jpg");
  cover1606 = loadImage("images/16_everylastword.jpg");
  cover1607 = loadImage("images/16_thenovice.jpg");
  cover1608 = loadImage("images/16_illuminae.jpg");
  cover1609 = loadImage("images/16_when.jpg");
  cover1610 = loadImage("images/16_suicidenotesfrombeautifulgirls.jpg");
}

function setup() {
  createCanvas(1280,685);
  //Years
  years = bestsellersYA.getColumn("Year");
  imageMode(CORNER);
}

function draw() {
  background(0);
  fill(220);
  stroke(220);
  strokeWeight(1);
  
  /*
   * Title
   */
  textAlign(CENTER);
  push();
  textSize(32);
  translate(50,height/2);
  rotate(-PI/2);
  text("Coming of Age, Page by Page", 0, 0);
  pop();
  line(width/12, 0, width/12, height);
  line(0, height/12, width/12, height/12);
  line(0, height/12+buffer, width/12, height/12+buffer);
  line(0, 11*height/12, width/12, 11*height/12);
  line(0, 11*height/12+buffer, width/12, 11*height/12+buffer);
  
  /*
   * Genre Sidebar
   */
  textSize(18);
  strokeWeight(0);
  x_genres = 5*width/6;
  for (var i = 0; i < genresYA.length; i++) {
    var y_genres = map(i, 0, genresYA.length-1, height/2, 11*height/12);
    if (mouseX < width && mouseX >= 2*width/3) {
      if (mouseY < y_genres + buffer && mouseY > y_genres - buffer) {
        stroke(220);
        fill(220);
        text(genresYA[i], x_genres, y_genres);
        hoveredGenre = genresYA[i];
      } else {
        stroke(120);
        fill(120);
        text(genresYA[i], x_genres, y_genres);
      } 
    } else {
      stroke(220);
      fill(220);
      hoveredGenre = null;
      text(genresYA[i], x_genres, y_genres);
    }
  }
  
  /*
   * Description Area
   * if not hovering over individual books
   */
   stroke(220);
   fill(220);
   if (mouseX > 2*width/3 && mouseY > height/3) {
     switch(hoveredGenre) {
       case "Contemporary":
         description = "Realistic fiction and contemporary books seem to rise in popularity when Fantasy and Sci-Fi books lose popularity.";
         break;
       case "Mystery":
         description = "This category encompasses mysteries, thrillers, and horror stories. These have been the most popular genre on the NY Times bestsellers list for adult books in the past 10 years, but they are not nearly as popular in YA.";
         break;
       case "Romantic":
         description = "This was most popular in the early 2010s for some reason. I don't actually care for them much, though.";
         break;
       case "Historical":
         description = "I love historical fiction, although it was never popular.";
         break;
       case "Fantasy":
         description = "Fantasy has gotten less popular over the last two years while contemporary, realistic fiction seems to have replaced it. ";
         break;
       case "SciFi/Dystopian":
         description = "The rise of dystopian stories started with the Hunger Games, even though I was into them since before 2006. They became rather formulaic by 2012, and and in 2014 fell off in popularity sharply.";
         break;
       default:
         desciption = "These are the top ten Young Adult books from my middle school years until last year.";
         break;
     }
     text(description,2*width/3, height/12, width/3, height/3-height/12);
  } else if (mouseX < width/12){
      print("there");
      description = "These are the top ten Young Adult books from my middle school years until last year.";
      text(description,2*width/3, height/12, width/3, height/3-height/12);
  } else {
    description = "";
  }
   
  /* 
   * Bookshelf
   */
  fill(220);
  strokeWeight(0);
  
  // Bookshelf Frame
  shelfHeight = 11*height/12;
  shelfWidth = 3*shelfHeight/4;
  
  // Y Axis Year Labels
  textAlign(LEFT, CENTER);
  for (var i = 0; i < years.length; i++) {
    var y_years = map(i, 0, years.length-1, 11*height/12, height/12+2*buffer);
    var x_years = width/4-3*buffer;
    text(years[i], x_years, y_years);
    /*if (mouseX >= width/4-3*buffer && mouseX < width/4) {
      if (mouseY<y_years+buffer && mouseY > y_years -buffer) {}
    }*/
  }
  
  // fill the bookshelf
  //each year has a row, i, starting from 6 (2006) to 16 (2016)
  //every cover is in evenly spaced column
  for (var i = 6; i <= 16; i++) {
    var y = map(i, 6, 16, 11*height/12-buffer, height/12+buffer);
    for (var j = 0; j <= 9; j++) {
      var x = map(j, 0, 9, width/4, width/4+shelfWidth);
      var idx = eval("index20"+nf(i,2));
      var row = bestsellersYADetails.getRow(idx+j);
      if (mouseY >= y && mouseY <= y+shelfHeight/11-buffer/2 && 
          mouseX >= x && mouseX <= x+shelfWidth/10-buffer/2) {
          text(row.getString("Title"),2*width/3, height/12, width/3, height/3-height/12);
          textSize(12);
          text(row.getString("Author"),2*width/3, height/12+buffer, width/3, height/3-height/12);
          text(row.getString("Notes"), 2*width/3, height/12+4*buffer, width/3, height/3-height/12);  
      }
      // Title
      // Author (smaller)
      // synopsis* 
      // genres (list)
      switch(hoveredGenre) {
        case "Contemporary":
            if (row.getString("Contemporary") == "y") {
              var cover = eval("cover"+nf(i,2)+nf(j+1,2));
              image(cover,x,y,shelfWidth/10-buffer/2,shelfHeight/11-buffer/2);
            }
          break;
        case "Mystery":
            if (row.getString("Mystery") == "y") {
              var cover = eval("cover"+nf(i,2)+nf(j+1,2));
              image(cover,x,y,shelfWidth/10-buffer/2,shelfHeight/11-buffer/2);
            }
          break;
        case "Romantic":
            if (row.getString("Romantic") == "y") {
              var cover = eval("cover"+nf(i,2)+nf(j+1,2));
              image(cover,x,y,shelfWidth/10-buffer/2,shelfHeight/11-buffer/2);
            }
          break;
        case "Historical":
            if (row.getString("Historical") == "y") {
              var cover = eval("cover"+nf(i,2)+nf(j+1,2));
              image(cover,x,y,shelfWidth/10-buffer/2,shelfHeight/11-buffer/2);
            }
          break;
        case "Fantasy":
            if (row.getString("Fantasy") == "y") {
              var cover = eval("cover"+nf(i,2)+nf(j+1,2));
              image(cover,x,y,shelfWidth/10-buffer/2,shelfHeight/11-buffer/2);
            }
          break;
        case "SciFi/Dystopian":
            if (row.getString("SciFi/Dystopia") == "y") {
              var cover = eval("cover"+nf(i,2)+nf(j+1,2));
              image(cover,x,y,shelfWidth/10-buffer/2,shelfHeight/11-buffer/2);
            }
          break;
        default:
          eval("var cover=cover"+nf(i,2)+nf(j+1,2));
          image(cover,x,y,shelfWidth/10-buffer/2,shelfHeight/11-buffer/2);
          break;
      }
    }
  }
  
}