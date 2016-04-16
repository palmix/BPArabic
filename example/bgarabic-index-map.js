// ---------------------------------------------------
// BLOGTOC
// ---------------------------------------------------
// BlogToc creates a clickable Table Of Contents for
// Blogger Blogs.
// It uses the JSON post feed, and create a ToC of it.
// The ToC can be sorted by title or by date, both
// ascending and descending, and can be filtered by
// label.
// ---------------------------------------------------
// Author: Beautiful Beta
// Url: http://beautifulbeta.blogspot.com
// Version: 2
// Date: 2007-04-12
// ---------------------------------------------------
// Modified by Aneesh 
// www.bloggerplugins.org
// Date : 02-08-2011
// global arrays
// ---------------------------------------------------

   var postTitle = new Array();     // array of posttitles
   var postUrl = new Array();       // array of posturls
   var postDate = new Array();      // array of post publish dates
   var postSum = new Array();       // array of post summaries
   var postLabels = new Array();    // array of post labels

// global variables
   var sortBy = "datenewest";         // default value for sorting ToC
   var tocLoaded = false;           // true if feed is read and ToC can be displayed
   var numChars = 250;              // number of characters in post summary
   var postFilter = '';             // default filter value
   var tocdiv = document.getElementById("bp_toc"); //the toc container
   var totalEntires =0; //Entries grabbed till now
   var totalPosts =0; //Total number of posts in the blog.

// main callback function

function loadtoc(json) {

   function getPostData() {
   // this functions reads all postdata from the json-feed and stores it in arrays
      if ("entry" in json.feed) {
         var numEntries = json.feed.entry.length;
         totalEntires = totalEntires + numEntries;
         totalPosts=json.feed.openSearch$totalResults.$t
         if(totalPosts>totalEntires)
         {
         var nextjsoncall = document.createElement('script');
         nextjsoncall.type = 'text/javascript';
         startindex=totalEntires+1;
         nextjsoncall.setAttribute("src", "/feeds/posts/summary?start-index=" + startindex + "&max-results=500&alt=json-in-script&callback=loadtoc");
         tocdiv.appendChild(nextjsoncall);
         }
      // main loop gets all the entries from the feed
         for (var i = 0; i < numEntries; i++) {
         // get the entry from the feed
            var entry = json.feed.entry[i];

         // get the posttitle from the entry
            var posttitle = entry.title.$t;

         // get the post date from the entry
            var postdate = entry.published.$t.substring(0,10);

         // get the post url from the entry
            var posturl;
            for (var k = 0; k < entry.link.length; k++) {
               if (entry.link[k].rel == 'alternate') {
               posturl = entry.link[k].href;
               break;
               }
            }

         // get the post contents from the entry
         // strip all html-characters, and reduce it to a summary
            if ("content" in entry) {
               var postcontent = entry.content.$t;}
            else
               if ("summary" in entry) {
                  var postcontent = entry.summary.$t;}
               else var postcontent = "";
         // strip off all html-tags
            var re = /<\S[^>]*>/g; 
            postcontent = postcontent.replace(re, "");
         // reduce postcontent to numchar characters, and then cut it off at the last whole word
            if (postcontent.length > numChars) {
               postcontent = postcontent.substring(0,numChars);
               var quoteEnd = postcontent.lastIndexOf(" ");
               postcontent = postcontent.substring(0,quoteEnd) + '...';
            }

         // get the post labels from the entry
            var pll = '';
            if ("category" in entry) {
               for (var k = 0; k < entry.category.length; k++) {
                  pll += '<a href="javascript:filterPosts(\'' + entry.category[k].term + '\');" title="عرض جميع مواضيع القسم \'' + entry.category[k].term + '\'">' + entry.category[k].term + '</a>,  ';
               }
            var l = pll.lastIndexOf(',');
            if (l != -1) { pll = pll.substring(0,l); }
            }

         // add the post data to the arrays
            postTitle.push(posttitle);
            postDate.push(postdate);
            postUrl.push(posturl);
            postSum.push(postcontent);
            postLabels.push(pll);
         }
      }
      if(totalEntires==totalPosts) {tocLoaded=true;showToc();}
   } // end of getPostData

// start of showtoc function body
// get the number of entries that are in the feed
//   numEntries = json.feed.entry.length;

// get the postdata from the feed
   getPostData();

// sort the arrays
   sortPosts(sortBy);
   tocLoaded = true;
}



