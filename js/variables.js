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
var viewpostlink1 = document.getElementById('viewpostlink1');
var viewpostlink2 = document.getElementById('viewpostlink2');
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

//View Post Title Adjustments
function viewposts(theNewpage) {
  loadsegment(theNewpage);
  var titleheight = document.getElementById('titleheight').clientHeight;
  function setHeight(newheight) {
    document.getElementById('voteboxheight').style.height = newheight;
  }
  window.onload = setHeight(titleheight+'px');
  console.log('visual load!');
}

hamburgerlinks.addEventListener('click',function() {hamburgerlinks.alterVisibility();},false);
homelink.addEventListener('click',function() {loadsegment(listofposts)},false);
listofpostslink.addEventListener('click',function() {loadsegment(listofposts)},false);
newpostlink.addEventListener('click',function() {loadsegment(newpost)},false);
usingthissitelink.addEventListener('click',function() {loadsegment(usingthissite)},false);
viewpostlink1.addEventListener('click',function() {viewposts(viewpost)},false);
viewpostlink2.addEventListener('click',function() {viewposts(viewpost)},false);







//Normally, this data would be user-generated and stored in a separate file.
var titleEntryA = 'We should go to the moon again';
var contentEntryA = 'We should totally go to the moon again! Check out how cool the Apollo missions were in this great piece. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore';
var urlEntryA = 'https://en.wikipedia.org/wiki/Test';
var upvotecountEntryA = 999;
var downvotecountEntryA = 12;
var datecreatedEntryA = new Date(2015, 10, 30);
var votedEntryA='none';

var titleEntryB = 'Abraham Lincoln: The Greatest President in U.S. History';
var contentEntryB = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
var urlEntryB = 'https://en.wikipedia.org/wiki/Abraham_Lincoln';
var votedEntryB='none';

var titleEntryC = 'Lorem Ipsum';
var contentEntryC = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?';
var urlEntryC = 'https://en.wikipedia.org/wiki/Example';
var votedEntryC='none';


//Entry
function Entry(position, title, content, url, upvotecount, downvotecount, datecreated, voted){
  this.position=position;
  this.title=title;
  this.content=content;
  this.url=url;
  this.upvotecount=upvotecount;
  this.downvotecount=downvotecount;
  this.datecreated=datecreated;
  this.totalpopularity=upvotecount-downvotecount;
  this.voted=voted;
  this.upvote = function() {
    this.upvotecount += 1;
  }
  this.downvote = function() {
    this.downvotecount += 1;
  }
}
var entryA = new Entry(1,titleEntryA,contentEntryA,urlEntryA,upvotecountEntryA,downvotecountEntryA,datecreatedEntryA,votedEntryB);
var entryB = new Entry(1,titleEntryB,contentEntryB,urlEntryB,500,100,new Date(2015, 10, 28),votedEntryB);
var entryC = new Entry(1,titleEntryC+' 3',contentEntryC,urlEntryC,123,234,new Date(2015, 10, 27),votedEntryC);
var entryD = new Entry(1,titleEntryC+' 4',contentEntryC,urlEntryC,345,213,new Date(2015, 10, 26),votedEntryC);
var entryE = new Entry(1,titleEntryC+' 5',contentEntryC,urlEntryC,764,1,new Date(2015, 10, 25),votedEntryC);
var entryF = new Entry(1,titleEntryC+' 6',contentEntryC,urlEntryC,32,363,new Date(2015, 10, 24),votedEntryC);
var entryG = new Entry(1,titleEntryC+' 7',contentEntryC,urlEntryC,23,56,new Date(2015, 10, 23),votedEntryC);
var entryH = new Entry(1,titleEntryC+' 8',contentEntryC,urlEntryC,6,788,new Date(2015, 10, 22),votedEntryC);
var entryI = new Entry(1,titleEntryC+' 9',contentEntryC,urlEntryC,42,567,new Date(2015, 10, 21),votedEntryC);
var entryJ = new Entry(1,titleEntryC+' 10',contentEntryC,urlEntryC,35,7988,new Date(2015, 10, 20),votedEntryC);

