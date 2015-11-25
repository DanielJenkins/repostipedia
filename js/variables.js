var titleheight = document.getElementById('titleheight').clientHeight;

function setHeight(newheight) {
  document.getElementById('voteboxheight').style.height = newheight;
}
window.onload = setHeight(titleheight+'px');


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