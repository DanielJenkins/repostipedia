var titleheight = document.getElementById('titleheight').clientHeight;
console.log(titleheight);

function setHeight(newheight) {
  document.getElementById('voteboxheight').style.height = newheight;
}
window.onload = setHeight(titleheight+'px');
//window.onload = setHeight('100px');


//errors in this area
var hamburgerbutton = document.getElementById('hamburgerbutton'); 
var hamburgerlinks = document.getElementById('hamburgerlinks');

hamburgerlinks.alterVisibility = function changevisibility() {
  if(this.style.visibility == "visible") {
    this.style.visibility="hidden";
  }
  else {
    this.style.visibility="visible";
  }
  //INSERT PAGE REFRESH???
}


hamburgerbutton.addEventListener('click',function() {hamburgerlinks.alterVisibility();},false);


var homelink = document.getElementById('homelink');
var newpostlink = document.getElementById('newpostlink');
var listofpostslink = document.getElementById('listofpostslink');
var usingthissitelink = document.getElementById('usingthissitelink');

var newpost = document.getElementById('newpost');
var viewpost = document.getElementById('viewpost');
var listofposts = document.getElementById('listofposts');
var usingthissite = document.getElementById('usingthissite');

function loadsegment() {
  console.log('working');
  hamburgerlinks.style.visibility="hidden";
  newpost.style.visibility="hidden";
  viewpost.style.visibility="hidden";
  listofposts.style.visibility="hidden";
  usingthissite.style.visibility="hidden";
  this.style.visibility="visible";
}

hamburgerlinks.addEventListener('click',function() {hamburgerlinks.alterVisibility();},false);

homelink.addEventListener('click',function() {listofposts.loadsegment()},false);
listofpostslink.addEventListener('click',function() {listofposts.loadsegment()},false);
newpostlink.addEventListener('click',function() {newpost.loadsegment()},false);
usingthissitelink.addEventListener('click',function() {usingthissite.loadsegment()},false);





//var keywords = [null, null, null, null, null, null, null, null, null, null];

/*
function Entry(entrytitle,entryurl,author,incomplete,biased,complex,nocitations) {
  this.entrytitle = entrytitle;
  this.entryurl = entryurl;
  this.author = author;
  this.incomplete = incomplete;
  this.biased = biased;
  this.complex = complex;
  this.nocitations = nocitations;
}

function Post(postheader,referencedentry,referencedentry,keywords,currentusersvote,upvotes,downvotes) {
  this.postheader = postheader;
  this.referencedentry = referencedentry;
  this.keywords = keywords;
  this.currentusersvote = currentusersvote;
  this.upvotes = upvotes;
  this.downvotes = downvotes;
}

*/