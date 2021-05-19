setTimeout(function() {
  setScreen("home");
}, 5000);
hideElement("text_area2");
hideElement("label2");
hideElement("image4");
hideElement("label3");
hideElement("image5");
hideElement("label4");
hideElement("image6");
hideElement("label5");
hideElement("label7");
hideElement("label6");
hideElement("image7");
onEvent("label1", "click", function( ) {
  showElement("label2");
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
});
onEvent("image7", "click", function( ) {
  setScreen("About");
});
onEvent("closemenu", "click", function( ) {
  hideElement("text_area2");
  hideElement("label2");
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
});
onEvent("label2", "click", function( ) {
  setScreen("cuser");
});
onEvent("label14", "click", function( ) {
  showElement("label15");
  showElement("text_input1");
  showElement("button1");
});
onEvent("button1", "click", function( ) {
  setText("label13", getText("text_input1"));
  setText("label2", getText("text_input1"));
});
onEvent("closeusers", "click", function( ) {
  setScreen("home");
  hideElement("label15");
  hideElement("text_input1");
  hideElement("button1");
});
