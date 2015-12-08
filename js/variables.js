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
  if (currentpage===viewpost && newpage!==viewpost){
    upvoteBtnLg.removeEventListener('click',function(){viewPostUpvote(post);},false);
    downvoteBtnLg.removeEventListener('click',function(){viewPostDownvote(post);},false);
    upvoteBtnXS.removeEventListener('click',function(){viewPostUpvote(post);},false);
    downvoteBtnXS.removeEventListener('click',function(){viewPostDownvote(post);},false);
    ////Remove eventlisteners here
  }
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
  viewpostentryURL.setAttribute('href',post.url);
  updateViewContents(viewpostupvotecountlg,post.upvotecount);
  updateViewContents(viewpostdownvotecountlg,post.downvotecount);
  updateViewContents(viewpostupvotecountxs,post.upvotecount);
  updateViewContents(viewpostdownvotecountxs,post.downvotecount);
  updateViewContents(viewpostcontent,post.content);
  upvoteBtnLg = document.getElementById('upvoteBtnLg');
  downvoteBtnLg = document.getElementById('downvoteBtnLg');
  upvoteBtnXS = document.getElementById('upvoteBtnXS');
  downvoteBtnXS = document.getElementById('downvoteBtnXS');
  viewPostUpvote = function(post){
    console.log('upvote view a post');
    upvote(post);
    updateViewContents(viewpostupvotecountlg,post.upvotecount);
    updateViewContents(viewpostdownvotecountlg,post.downvotecount);
    updateViewContents(viewpostupvotecountxs,post.upvotecount);
    updateViewContents(viewpostdownvotecountxs,post.downvotecount);
  }
  viewPostDownvote = function(post){
    console.log('downvote view a post');
    downvote(post);
    updateViewContents(viewpostupvotecountlg,post.upvotecount);
    updateViewContents(viewpostdownvotecountlg,post.downvotecount);
    updateViewContents(viewpostupvotecountxs,post.upvotecount);
    updateViewContents(viewpostdownvotecountxs,post.downvotecount);
  }
  upvoteBtnLg.addEventListener('click',function(){viewPostUpvote(post);},false);
  downvoteBtnLg.addEventListener('click',function(){viewPostDownvote(post);},false);
  upvoteBtnXS.addEventListener('click',function(){viewPostUpvote(post);},false);
  downvoteBtnXS.addEventListener('click',function(){viewPostDownvote(post);},false);
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
  this.voted=voted;
  this.totalpopularity = function(){return this.upvotecount-this.downvotecount};
}
var entries = []
entries[0] = new Entry(0,titleEntryA,contentEntryA,urlEntryA,upvotecountEntryA,downvotecountEntryA,datecreatedEntryA,votedEntryB);
entries[1] = new Entry(0,titleEntryB,contentEntryB,urlEntryB,600,200,new Date(2015, 10, 28),votedEntryB);
entries[2] = new Entry(0,'Voluptatem Sequi C',contentEntryC,urlEntryC,500,100,new Date(2015, 10, 27),votedEntryC);
entries[3] = new Entry(0,'Magnam Aliquam D',contentEntryC,urlEntryC,345,213,new Date(2015, 10, 26),votedEntryC);
entries[4] = new Entry(0,'Dicta sunt Explicabo E',contentEntryC,urlEntryC,57,43,new Date(2015, 10, 25),votedEntryC);
entries[5] = new Entry(0,'Doloremque Laudantium F',contentEntryC,urlEntryC,32,363,new Date(2015, 10, 24),votedEntryC);
entries[6] = new Entry(0,'Aliquid ex ea commodi consequatur? G',contentEntryC,urlEntryC,23,56,new Date(2015, 10, 23),votedEntryC);
entries[7] = new Entry(0,'Totam rem aperiam H',contentEntryC,urlEntryC,6,788,new Date(2015, 10, 22),votedEntryC);
entries[8] = new Entry(0,'Qui ratione voluptatem sequi nesciunt I',contentEntryC,urlEntryC,42,567,new Date(2015, 10, 21),votedEntryC);
entries[9] = new Entry(0,'Lorem Ipsum J',contentEntryC,urlEntryC,35,7988,new Date(2015, 10, 20),votedEntryC);

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

