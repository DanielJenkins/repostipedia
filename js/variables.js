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
var post1viewlink = document.getElementById('post1viewlink');
var post2viewlink = document.getElementById('post2viewlink');
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
post1viewlink.addEventListener('click',function() {viewposts(viewpost)},false);
post2viewlink.addEventListener('click',function() {viewposts(viewpost)},false);







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
var entryB = new Entry(1,titleEntryB,contentEntryB,urlEntryB,602,204,new Date(2015, 10, 28),votedEntryB);
var entryC = new Entry(1,'Voluptatem Sequi C',contentEntryC,urlEntryC,123,234,new Date(2015, 10, 27),votedEntryC);
var entryD = new Entry(1,'Magnam Aliquam D',contentEntryC,urlEntryC,345,213,new Date(2015, 10, 26),votedEntryC);
var entryE = new Entry(1,'Dicta sunt Explicabo E',contentEntryC,urlEntryC,57,43,new Date(2015, 10, 25),votedEntryC);
var entryF = new Entry(1,'Doloremque Laudantium F',contentEntryC,urlEntryC,32,363,new Date(2015, 10, 24),votedEntryC);
var entryG = new Entry(1,'Aliquid ex ea commodi consequatur? G',contentEntryC,urlEntryC,23,56,new Date(2015, 10, 23),votedEntryC);
var entryH = new Entry(1,'Totam rem aperiam H',contentEntryC,urlEntryC,6,788,new Date(2015, 10, 22),votedEntryC);
var entryI = new Entry(1,'Qui ratione voluptatem sequi nesciunt I',contentEntryC,urlEntryC,42,567,new Date(2015, 10, 21),votedEntryC);
var entryJ = new Entry(1,'Lorem Ipsum J',contentEntryC,urlEntryC,35,7988,new Date(2015, 10, 20),votedEntryC);

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
function compareManyEntries(entryToCompare) {
  compareTwoEntries(entryToCompare,entryA);
  compareTwoEntries(entryToCompare,entryB);
  compareTwoEntries(entryToCompare,entryC);
  compareTwoEntries(entryToCompare,entryD);
  compareTwoEntries(entryToCompare,entryE);
  compareTwoEntries(entryToCompare,entryF);
  compareTwoEntries(entryToCompare,entryG);
  compareTwoEntries(entryToCompare,entryH);
  compareTwoEntries(entryToCompare,entryI);
  compareTwoEntries(entryToCompare,entryJ);
}
function compareAllEntries(entryA,entryB,entryC,entryD,entryE,entryF,entryG,entryH,entryI,entryJ) {
  entryA.position=1;
  entryB.position=1;
  entryC.position=1;
  entryD.position=1;
  entryE.position=1;
  entryF.position=1;
  entryG.position=1;
  entryH.position=1;
  entryI.position=1;
  entryJ.position=1;
  compareManyEntries(entryA);
  compareManyEntries(entryB);
  compareManyEntries(entryC);
  compareManyEntries(entryD);
  compareManyEntries(entryE);
  compareManyEntries(entryF);
  compareManyEntries(entryG);
  compareManyEntries(entryH);
  compareManyEntries(entryI);
  compareManyEntries(entryJ);
}
var post1;
var post2;
var post3;
var post4;
var post5;
var post6;
var post7;
var post8;
var post9;
var post10;
function convertToPost(entry) {
  switch (entry.position) {
    case 1:
      post1=entry;
      break;
    case 2:
      post2=entry;
      break;
    case 3:
      post3=entry;
      break;
    case 4:
      post4=entry;
      break;
    case 5:
      post5=entry;
      break;
    case 6:
      post6=entry;
      break;
    case 7:
      post7=entry;
      break;
    case 8:
      post8=entry;
      break;
    case 9:
      post9=entry;
      break;
    case 10:
      post10=entry;
      break;
  }
}
function convertAllEntries(entryA,entryB,entryC,entryD,entryE,entryF,entryG,entryH,entryI,entryJ) {
  convertToPost(entryA);
  convertToPost(entryB);
  convertToPost(entryC);
  convertToPost(entryD);
  convertToPost(entryE);
  convertToPost(entryF);
  convertToPost(entryG);
  convertToPost(entryH);
  convertToPost(entryI);
  convertToPost(entryJ);
}
function rankAndConvertEntries(entryA,entryB,entryC,entryD,entryE,entryF,entryG,entryH,entryI,entryJ) {
  compareAllEntries(entryA,entryB,entryC,entryD,entryE,entryF,entryG,entryH,entryI,entryJ);
  convertAllEntries(entryA,entryB,entryC,entryD,entryE,entryF,entryG,entryH,entryI,entryJ);
  ////Refresh posts would go here
}
rankAndConvertEntries(entryA,entryB,entryC,entryD,entryE,entryF,entryG,entryH,entryI,entryJ);

