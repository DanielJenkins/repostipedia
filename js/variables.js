//Hamburger Button
var hamburgerbutton = document.getElementById('hamburgerbutton'); 
var hamburgerlinks = document.getElementById('hamburgerlinks');
hamburgerlinks.alterVisibility = function changevisibility() {
  if(this.style.visibility == "visible") {
    this.style.visibility="hidden";
  }
  else {
    this.style.visibility="visible";
  }
}
hamburgerbutton.addEventListener('click',function() {hamburgerlinks.alterVisibility();},false);


//Hamburger Navigation
var homelink = document.getElementById('homelink');
var newpostlink = document.getElementById('newpostlink');
var listofpostslink = document.getElementById('listofpostslink');
var usingthissitelink = document.getElementById('usingthissitelink');

var newpost = document.getElementById('newpost');
var viewpost = document.getElementById('viewpost');
var listofposts = document.getElementById('listofposts');
var usingthissite = document.getElementById('usingthissite');

var currentpage = listofposts;
var newpage = 'empty';
function loadsegment(theNewpage) {
  newpage = theNewpage;
  console.log('changing!');
  currentpage.classList.remove('show');
  currentpage.classList.add('hidden');
  newpage.classList.remove('hidden');
  newpage.classList.add('show');
  currentpage = newpage;
}

hamburgerlinks.addEventListener('click',function() {hamburgerlinks.alterVisibility();},false);
homelink.addEventListener('click',function() {loadsegment(listofposts)},false);
listofpostslink.addEventListener('click',function() {loadsegment(listofposts)},false);
newpostlink.addEventListener('click',function() {loadsegment(newpost)},false);
usingthissitelink.addEventListener('click',function() {loadsegment(usingthissite)},false);


//View Post Title Adjustments
var titleheight = document.getElementById('titleheight').clientHeight;

function setHeight(newheight) {
  document.getElementById('voteboxheight').style.height = newheight;
}
window.onload = setHeight(titleheight+'px');


//Entry
function Entry(position, title, content, upvotecount, downvotecount, datecreated){
  this.position=position;
  this.title=title;
  this.content=content;
  this.upvotecount=upvotecount;
  this.downvotecount=downvotecount;
  this.datecreated=datecreated;
  this.post1totalpopularity=upvotecount-downvotecount;
  this.upvote = function() {
    this.upvotecount += 1;
  }
  this.downvote = function() {
    this.downvotecount += 1;
  }
}

//Normally, this data would be user generated and stored in a separate file.
var titleEntryA = 'We should go to the moon again';
var contentEntryA = 'We should totally go to the moon again! Check out how cool the Apollo missions were in this great piece. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore';
var upvotecountEntryA = 999;
var downvotecountEntryA = 12;
var datecreatedEntryA = new Date();







//note only
 var d = new Date();
 d.setDate(d.getDate()-5);





//Post1
var post1title = document.getElementById('post1title'); 
var post1content = document.getElementById('post1content'); 
var post1upvotecount = document.getElementById('post1upvotecount'); 
var post1downvotecount = document.getElementById('post1downvotecount'); 

post1title.appendChild(post1.title);
post1content.appendChild(post1.content);
post1upvotecount.appendChild(post1.upvotecount);
post1downvotecount.appendChild(post1.downvotecount);

var post1upvote = document.getElementById('post1upvote'); 
var post1downvote = document.getElementById('post1downvote');
post1upvote.addEventListener('click',function() {post1.upvote();},false);
post1downvote.addEventListener('click',function() {hamburgerlinks.alterVisibility();},false);









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

var keywords = [null, null, null, null, null, null, null, null, null, null];
function Post(postheader,referencedentry,referencedentry,keywords,currentusersvote,upvotes,downvotes) {
  this.postheader = postheader;
  this.referencedentry = referencedentry;
  this.keywords = keywords;
  this.currentusersvote = currentusersvote;
  this.upvotes = upvotes;
  this.downvotes = downvotes;
}

*/