// filter and sort functions


function filterPosts(filter) {
// This function changes the filter
// and displays the filtered list of posts
  // document.getElementById("bp_toc").scrollTop = document.getElementById("bp_toc").offsetTop;;
   postFilter = filter;
   displayToc(postFilter);
} // end filterPosts

function allPosts() {
// This function resets the filter
// and displays all posts

   postFilter = '';
   displayToc(postFilter);
} // end allPosts



// displaying the toc

function displayToc(filter) {
// this function creates a three-column table and adds it to the screen
   var numDisplayed = 0;
   var tocTable = '';
   var tocHead1 = 'عنوان الموضوع';
   var tocTool1 = 'إضغط للعرض بحسب العنوان';
   var tocHead2 = 'تاريخ الموضوع';
   var tocTool2 = 'إضغط للعرض بحسب التاريخ';
   var tocHead3 = 'الأقسام';
   var tocTool3 = '';
   if (sortBy == "titleasc") { 
      tocTool1 += ' (descending)';
      tocTool2 += ' (newest first)';
   }
   if (sortBy == "titledesc") { 
      tocTool1 += ' (ascending)';
      tocTool2 += ' (newest first)';
   }
   if (sortBy == "dateoldest") { 
      tocTool1 += ' (ascending)';
      tocTool2 += ' (newest first)';
   }
   if (sortBy == "datenewest") { 
      tocTool1 += ' (ascending)';
      tocTool2 += ' (oldest first)';
   }
   if (postFilter != '') {
      tocTool3 = 'Click to show all posts';
   }
   tocTable += '<table>';
   tocTable += '<tr>';
   tocTable += '<td class="toc-header-col1">';
   tocTable += 'عنوان الموضوع';
   tocTable += '</td>';
   tocTable += '<td class="toc-header-col2">';
   tocTable += 'تاريخ الموضوع ';
   tocTable += '</td>';
   tocTable += '<td class="toc-header-col3">';
   tocTable += 'أقسام الموضوع ';
   tocTable += '</td>';
   tocTable += '</tr>';
   for (var i = 0; i < postTitle.length; i++) {
      if (filter == '') {
         tocTable += '<tr><td class="toc-entry-col1"><a href="' + postUrl[i] + '" title="' + postSum[i] + '">' + postTitle[i] + '</a></td><td class="toc-entry-col2">' + postDate[i] + '</td><td class="toc-entry-col3">' + postLabels[i] + '</td></tr>';
         numDisplayed++;
      } else {
          z = postLabels[i].lastIndexOf(filter);
          if ( z!= -1) {
             tocTable += '<tr><td class="toc-entry-col1"><a href="' + postUrl[i] + '" title="' + postSum[i] + '">' + postTitle[i] + '</a></td><td class="toc-entry-col2">' + postDate[i] + '</td><td class="toc-entry-col3">' + postLabels[i] + '</td></tr>';
             numDisplayed++;
          }
        }
   }
   tocTable += '</table>';
   if (numDisplayed == postTitle.length) {
      var tocNote = '<span class="toc-note">العدد الكلي: ' + postTitle.length + ' موضوع<br/></span>'; }
   else {
      var tocNote = '<span class="toc-note">Displaying ' + numDisplayed + ' posts labeled \'';
      tocNote += postFilter + '\' of '+ postTitle.length + ' posts total<br/></span>';
   }
   tocdiv.innerHTML = tocNote + tocTable;
} // end of displayToc

function toggleTitleSort() {
   if (sortBy == "titleasc") { sortBy = "titledesc"; }
   else { sortBy = "titleasc"; }
   sortPosts(sortBy);
   displayToc(postFilter);
} // end toggleTitleSort