//Generating Posts.
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

function VoteButtons(post,postnumber) {
  var post1upvote = document.getElementById('post'+postnumber+'upvote');
  var post1downvote = document.getElementById('post'+postnumber+'downvote');
  post1upvote.addEventListener('click',function(){upvote(post,'post'+postnumber+'upvotecount','post'+postnumber+'downvotecount')},false);
  post1downvote.addEventListener('click',function() {downvote(post,'post'+postnumber+'upvotecount','post'+postnumber+'downvotecount')},false);
}

var post1votebuttons = new VoteButtons(post1,1);
var post2votebuttons = new VoteButtons(post2,2);
var post3votebuttons = new VoteButtons(post3,3);
var post4votebuttons = new VoteButtons(post4,4);
var post5votebuttons = new VoteButtons(post5,5);
var post6votebuttons = new VoteButtons(post6,6);
var post7votebuttons = new VoteButtons(post7,7);
var post8votebuttons = new VoteButtons(post8,8);
var post9votebuttons = new VoteButtons(post9,9);
var post10votebuttons = new VoteButtons(post10,10);




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


/* Template for HTML List elements - replace X's and trailing space with 'post#'
<li class="list-group-item">
        <div class="row">
          <div class="col-xs-2 col-sm-1 text-center">
            <div class="row">
                <div class="col-xs-12 upvote" id="XXXXXXXXXXXXXXXXXXXXXXXXXXX upvote">
                  <span class="tallyup"><i class="fa fa-chevron-circle-up"></i></span>
                </div>
            </div>
            <div class="row">
              <a>
                <div class="col-xs-12 downvote" id="XXXXXXXXXXXXXXXXXXXXXXXXXXX downvote">
                  <span class="tallydown"><i class="fa fa-chevron-circle-down"></i></span>
                </div>
              </a>
            </div>
          </div>
          <div class="col-xs-10 col-sm-11 listright">
            <div class="row">
              <div class="col-xs-8 col-sm-8 col-md-8 col-lg-9" id="XXXXXXXXXXXXXXXXXXXXXXXXXXX viewlink">
                <a class="h4 subsubtitle" id="XXXXXXXXXXXXXXXXXXXXXXXXXXX title"></a>
              </div>
              <div class="col-xs-4 col-sm-4 col-md-4 col-lg-3 tally">
                <div class="row p">
                  <div class="col-xs-12 col-sm-6">
                    <div class="tallyup"><i class="fa fa-chevron-circle-up"></i><span id="XXXXXXXXXXXXXXXXXXXXXXXXXXX upvotecount"></span></div>
                  </div>
                  <div class="col-xs-12 col-sm-6">
                    <div class="tallydown"><i class="fa fa-chevron-circle-down"></i><span id="XXXXXXXXXXXXXXXXXXXXXXXXXXX downvotecount"></span></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-xs-12">
                <p class="p excerpt" id="XXXXXXXXXXXXXXXXXXXXXXXXXXX content"></p>
              </div>
            </div>
          </div>  
        </div>
      </li>
*/