////Code to change post position here
var post1 = entryA;
var post2 = entryB;
var post3 = entryC;
var post4 = entryD;
var post5 = entryE;
var post6 = entryF;
var post7 = entryG;
var post8 = entryH;
var post9 = entryI;
var post10 = entryJ;


//Generating Posts. Initiate Wall of Text! Could be handled with a constructor

function Post(postrank,postnumber) {
  this.postrank = postrank;
  this.title = document.getElementById('post'+postnumber+'title');
  this.content = document.getElementById('post'+postnumber+'content');
  this.upvotecount = document.getElementById('post'+postnumber+'upvotecount');
  this.downvotecount = document.getElementById('post'+postnumber+'downvotecount');
}
documentPost1 = new Post(post1,'1');
documentPost2 = new Post(post2,'2');
documentPost3 = new Post(post3,'3');
documentPost4 = new Post(post4,'4');
documentPost5 = new Post(post5,'5');
documentPost6 = new Post(post6,'6');
documentPost7 = new Post(post7,'7');
documentPost8 = new Post(post8,'8');
documentPost9 = new Post(post9,'9');
documentPost10 = new Post(post10,'10');

function fillpost(documentPost) {
  documentPost.title.appendChild(document.createTextNode(documentPost.postrank.title));
  documentPost.content.appendChild(document.createTextNode(documentPost.postrank.content));
  var upvotesText=document.createTextNode(' '+documentPost.postrank.upvotecount);
  documentPost.upvotecount.appendChild(upvotesText);
  var downvotesText=document.createTextNode(' '+documentPost.postrank.downvotecount);
  documentPost.downvotecount.appendChild(downvotesText);
}

fillpost(documentPost1);
fillpost(documentPost2);
fillpost(documentPost3);
fillpost(documentPost4);
fillpost(documentPost5);
fillpost(documentPost6);
fillpost(documentPost7);
fillpost(documentPost8);
fillpost(documentPost9);
fillpost(documentPost10);


//Voting
function refreshvotes(post,upvoteid,downvoteid) {
  var downvotesToEmpty = document.getElementById(downvoteid);
  var downvotesToEmptyContainer = downvotesToEmpty.parentNode;
  downvotesToEmptyContainer.removeChild(downvotesToEmpty);
  var downvotecountElement = document.createElement('span');
  downvotecountElement.setAttribute('id',downvoteid);
  var downvotecountText = document.createTextNode(' '+post.downvotecount);
  downvotecountElement.appendChild(downvotecountText);
  downvotesToEmptyContainer.appendChild(downvotecountElement);

  var upvotesToEmpty = document.getElementById(upvoteid);
  var upvotesToEmptyContainer = upvotesToEmpty.parentNode;
  upvotesToEmptyContainer.removeChild(upvotesToEmpty);
  var upvotecountElement = document.createElement('span');
  upvotecountElement.setAttribute('id',upvoteid);
  var upvotecountText = document.createTextNode(' '+post.upvotecount);
  upvotecountElement.appendChild(upvotecountText);
  upvotesToEmptyContainer.appendChild(upvotecountElement);
}

function upvote(post,upvoteid,downvoteid) {
  if(post.voted==='none') {
    post.voted='up';
    post.upvotecount+=1;
    refreshvotes(post,upvoteid,downvoteid);
  }
  else if(post.voted==='down') {
    post.voted='up';
    post.upvotecount+=1;
    post.downvotecount-=1;
    refreshvotes(post,upvoteid,downvoteid);
  }
}

function downvote(post,upvoteid,downvoteid) {
  if(post.voted==='none') {
    post.voted='down';
    post.downvotecount+=1;
    refreshvotes(post,upvoteid,downvoteid);
  }
  else if(post.voted==='up') {
    post.voted='down';
    post.downvotecount+=1;
    post.upvotecount-=1;
    refreshvotes(post,upvoteid,downvoteid);
  }
}

var post1upvote = document.getElementById('post1upvote'); 
var post1downvote = document.getElementById('post1downvote');
post1upvote.addEventListener('click',function(){upvote(post1,'post1upvotecount','post1downvotecount')},false);
post1downvote.addEventListener('click',function() {downvote(post1,'post1upvotecount','post1downvotecount')},false);


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
*/