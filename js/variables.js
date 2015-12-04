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
  currentpage.classList.remove('show');
  currentpage.classList.add('hidden');
  newpage.classList.remove('hidden');
  newpage.classList.add('show');
  currentpage = newpage;
}

//Footer Background Image Scaling
function backgroundHeight(idname) {
    var background = document.getElementById(idname);
    width = background.clientWidth;
    height = ((width/2484)*185)+'px';
    background.style.height = height;
  }
backgroundHeight('headerimage');
window.addEventListener('resize',function(){backgroundHeight('headerimage');},false);

//View Post Adjustments
function setHeightOfVotebox() {
    var titleheight = document.getElementById('titleheight').clientHeight;
    titleheight = titleheight+'px';
    document.getElementById('voteboxheight').style.height = titleheight;
  }
window.addEventListener('resize',function(){setHeightOfVotebox()},false);

var viewposttitle = document.getElementById('viewposttitle');
var viewpostentryURL = document.getElementById('viewpostentryURL');
var viewpostupvotecountlg = document.getElementById('viewpostupvotecountlg');
var viewpostdownvotecountlg = document.getElementById('viewpostdownvotecountlg');
var viewpostupvotecountxs = document.getElementById('viewpostupvotecountxs');
var viewpostdownvotecountxs = document.getElementById('viewpostdownvotecountxs');
var viewpostcontent = document.getElementById('viewpostcontent');

function updateViewContents(partToUpdate,postportion) {
  partToUpdate.removeChild(partToUpdate.firstChild);
  var newtext = document.createTextNode(postportion);
  partToUpdate.appendChild(newtext);
}

function viewapost(post) {
  updateViewContents(viewposttitle,post.title);
  updateViewContents(viewpostentryURL,post.url);
  updateViewContents(viewpostupvotecountlg,post.upvotecount);
  updateViewContents(viewpostdownvotecountlg,post.downvotecount);
  updateViewContents(viewpostupvotecountxs,post.upvotecount);
  updateViewContents(viewpostdownvotecountxs,post.downvotecount);
  updateViewContents(viewpostcontent,post.content);
  loadsegment(viewpost);
  setHeightOfVotebox();
}

//Hamburger menu
hamburgerlinks.addEventListener('click',function() {hamburgerlinks.alterVisibility();},false);
homelink.addEventListener('click',function() {loadsegment(listofposts)},false);
listofpostslink.addEventListener('click',function() {loadsegment(listofposts)},false);
newpostlink.addEventListener('click',function() {loadsegment(newpost)},false);
usingthissitelink.addEventListener('click',function() {loadsegment(usingthissite)},false);



//Generating Posts
//Normally, this data would be user-generated and stored in a separate file.
var titleEntryA = 'We should go to the moon again';
var contentEntryA = 'We should totally go to the moon again! Check out how cool the Apollo missions were in this great piece. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';
var urlEntryA = 'https://en.wikipedia.org/wiki/Test';
var upvotecountEntryA = 998;
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
var entries = []
entries[0] = new Entry(0,titleEntryA,contentEntryA,urlEntryA,upvotecountEntryA,downvotecountEntryA,datecreatedEntryA,votedEntryB);
entries[1] = new Entry(0,titleEntryB,contentEntryB,urlEntryB,602,204,new Date(2015, 10, 28),votedEntryB);
entries[2] = new Entry(0,'Voluptatem Sequi C',contentEntryC,urlEntryC,123,234,new Date(2015, 10, 27),votedEntryC);
entries[3] = new Entry(0,'Magnam Aliquam D',contentEntryC,urlEntryC,345,213,new Date(2015, 10, 26),votedEntryC);
entries[4] = new Entry(0,'Dicta sunt Explicabo E',contentEntryC,urlEntryC,57,43,new Date(2015, 10, 25),votedEntryC);
entries[5] = new Entry(0,'Doloremque Laudantium F',contentEntryC,urlEntryC,32,363,new Date(2015, 10, 24),votedEntryC);
entries[6] = new Entry(0,'Aliquid ex ea commodi consequatur? G',contentEntryC,urlEntryC,23,56,new Date(2015, 10, 23),votedEntryC);
entries[7] = new Entry(0,'Totam rem aperiam H',contentEntryC,urlEntryC,6,788,new Date(2015, 10, 22),votedEntryC);
entries[8] = new Entry(0,'Qui ratione voluptatem sequi nesciunt I',contentEntryC,urlEntryC,42,567,new Date(2015, 10, 21),votedEntryC);
entries[9] = new Entry(0,'Lorem Ipsum J',contentEntryC,urlEntryC,35,7988,new Date(2015, 10, 20),votedEntryC);