function Post(entry) {
  this.post = entry;
  this.documentTitle = document.getElementById('post'+entry.position+'title');
  this.documentContent = document.getElementById('post'+entry.position+'content');
  this.documentUpvotecount = document.getElementById('post'+entry.position+'upvotecount');
  this.documentDownvotecount = document.getElementById('post'+entry.position+'downvotecount');
  this.postUpvoteBtn = document.getElementById('post'+entry.position+'upvote');
  this.postDownvoteBtn = document.getElementById('post'+entry.position+'downvote');
}

var postContents = [];
generatePosts = function() {
  for (var i = 0; i < 10; i++) {
    postContents[i] = new Post(entries[i]);
  };
}
generatePosts();

function fillPosts() {
  for (var i = 0; i < postContents.length; i++) {
    var count=0;
    postContents[i].documentTitle.appendChild(document.createTextNode(entries[i].title));
    postContents[i].documentContent.appendChild(document.createTextNode(postContents[i].post.content));
    var upvotesText=document.createTextNode(' '+postContents[i].post.upvotecount);
    postContents[i].documentUpvotecount.appendChild(upvotesText);
    var downvotesText=document.createTextNode(' '+postContents[i].post.downvotecount);
    postContents[i].documentDownvotecount.appendChild(downvotesText);
    addPostListeners = function(k) {
      postContents[k].documentTitle.addEventListener('click',function() {viewapost(entries[k]);},false);
      postContents[k].postUpvoteBtn.addEventListener('click',function(){upvote(entries[k]);},false);
      postContents[k].postDownvoteBtn.addEventListener('click',function() {downvote(entries[k]);},false);
      count++;
      console.log('adding listeners'+count);
    }
    addPostListeners(i);
  };
}
fillPosts(); 

function refreshPosts() {
  for (var i = 0; i < postContents.length; i++) {
    postContents[i].documentTitle.removeChild(postContents[i].documentTitle.lastChild);
    postContents[i].documentContent.removeChild(postContents[i].documentContent.lastChild);
    postContents[i].documentUpvotecount.removeChild(postContents[i].documentUpvotecount.lastChild);
    postContents[i].documentDownvotecount.removeChild(postContents[i].documentDownvotecount.lastChild);
    removePostListeners = function(k) { ////Can't remove event listeners within themselves
      postContents[k].documentTitle.removeEventListener('click',function() {viewapost(entries[k]);},false);
      postContents[k].postUpvoteBtn.removeEventListener('click',function(){upvote(entries[k]);},false);
      postContents[k].postDownvoteBtn.removeEventListener('click',function() {downvote(entries[k]);},false);
    }
    removePostListeners(i);
  };
  compareAllEntries();
  generatePosts();
  fillPosts();
}

upvote = function(post) {
  if(post.voted==='none') {
    post.voted='up';
    post.upvotecount+=1;
    console.log('upvote');
    refreshPosts();
  }
  if(post.voted==='down') {
    post.voted='up';
    post.upvotecount+=1;
    post.downvotecount-=1;
    console.log('change to upvote');
    refreshPosts();
  }
}
downvote = function(post){
  if(post.voted==='none') {
    post.voted='down';
    post.downvotecount+=1;
    console.log('downvote');
    refreshPosts();
  }
  if(post.voted==='up') {
    post='down';
    post.downvotecount+=1;
    post.upvotecount-=1;
    console.log('change to downvote');
    refreshPosts();
  }
}

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


  //var downvotesToEmpty = document.getElementById(downvoteid);
  //var downvotesToEmptyContainer = downvotesToEmpty.parentNode;
  //downvotesToEmptyContainer.removeChild(downvotesToEmpty);
  //var downvotecountElement = document.createElement('span');
  //downvotecountElement.setAttribute('id',downvoteid);
  //var downvotecountText = document.createTextNode(' '+post.downvotecount);
  //downvotecountElement.appendChild(downvotecountText);
  //downvotesToEmptyContainer.appendChild(downvotecountElement);

  //var upvotesToEmpty = document.getElementById(upvoteid);
  //var upvotesToEmptyContainer = upvotesToEmpty.parentNode;
  //upvotesToEmptyContainer.removeChild(upvotesToEmpty);
  //var upvotecountElement = document.createElement('span');
  //upvotecountElement.setAttribute('id',upvoteid);
  //var upvotecountText = document.createTextNode(' '+post.upvotecount);
  //upvotecountElement.appendChild(upvotecountText);
  //upvotesToEmptyContainer.appendChild(upvotecountElement);