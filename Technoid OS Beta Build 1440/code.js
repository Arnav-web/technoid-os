var calc1value = 0;
var calc2value = 0;
var oprator = "";
var settingd = "";
setTimeout(function() {
  setScreen("home");
  playSound("assets/category_alerts/vibrant_game_carton_start_game_2_long.mp3", false);
}, 3000);
hideElement("text_area2");
hideElement("label_user");
hideElement("image4");
hideElement("label3");
hideElement("image5");
hideElement("label4");
hideElement("image6");
hideElement("label5");
hideElement("label7");
hideElement("label6");
hideElement("image7");
hideElement("image10");
hideElement("label10");
hideElement("image3");
onEvent("label1", "click", function( ) {
  showElement("label_user");
  showElement("image4");
  showElement("label3");
  showElement("image5");
  showElement("label4");
  showElement("image6");
  showElement("label5");
  showElement("label7");
  showElement("label6");
  showElement("text_area2");
  showElement("image7");
  showElement("closemenu");
  showElement("label10");
  showElement("image10");
  showElement("image3");
});
onEvent("image7", "click", function( ) {
  setScreen("About");
});
onEvent("closemenu", "click", function( ) {
  hideElement("text_area2");
  hideElement("label_user");
  hideElement("image4");
  hideElement("label3");
  hideElement("image5");
  hideElement("label4");
  hideElement("image6");
  hideElement("label5");
  hideElement("label7");
  hideElement("label6");
  hideElement("image7");
  hideElement("closemenu");
  hideElement("image10");
  hideElement("label10");
  hideElement("image3");
});
onEvent("label_user", "click", function( ) {
  setScreen("cuser");
});
onEvent("label14", "click", function( ) {
  showElement("label15");
  showElement("text_input1");
  showElement("button1");
});
onEvent("button1", "click", function( ) {
  setText("label13", getText("text_input1"));
  setText("label_user", getText("text_input1"));
  hideElement("label15");
  hideElement("text_input1");
  hideElement("button1");
});
onEvent("closeusers", "click", function( ) {
  setScreen("settings");
  setProperty("dropdown2", "text", "Select A Setting");
  hideElement("label15");
  hideElement("text_input1");
  hideElement("button1");
  hideElement("text_area2");
  hideElement("label_user");
  hideElement("image4");
  hideElement("label3");
  hideElement("image5");
  hideElement("label4");
  hideElement("image6");
  hideElement("label5");
  hideElement("label7");
  hideElement("label6");
  hideElement("image7");
  hideElement("closemenu");
  hideElement("label10");
  hideElement("image10");
  hideElement("image3");
});
onEvent("closeabout", "click", function( ) {
  setScreen("home");
  hideElement("text_area2");
  hideElement("label_user");
  hideElement("image4");
  hideElement("label3");
  hideElement("image5");
  hideElement("label4");
  hideElement("image6");
  hideElement("label5");
  hideElement("label7");
  hideElement("label6");
  hideElement("image7");
  hideElement("closemenu");
  hideElement("image10");
  hideElement("label10");
  hideElement("image3");
});
onEvent("image_usericon", "click", function( ) {
  showElement("label15");
  showElement("photo_select2");
  showElement("button2");
  setText("label15", "Select Your New Icon");
});
onEvent("button2", "click", function( ) {
  setImageURL("image_usericon", getImageURL("photo_select2"));
  setImageURL("image3", getImageURL("photo_select2"));
  hideElement("photo_select2");
  hideElement("label15");
  hideElement("button2");
});
onEvent("image4", "click", function( ) {
  setScreen("newcalc");
});
onEvent("dropdown1", "click", function( ) {
  oprator = getText("dropdown1");
});
onEvent("equal", "click", function( ) {
  calc1value = getText("1value");
  calc2value = getText("2value");
  if (oprator == "+") {
    showElement("label18");
    setText("label18", calc1value + calc2value);
  }
  if (oprator == "-") {
    showElement("label18");
    setText("label18", calc1value - calc2value);
  }
  if (oprator == "x") {
    showElement("label18");
    setText("label18", calc1value * calc2value);
  }
  if (oprator == "/") {
    showElement("label18");
    setText("label18", calc1value / calc2value);
  }
});
onEvent("closecalc", "click", function( ) {
  setScreen("newdialog");
  setText("title", "Calc");
  setText("label_message", "Do You Want To Close Calc?");
  onEvent("button_yes", "click", function( ) {
    setScreen("home");
  });
  onEvent("button_no", "click", function( ) {
    setScreen("newcalc");
  });
});
onEvent("off", "click", function( ) {
  setScreen("startup");
  setTimeout(function() {
    setScreen("home");
    playSound("assets/category_alerts/vibrant_game_carton_start_game_2_long.mp3", false);
  }, 5000);
});
onEvent("image9", "click", function( ) {
  showElement("text_area8");
  showElement("label20");
  showElement("text_area10");
  showElement("label21");
  showElement("label22");
  showElement("text_area11");
  showElement("label23");
  showElement("label24");
  showElement("label25");
  showElement("image11");
  showElement("label26");
  showElement("image12");
  showElement("label27");
  showElement("closenoti");
});
onEvent("closenoti", "click", function( ) {
  hideElement("text_area8");
  hideElement("label20");
  hideElement("text_area10");
  hideElement("label21");
  hideElement("label22");
  hideElement("text_area11");
  hideElement("label23");
  hideElement("label24");
  hideElement("label25");
  hideElement("image11");
  hideElement("label26");
  hideElement("image12");
  hideElement("label27");
  hideElement("closenoti");
});
onEvent("image10", "click", function( ) {
  setScreen("settings");
});
onEvent("dropdown2", "click", function( ) {
  settingd = getText("dropdown2");
  if (settingd=="User Accounts") {
    setScreen("cuser");
  }
  if (settingd=="Set Wallpaper") {
    setScreen("setwall");
  }
});
onEvent("closewall", "click", function( ) {
  setScreen("settings");
  setProperty("dropdown2", "text", "Select A Setting");
});
function SetWall(wallnum) {
  setProperty("setwall", "image", "wall" + (wallnum + ".png"));
  setProperty("home", "image", "wall" + (wallnum + ".png"));
  setProperty("newcalc", "image", "wall" + (wallnum + ".png"));
  setProperty("newdialog", "image", "wall" + (wallnum + ".png"));
  setProperty("newpass", "image", "wall" + (wallnum + ".png"));
  setProperty("About", "image", "wall" + (wallnum + ".png"));
}
onEvent("wall1", "click", function( ) {
  SetWall(1);
  setProperty("wall1", "border-width", 3);
  setProperty("wall2", "border-width", 0);
  setProperty("wall3", "border-width", 0);
  setProperty("wall4", "border-width", 0);
  setProperty("wall5", "border-width", 0);
});
onEvent("wall2", "click", function( ) {
  SetWall(2);
  setProperty("wall1", "border-width", 0);
  setProperty("wall2", "border-width", 3);
  setProperty("wall3", "border-width", 0);
  setProperty("wall4", "border-width", 0);
  setProperty("wall5", "border-width", 0);
});
onEvent("wall3", "click", function( ) {
  SetWall(3);
  setProperty("wall1", "border-width", 0);
  setProperty("wall2", "border-width", 0);
  setProperty("wall3", "border-width", 3);
  setProperty("wall4", "border-width", 0);
  setProperty("wall5", "border-width", 0);
});
onEvent("wall4", "click", function( ) {
  SetWall(4);
  setProperty("wall1", "border-width", 0);
  setProperty("wall2", "border-width", 0);
  setProperty("wall3", "border-width", 0);
  setProperty("wall4", "border-width", 3);
  setProperty("wall5", "border-width", 0);
});
onEvent("wall5", "click", function( ) {
  SetWall(5);
  setProperty("wall1", "border-width", 0);
  setProperty("wall2", "border-width", 0);
  setProperty("wall3", "border-width", 0);
  setProperty("wall4", "border-width", 0);
  setProperty("wall5", "border-width", 3);
});
onEvent("closesettings", "click", function( ) {
  setScreen("home");
});
onEvent("label17", "click", function( ) {
  setScreen("newpass");
});