//Change Post Ranking
function compareTwoEntries(firstEntry,secondEntry) {
  if (firstEntry!==secondEntry) {
    if (firstEntry.totalpopularity>secondEntry.totalpopularity) {
      secondEntry.position+=1;
    }
    else if (firstEntry.totalpopularity===secondEntry.totalpopularity) {
      if (firstEntry.datecreated>secondEntry.datecreated) {
        secondEntry.position+=1;
      }
    }
    else {

    }
  }
}
function compareAllEntries() {
  for (var k = 0; k < entries.length; k++) {
    for (var j = 0; j < entries.length; j++) {
        compareTwoEntries(entries[k],entries[j]);
    }; 
  };
}
var postContents = [];
function convertToPost(entry) {
  for (var i = 0; i < 10; i++) {
    if(entry.position===i) {
      postContents[i]=entry;
    };
  };
}
function convertAllEntries() {
  for (var m = 0; m < 10; m++) {
    convertToPost(entries[m]);
  };
}
function rankAndConvertEntries() {
  compareAllEntries();
  convertAllEntries();
  ////Refresh posts would go here
}
rankAndConvertEntries();

//Generating Posts.
function Post(post) {
  this.post = post;
  this.documentTitle = document.getElementById('post'+post.position+'title');
  this.documentContent = document.getElementById('post'+post.position+'content');
  this.documentUpvotecount = document.getElementById('post'+post.position+'upvotecount');
  this.documentDownvotecount = document.getElementById('post'+post.position+'downvotecount');
  this.documentTitle.addEventListener('click',function() {viewapost(post)},false);
}

var documentPost = [];
for (var i = 0; i < postContents.length; i++) {
  documentPost[i] = new Post(postContents[i]);
};

function fillpost(documentPost) {
  documentPost.documentTitle.appendChild(document.createTextNode(documentPost.post.title));
  documentPost.documentContent.appendChild(document.createTextNode(documentPost.post.content));
  documentPost.documentContent.appendChild(document.createTextNode(documentPost.post.content));
  var upvotesText=document.createTextNode(' '+documentPost.post.upvotecount);
  documentPost.documentUpvotecount.appendChild(upvotesText);
  var downvotesText=document.createTextNode(' '+documentPost.post.downvotecount);
  documentPost.documentDownvotecount.appendChild(downvotesText);
}

for (var i = 0; i < documentPost.length; i++) {
  fillpost(documentPost[i]);
};


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

function VoteButtons(post) {
  this.postupvote = document.getElementById('post'+post.position+'upvote');
  this.postdownvote = document.getElementById('post'+post.position+'downvote');
  this.postupvote.addEventListener('click',function(){upvote(post,'post'+post.position+'upvotecount','post'+post.position+'downvotecount')},false);
  this.postdownvote.addEventListener('click',function() {downvote(post,'post'+post.position+'upvotecount','post'+post.position+'downvotecount')},false);
}

var postVoteButtons = [];
for (var i = 0; i < postContents.length; i++) {
  postVoteButtons[i] = new VoteButtons(postContents[i]);
};



/*
//When a new entry is created, the following information will be stored:
function Entry(entrytitle,entryurl,author,incomplete,biased,complex,nocitations,keywords) {
  this.entrytitle = entrytitle;
  this.entryurl = entryurl;
  this.author = author;
  this.incomplete = incomplete;
  this.biased = biased;
  this.complex = complex;
  this.nocitations = nocitations;
  this.keywords = keywords;
*/