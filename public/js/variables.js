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

//Navigation
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

//Hamburger menu
hamburgerlinks.addEventListener('click',function() {hamburgerlinks.alterVisibility();},false);
homelink.addEventListener('click',function() {loadsegment(listofposts)},false);
listofpostslink.addEventListener('click',function() {loadsegment(listofposts)},false);
newpostlink.addEventListener('click',function() {loadsegment(newpost)},false);
usingthissitelink.addEventListener('click',function() {loadsegment(usingthissite)},false);

//Footer Background Image Scaling
function backgroundHeight(idname) {
    var background = document.getElementById(idname);
    width = background.clientWidth;
    height = ((width/2484)*185)+'px';
    background.style.height = height;
  }
backgroundHeight('headerimage');
window.addEventListener('resize',function(){backgroundHeight('headerimage');},false);



//Generating Posts
//----------------------------------------------------------------------
//Normally, this data would be user-generated and stored in a separate file (with the exception of the constructor)
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

/*
When a new entry is created, the following information will be stored:
function Entry(entrytitle,entryurl,author,incomplete,biased,complex,nocitations,keywords) {
  this.position=0;
  this.title=title;
  this.content=content;
  this.upvotecount=0;
  this.downvotecount=0;
  this.datecreated=new Date();
  this.entrytitle = entrytitle;
  this.url = url;
  this.author = author;
  this.incomplete = incomplete;
  this.biased = biased;
  this.complex = complex;
  this.nocitations = nocitations;
  this.keywords = keywords;
  //this.voted=voted; would be unique to individual users
*/

//Entry
function Entry(position, title, content, url, upvotecount, downvotecount, datecreated, voted){
  this.position=position;
  this.title=title;
  this.content=content;
  this.url=url;
  this.upvotecount=upvotecount;
  this.downvotecount=downvotecount;
  this.datecreated=datecreated;
  this.voted=voted;
  this.totalpopularity = function(){return this.upvotecount-this.downvotecount};
}
var entries = []
entries[0] = new Entry(0,titleEntryA,contentEntryA,urlEntryA,upvotecountEntryA,downvotecountEntryA,datecreatedEntryA,votedEntryB);
entries[1] = new Entry(0,titleEntryB,contentEntryB,urlEntryB,600,200,new Date(2015, 10, 28),votedEntryB);
entries[2] = new Entry(0,'Voluptatem Sequic',contentEntryC,urlEntryC,500,100,new Date(2015, 10, 27),votedEntryC);
entries[3] = new Entry(0,'Magnam Aliquamd',contentEntryC,urlEntryC,345,213,new Date(2015, 10, 26),votedEntryC);
entries[4] = new Entry(0,'Dicta sunt Explicaboe',contentEntryC,urlEntryC,57,43,new Date(2015, 10, 25),votedEntryC);
entries[5] = new Entry(0,'Doloremque Laudantiumf',contentEntryC,urlEntryC,32,363,new Date(2015, 10, 24),votedEntryC);
entries[6] = new Entry(0,'Aliquid ex ea commodi consequatur?g',contentEntryC,urlEntryC,23,56,new Date(2015, 10, 23),votedEntryC);
entries[7] = new Entry(0,'Totam rem aperiamh',contentEntryC,urlEntryC,6,788,new Date(2015, 10, 22),votedEntryC);
entries[8] = new Entry(0,'Qui ratione voluptatem sequi nesciunti',contentEntryC,urlEntryC,42,567,new Date(2015, 10, 21),votedEntryC);
entries[9] = new Entry(0,'Lorem Ipsumj',contentEntryC,urlEntryC,35,7988,new Date(2015, 10, 20),votedEntryC);
//End Post Data (would normally be in a separate file)
//----------------------------------------------------------------------

//Change Post Ranking
compareAllEntries = function() {
  for (var j = 0; j < entries.length; j++) {
    entries[j].position = 0;
  };
  for (var i = 0; i < entries.length; i++) {
    for (var k= 0; k < entries.length; k++) {
      if(entries[i]!==entries[k]){
        if(entries[i].totalpopularity()>entries[k].totalpopularity()) {
          entries[k].position++;
        }
        if((entries[i].totalpopularity()==entries[k].totalpopularity()) && (entries[i].datecreated>entries[k].datecreated)) {
          entries[k].position++;
        }
      }
    };
  };
}
compareAllEntries();

//Generate Posts
function GeneratePosts() {
  this.postUpvoteBtn = document.getElementById('post'+i+'upvote');
  this.postDownvoteBtn = document.getElementById('post'+i+'downvote');
  this.documentTitle = document.getElementById('post'+i+'title');
  this.documentContent = document.getElementById('post'+i+'content');
  this.documentUpvotecount = document.getElementById('post'+i+'upvotecount');
  this.documentDownvotecount = document.getElementById('post'+i+'downvotecount');
  this.post = '';
  var self = this;
  this.documentTitle.addEventListener('click',function(){eventViewPost(self);},false);
  this.postUpvoteBtn.addEventListener('click',function(){upvoteViewPosts(self);},false);
  this.postDownvoteBtn.addEventListener('click',function(){downvoteViewPosts(self);},false);
}

var postToView;
eventViewPost = function(self) {
    postToView = self.post;
    viewapost(self.post);
  }
