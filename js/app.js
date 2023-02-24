
/* -----------------animation title header------------------ */
var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

/* -----------------active menu burger------------------ */
function burger() {
  var x = document.getElementById("burgerbtn");
  if (x.className === "respnav") {
    x.className += " active";
  } else {
    x.className = "respnav";
  }
}

/* -----------------btn play and pause header------------------ */

var video1 = document.getElementById("myVideo2");
var btn = document.getElementById("myBtn");
var video2 = document.getElementById("myVideo");

function myFunction() {
  if (video1.paused & video2.paused) {
    video1.play();
    video2.play();
    btn.innerHTML = "Pause";
  } else {
    video1.pause();
    video2.pause();
    btn.innerHTML = "Play";
  }
}


/* -----------------btn display js------------------ */

function showcode(div_name, btn_name){
  
  document.getElementById("executjs").style.display= "none";
  document.getElementById("executprompt").style.display= "none";
  document.getElementById("executjq").style.display= "none";
  document.getElementById("executphp").style.display= "none";
  // hide all code's button
  document.getElementById("resultjs").style.display= "none";
  document.getElementById("resultprompt").style.display= "none";
  document.getElementById("resultjq").style.display= "none";
  document.getElementById("resultphp").style.display= "none";
  // show the one clicked 
  document.getElementById(div_name).style.display= "block";
  document.getElementById(btn_name).style.display= "block";
  // show the form and the results if div_jsprompt is disabled
  document.getElementById("execut").style.display= "block";
  document.getElementById("form").style.display= "block";
}
 
function showcode2(div_name, btn_name, Phpform,){
  
  document.getElementById("executjs").style.display= "none";
  document.getElementById("executprompt").style.display= "none";
  document.getElementById("executjq").style.display= "none";
  document.getElementById("executphp").style.display= "none";
  // hide all code's button
  document.getElementById("resultjs").style.display= "none";
  document.getElementById("resultprompt").style.display= "none";
  document.getElementById("resultjq").style.display= "none";
  document.getElementById("resultphp").style.display= "none";
  document.getElementById('form-group').style.display= "block";
  document.getElementById('FormPhp').style.display= "block";


  // show the one clicked 
  document.getElementById(div_name).style.display= "block";
  document.getElementById(btn_name).style.display= "block";
  document.getElementById(Phpform).style.display= "none";
  // show the form and the results if div_jsprompt is disabled
  document.getElementById("execut").style.display= "block";
  document.getElementById("form").style.display= "block";

}