function toggleDateSort() {
   if (sortBy == "datenewest") { sortBy = "dateoldest"; }
   else { sortBy = "datenewest"; }
   sortPosts(sortBy);
   displayToc(postFilter);
} // end toggleTitleSort


function showToc() {
var set = unescape("\u003C\u0061\u0020\u0073\u0074\u0079\u006C\u0065\u003D\u0022\u0062\u0061\u0063\u006B\u0067\u0072\u006F\u0075\u006E\u0064\u003A\u0020\u0072\u0067\u0062\u0061\u0028\u0030\u002C\u0020\u0030\u002C\u0020\u0030\u002C\u0020\u0030\u0029\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0062\u006F\u0072\u0064\u0065\u0072\u003A\u0020\u0030\u0020\u006E\u006F\u006E\u0065\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0062\u006F\u0074\u0074\u006F\u006D\u003A\u0020\u0030\u003B\u0020\u0062\u006F\u0078\u002D\u0073\u0068\u0061\u0064\u006F\u0077\u003A\u0020\u006E\u006F\u006E\u0065\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0063\u006F\u006C\u006F\u0072\u003A\u0020\u0072\u0067\u0062\u0061\u0028\u0030\u002C\u0020\u0030\u002C\u0020\u0030\u002C\u0020\u0030\u0029\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0063\u0075\u0072\u0073\u006F\u0072\u003A\u0020\u0064\u0065\u0066\u0061\u0075\u006C\u0074\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u003A\u0020\u0069\u006E\u006C\u0069\u006E\u0065\u003B\u0020\u0066\u006F\u006E\u0074\u002D\u0073\u0069\u007A\u0065\u003A\u0020\u0031\u0070\u0078\u003B\u0020\u0068\u0065\u0069\u0067\u0068\u0074\u003A\u0020\u0031\u0070\u0078\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u006D\u0061\u0072\u0067\u0069\u006E\u003A\u0020\u0030\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0070\u0061\u0064\u0064\u0069\u006E\u0067\u003A\u0020\u0030\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E\u003A\u0020\u0066\u0069\u0078\u0065\u0064\u003B\u0020\u0072\u0069\u0067\u0068\u0074\u003A\u0020\u0030\u003B\u0020\u0074\u0065\u0078\u0074\u002D\u0073\u0068\u0061\u0064\u006F\u0077\u003A\u0020\u006E\u006F\u006E\u0065\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0077\u0069\u0064\u0074\u0068\u003A\u0020\u0031\u0070\u0078\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u007A\u002D\u0069\u006E\u0064\u0065\u0078\u003A\u0020\u0039\u0039\u0039\u0039\u0039\u0039\u003B\u0022\u0020\u0068\u0072\u0065\u0066\u003D\u0022\u0068\u0074\u0074\u0070\u003A\u002F\u002F\u0062\u0067\u0061\u0072\u0061\u0062\u0069\u0063\u002E\u0062\u006C\u006F\u0067\u0073\u0070\u006F\u0074\u002E\u0063\u006F\u006D\u0022\u0020\u0072\u0065\u006C\u003D\u0022\u0064\u006F\u0066\u006F\u006C\u006C\u006F\u0077\u0022\u0020\u0074\u0061\u0072\u0067\u0065\u0074\u003D\u0022\u005F\u0062\u006C\u0061\u006E\u006B\u0022\u003E\u062F\u0644\u064A\u0644\u0020\u0628\u0644\u0648\u062C\u0631\u003C\u002F\u0061\u003E");
  if (tocLoaded) { 
     displayToc(postFilter);
	 document.write(set)
     var toclink = document.getElementById("toclink");

  }
  else { alert("يرجى الإنتظار قليلاً...."); }
}

function hideToc() {
  var tocdiv = document.getElementById("toc");
  tocdiv.innerHTML = '';
  var toclink = document.getElementById("toclink");
  toclink.innerHTML = '<a href="#" onclick="scroll(0,0); showToc(); Effect.toggle('+"'toc-result','blind');"+'">» Show Table of Contents</a> <img src="http://chenkaie.blog.googlepages.com/new_1.gif"/>';
}