upvoteViewPosts = function(self) {
  upvote(self.post);
  refreshPosts();
}
downvoteViewPosts = function(self) {
  downvote(self.post);
  refreshPosts();
}

var posts = [];
for (var i = 0; i < 10; i++) {
  posts[i] = new GeneratePosts;
};

function assignPostContent() {
  for (var i = 0; i < entries.length; i++) {
    var rank = entries[i].position;
    if (rank<11) {
      posts[rank].post = entries[i];
    };
  };
}
assignPostContent();

function fillPosts(i) {
  for (var i = 0; i < 10; i++) {
    posts[i].documentTitle.appendChild(document.createTextNode(posts[i].post.title));
    posts[i].documentContent.appendChild(document.createTextNode(posts[i].post.content));
    var upvotesText=document.createTextNode(' '+posts[i].post.upvotecount);
    posts[i].documentUpvotecount.appendChild(upvotesText);
    var downvotesText=document.createTextNode(' '+posts[i].post.downvotecount);
    posts[i].documentDownvotecount.appendChild(downvotesText);
  };
}
fillPosts();

function refreshPosts() {
  for (var i = 0; i < posts.length; i++) {
    posts[i].documentTitle.removeChild(posts[i].documentTitle.lastChild);
    posts[i].documentContent.removeChild(posts[i].documentContent.lastChild);
    posts[i].documentUpvotecount.removeChild(posts[i].documentUpvotecount.lastChild);
    posts[i].documentDownvotecount.removeChild(posts[i].documentDownvotecount.lastChild);
  };
  compareAllEntries();
  assignPostContent();
  fillPosts();
}

upvote = function(entry) {
  if(entry.voted==='none') {
    entry.voted='up';
    entry.upvotecount+=1;
  }
  if(entry.voted==='down') {
    entry.voted='up';
    entry.upvotecount+=1;
    entry.downvotecount-=1;
  }
}
downvote = function(entry){
  if(entry.voted==='none') {
    entry.voted='down';
    entry.downvotecount+=1;
  }
  if(entry.voted==='up') {
    entry.voted='down';
    entry.downvotecount+=1;
    entry.upvotecount-=1;
  }
}

//View Post Adjustments
function setHeightOfVotebox() {
    var titleheight = document.getElementById('titleheight').clientHeight;
    titleheight = titleheight+'px';
    document.getElementById('voteboxheight').style.height = titleheight;
  }
window.addEventListener('resize',function(){setHeightOfVotebox()},false);

viewPostUpvote = function(){
  upvote(postToView);
  updateViewContents(viewpostupvotecountlg,postToView.upvotecount);
  updateViewContents(viewpostdownvotecountlg,postToView.downvotecount);
  updateViewContents(viewpostupvotecountxs,postToView.upvotecount);
  updateViewContents(viewpostdownvotecountxs,postToView.downvotecount);
  refreshPosts();
}
viewPostDownvote = function(){
  downvote(postToView);
  updateViewContents(viewpostupvotecountlg,postToView.upvotecount);
  updateViewContents(viewpostdownvotecountlg,postToView.downvotecount);
  updateViewContents(viewpostupvotecountxs,postToView.upvotecount);
  updateViewContents(viewpostdownvotecountxs,postToView.downvotecount);
  refreshPosts();
}

var viewposttitle = document.getElementById('viewposttitle');
var viewpostentryURL = document.getElementById('viewpostentryURL');
var viewpostupvotecountlg = document.getElementById('viewpostupvotecountlg');
var viewpostdownvotecountlg = document.getElementById('viewpostdownvotecountlg');
var viewpostupvotecountxs = document.getElementById('viewpostupvotecountxs');
var viewpostdownvotecountxs = document.getElementById('viewpostdownvotecountxs');
var viewpostcontent = document.getElementById('viewpostcontent');
var upvoteBtnLg = document.getElementById('upvoteBtnLg');
var downvoteBtnLg = document.getElementById('downvoteBtnLg');
var upvoteBtnXS = document.getElementById('upvoteBtnXS');
var downvoteBtnXS = document.getElementById('downvoteBtnXS');
upvoteBtnLg.addEventListener('click',viewPostUpvote,false);
downvoteBtnLg.addEventListener('click',viewPostDownvote,false);
upvoteBtnXS.addEventListener('click',viewPostUpvote,false);
downvoteBtnXS.addEventListener('click',viewPostDownvote,false);

function updateViewContents(partToUpdate,postportion) {
  partToUpdate.removeChild(partToUpdate.firstChild);
  var newtext = document.createTextNode(postportion);
  partToUpdate.appendChild(newtext);
}

function viewapost(post) {
  updateViewContents(viewposttitle,post.title);
  updateViewContents(viewpostentryURL,post.url);
  viewpostentryURL.setAttribute('href',post.url);
  updateViewContents(viewpostupvotecountlg,post.upvotecount);
  updateViewContents(viewpostdownvotecountlg,post.downvotecount);
  updateViewContents(viewpostupvotecountxs,post.upvotecount);
  updateViewContents(viewpostdownvotecountxs,post.downvotecount);
  updateViewContents(viewpostcontent,post.content);
  loadsegment(viewpost);
  setHeightOfVotebox();
}