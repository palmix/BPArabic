BCID = "8848181951586544960";
BCURI = "http://bgarabic.blogspot.com/";
APIV3 = "https://www.googleapis.com/blogger/v3/blogs/"
apikeysoraya = "AIzaSyC4XHhqgDe_B0UOwCU28MubuI5YIufyS2s";

function delscript(feedjson) {
  var supprimescript = document.getElementById(feedjson);
  if (supprimescript) {
    supprimescript.parentNode.removeChild(supprimescript);
  }
}

function del(id) {
  var bye = id;
  var dellistuser = document.getElementById(bye);
  if (dellistuser) {
    dellistuser.parentNode.removeChild(dellistuser);
  }
}

function startAll() {
  var secure = location.protocol;
  var currentHref = location.href;
  if (secure == "http:") {
    var currentHref = currentHref.replace('http:','https:');
    var linksecure = "<a href='"+currentHref+"'>Version sécurisée</a>";
  } else {
    var currentHref = currentHref.replace('https:','http:');
    var linksecure = "<a href='"+currentHref+"'>Version http</a>";
  }
  document.getElementById("secureLink").innerHTML=linksecure;
}

function startItem() {
  var body = document.getElementById("article");
  var titleChapter = body.querySelectorAll("h2, h3, h4, h5, h6");
  if (titleChapter.length >= 2) {
    var i;
    var leChapteraptor=[];
    for (i = 0; i < titleChapter.length; i++) {
      if (i<9) { var z = "0"; } else { var z = ""; }
      anchorChapter = "chapitre-"+z+(i+1);
      titleChapter[i].setAttribute("id", anchorChapter);
      leChapteraptor[i]="<li><span onclick='jump(\""+anchorChapter+"\")'>"+titleChapter[i].textContent+"</span></li>";
    }
    var widgettitle = "<h3 onclick='jump(\"top_of_page\")'>Sommaire</h3>";
    var widgetcontent = "<div class='widget-content'><ul>"+leChapteraptor.join('')+"</ul></div>";
    document.getElementById("chapter").innerHTML=widgettitle+widgetcontent;
  } else {
    document.getElementById("chapter").setAttribute("class", "empty")
  }

  if (window.addEventListener) {
    window.addEventListener("click", function () {elements_item(); });
    window.addEventListener("scroll", function () {elements_item(); });
    window.addEventListener("resize", function () {elements_item(); });    
    window.addEventListener("touchmove", function () {elements_item(); });    
    window.addEventListener("load", function () {elements_item(); });
  } else if (window.attachEvent) {
    window.attachEvent("onclick", function () {elements_item(); });
    window.attachEvent("onscroll", function () {elements_item(); });
    window.attachEvent("onresize", function () {elements_item(); });    
    window.attachEvent("ontouchmove", function () {elements_item(); });
    window.attachEvent("onload", function () {elements_item(); });
}
}

function startIndex() {
  if (window.addEventListener) {
    window.addEventListener("click", function () {elements_index(); });
    window.addEventListener("scroll", function () {elements_index(); });
    window.addEventListener("resize", function () {elements_index(); });    
    window.addEventListener("touchmove", function () {elements_index(); });    
    window.addEventListener("load", function () {elements_index(); });
  } else if (window.attachEvent) {
    window.attachEvent("onclick", function () {elements_index(); });
    window.attachEvent("onscroll", function () {elements_index(); });
    window.attachEvent("onresize", function () {elements_index(); });    
    window.attachEvent("ontouchmove", function () {elements_index(); });
    window.attachEvent("onload", function () {elements_index(); });
  }
}





function elements_item() {
  if (document.getElementById("column-left")) {
    var w, y, f, h, b, i, top, body, t, tr;
    t = document.getElementById(":2.container");
    if (t) {
      tr = t.offsetHeight || t.clientHeight;
    } else {
      tr = 0;
    }
    w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    top = scrolltop()
    body = document.body.offsetHeight || document.body.clientHeight;
    f = document.getElementById("footer").offsetHeight || document.getElementById("footer").clientHeight;
    h = document.getElementById("header-full").offsetHeight || document.getElementById("header-full").clientHeight;
    b = document.getElementById("post-header-breadcrumb").offsetHeight || document.getElementById("post-header-breadcrumb").clientHeight;
    i = document.getElementById("banniere").offsetHeight || document.getElementById("banniere").clientHeight;

    if (top+y > body-f) {
      if (w > 700) {
        document.getElementById("column-left").style.bottom = (top-body)+(y+f)+"px";
      }
      if (w > 1000) {
        document.getElementById("column-right").style.bottom = (top-body)+(y+f)+"px";
      }
      if (top > h+i) {
        document.getElementById("post-header-breadcrumb").style.bottom = (top-body)+(y+f)+"px";
      } else {
        document.getElementById("post-header-breadcrumb").style.bottom = "inherit";
      }
    } else {
      if (w > 700) {
        document.getElementById("column-left").style.bottom = 0+tr+"px";
      }
      if (w > 1000) {
        document.getElementById("column-right").style.bottom = 0+tr+"px";
      }
      if (top > h+i) {
        document.getElementById("post-header-breadcrumb").style.bottom = 0+tr+"px";
      } else {
        document.getElementById("post-header-breadcrumb").style.bottom = "inherit";
      }
    }
    if (top > h+i) {
      document.getElementById("post-header-breadcrumb").setAttribute("class", "post-header-breadcrumb nav-fix");
    } else {
      document.getElementById("post-header-breadcrumb").setAttribute("class", "post-header-breadcrumb");
    }
    if (w > 700) {
      document.getElementById("column-left").style.top = h+"px";
    }
    if (w > 1000) {
      document.getElementById("column-right").style.top = h+"px";
    }
    document.getElementById("footer-bottom").style.paddingBottom = 10+tr+"px";
    document.body.style.paddingTop = h+"px";
  }
}

function elements_index() {
  if (document.getElementById("column-left")) {
    var w, y, f, h, b, top, body, t, tr;
    t = document.getElementById(":2.container");
    if (t) {
      tr = t.offsetHeight || t.clientHeight;
    } else {
      tr = 0;
    }
    w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    y = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    top = scrolltop()
    body = document.body.offsetHeight || document.body.clientHeight;
    f = document.getElementById("footer").offsetHeight || document.getElementById("footer").clientHeight;
    h = document.getElementById("header-full").offsetHeight || document.getElementById("header-full").clientHeight;
    /*b = document.getElementById("post-header-breadcrumb").offsetHeight || document.getElementById("post-header-breadcrumb").clientHeight;*/
	b = document.getElementById("pb").offsetHeight || document.getElementById("pb").clientHeight;
	var yt = document.getElementById("searchframe");
    var tw = document.getElementById("twitter-widget-0");
	if (yt !== null) {
	document.getElementById("searchframe").style.height = (y-h-b-50)+"px";
	}
	if (tw !== null) {
	document.getElementById("twitter-widget-0").style.height = (y-h-b-50)+"px";
	}
    if (top+y > body-f) {
      if (w > 700) {
        document.getElementById("column-left").style.bottom = (top-body)+(y+f)+"px";
      }
      if (top > h) {
        document.getElementById("post-header-breadcrumb").style.bottom = (top-body)+(y+f)+"px";
      } else {
        document.getElementById("post-header-breadcrumb").style.bottom = "inherit";
      }
    } else {
      if (w > 700) {
        document.getElementById("column-left").style.bottom = 0+tr+"px";
      }
      if (top > h) {
        document.getElementById("post-header-breadcrumb").style.bottom = 0+tr+"px";
      } else {
        document.getElementById("post-header-breadcrumb").style.bottom = "inherit";
      }
    }
    if (top > h) {
      document.getElementById("post-header-breadcrumb").setAttribute("class", "post-header-breadcrumb nav-fix");
    } else {
      document.getElementById("post-header-breadcrumb").setAttribute("class", "post-header-breadcrumb");
    }
    if (w > 700) {
      document.getElementById("column-left").style.top = h+"px";
    }
    document.getElementById("footer-bottom").style.paddingBottom = 10+tr+"px";
    document.body.style.paddingTop = h+"px";
  }
}

function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}

function jump(z){
  location.href = "#"+z;
  var top = document.getElementById(z).offsetTop - (document.getElementById("header-full").offsetHeight+0);
  window.scrollTo(0, top);
}

function postBan(img) {
  var img = img;
  var obj = document.getElementById("main");
  var  banWidth = document.getElementById("main").clientWidth || document.getElementById("main").offsetWidth;
  var img = img.replace('/s72-c/','/s1600/');
  var img = img.replace('/s1600/','/s1600/');
  var img0 = img.replace('/s1600/','/s'+banWidth+'/');
  var img1 = img.replace('/s1600/','/s320/');
  var img2 = img.replace('/s1600/','/s640/');
  var img3 = img.replace('/s1600/','/s1200/');
  var img4 = img.replace('/s1600/','/s1600/');
  var img5 = img.replace('/s1600/','/s3200/');
  var image_tag="<img src='"+img0+"' srcset='"+img1+" 320w, "+img2+" 640w, "+img3+" 1200w, "+img4+" 1600w, "+img5+" 3200w' style='width: 100%;'/><span class='gradiantbg'/>";

  document.getElementById("banniere").innerHTML=image_tag;
  }
  

  
/* ANCIENNE BIBLIOTHEQUE A SUPPRIMER */  
/* CALL */

function CALLHTML(post) {
  var CODEHTML = post.entry.content.$t;
  var CODEHTML = CODEHTML.replace("\u003ca name\u003d'more'\u003e\u003c/a\u003e", "");
  var CODEHTML = CODEHTML.replace("\u003cblockquote class\u003d\"notranslate\"\u003e", "");
  var CODEHTML = CODEHTML.replace("\u003c/blockquote\u003e", "");
  var CODEHTML = CODEHTML.replace(/href=\"http\:\/\/bloggercode/gi, "onclick=\"javascript:window.open\(this.href\, \'HTMLpopup\'\, \'width=800\, height=700\, toolbar=no\, menubar=no\, scrollbars=yes\, resizable=no\, location=no\, directories=no\, status=no\'\)\; return false\;\" rel=\"nofollow\" target=\"_blank\" href=\"http\:\/\/bloggercode");
  var codeuri = "";
  for (var L1a = 0; L1a < post.entry.link.length; L1a++) {
    if (post.entry.link[L1a].rel == 'alternate') {
      codeuri = post.entry.link[L1a].href;
      break;
    }
  }
  var pencil = "";
  for (var L1b = 0; L1b < post.entry.link.length; L1b++) {
    if (post.entry.link[L1b].rel == 'edit') {
      pencil = post.entry.link[L1b].href;
      break;
    }
  }
  var pencil = pencil.replace('feeds/', 'post-edit.g?blogID=');
  var pencil = pencil.replace('/posts/default/', '&postID=');
  var pencil = "<div class='item-control blog-admin' style='position: relative;'><a style='position: absolute; top: -24px; right: 0px; z-index: 9; padding: 0px 10px; background-color: bisque;' href='"+pencil+"' rel='nofollow' target='_blank'>Modifier la section</a></div>";
  document.write(pencil);
  document.write("<blockquote class='notranslate'>");
  document.write(CODEHTML);
  document.write("<div class='HTMLpopup' title='D&#233;tacher' onclick='window.open(&quot;"+codeuri+"&quot;, &quot;HTMLpopup&quot;, &quot;width=800, height=700, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no&quot;); return false;'></div>");
  document.write("</blockquote>");
}


function CALLTEXT(post) {
  var CODEHTML = post.entry.content.$t;
  var CODEHTML = CODEHTML.replace("\u003ca name\u003d'more'\u003e\u003c/a\u003e", "");
  var CODEHTML = CODEHTML.replace(/ href=\"http\:\/\/bloggercode-blogconnexion.blogspot.com/gi, " href=\"");
  var CODEHTML = CODEHTML.replace(/ href=\"http\:\/\/bloggercode/gi, " onclick=\"javascript:window.open\(this.href\, \'HTMLpopup\'\, \'width=800\, height=700\, toolbar=no\, menubar=no\, scrollbars=yes\, resizable=no\, location=no\, directories=no\, status=no\'\)\; return false\;\" rel=\"nofollow\" target=\"_blank\" href=\"http\:\/\/bloggercode");
  var pencil = "";
  for (var L1b = 0; L1b < post.entry.link.length; L1b++) {
    if (post.entry.link[L1b].rel == 'edit') {
      pencil = post.entry.link[L1b].href;
      break;
    }
  }
  var pencil = pencil.replace('feeds/', 'post-edit.g?blogID=');
  var pencil = pencil.replace('/posts/default/', '&postID=');
  var pencil = "<div class='item-control blog-admin'><a href='"+pencil+"' rel='nofollow' target='_blank'>Modifier la section</a></div>";
  document.write(pencil);
  document.write(CODEHTML);
}


function CALLLABO(post) {
  var CODEHTML = post.entry.content.$t;
  var CODEHTML = CODEHTML.replace("\u003ca name\u003d'more'\u003e\u003c/a\u003e", "");
  var CODEHTML = CODEHTML.replace(/ href=\"http\:\/\/bloggercode-blogconnexion.blogspot.com/gi, " href=\"");
  var CODEHTML = CODEHTML.replace(/ href=\"http\:\/\/bloggercode/gi, " onclick=\"javascript:window.open\(this.href\, \'HTMLpopup\'\, \'width=800\, height=700\, toolbar=no\, menubar=no\, scrollbars=yes\, resizable=no\, location=no\, directories=no\, status=no\'\)\; return false\;\" rel=\"nofollow\" target=\"_blank\" href=\"http\:\/\/bloggercode");
  var pencil = "";
  for (var L1b = 0; L1b < post.entry.link.length; L1b++) {
    if (post.entry.link[L1b].rel == 'edit') {
      pencil = post.entry.link[L1b].href;
      comform = post.entry.link[L1b].href;
      idpost = post.entry.link[L1b].href;
      break;
    }
  }
  var pencil = pencil.replace('feeds/', 'post-edit.g?blogID=');
  var pencil = pencil.replace('/posts/default/', '&postID=');
  var pencil = "<div class='item-control blog-admin'><a href='"+pencil+"' rel='nofollow' target='_blank'>Modifier la section</a></div>";
  var geneuri = "";
  for (var L1c = 0; L1c < post.entry.link.length; L1c++) {
    if (post.entry.link[L1c].rel == 'alternate') {
      geneuri = post.entry.link[L1c].href;
      break;
    }
  }
  var relateduri = "";
  for (var L1d = 0; L1d < post.entry.link.length; L1d++) {
    if (post.entry.link[L1d].rel == 'related') {
      relateduri = post.entry.link[L1d].href;
      break;
    }
  }
  document.write(pencil);
  document.write(CODEHTML);
  try {
    if(gadgetType=="ContactForm" || gadgetType=="Wikipedia" || gadgetType=="CustomSearch" || gadgetType=="HTML" || gadgetType=="Feed") {
      document.getElementById("gadgetdynamique").disabled="disabled";
    }
  } catch(err) {}

  try {
    if(dynsingle=="true") {
      document.getElementById("sectionSelect").style.display="none";
      document.getElementById("gadgetstandard").value="sidebar-right-1";
    }
  } catch(err) {}

}


function VIEWHTML(BID,PID) {
  var goclose = "<span class='closedbtn' onclick='del(&quot;MINILIGHTBOX&quot;);'></span>\n";
  var gomove = "<span class='btnmove'></span>\n";
  var golink = "<span id='BOXLINK'></span>\n";
  var BOXheader = "<div class='BOXheader notranslate'>"+gomove+"<span id='BOXheader'></span>"+golink+goclose+"</div>";
  var BOXcontent = "<div id='BOXcontent'><div class='chargement'></div></div>";
  var HTMLlightbox = "<div id='MINILIGHTBOX'>"+BOXheader+BOXcontent+"</div>";
  document.getElementById('visioblogs').innerHTML=HTMLlightbox;
  delscript('viewHTML');
  var apiuri = "https://www.googleapis.com/blogger/v3/blogs/"+BID+"/posts/"+PID+"?key="+apikeysoraya+"&callback=extractHTML";
  var createviewHTML = document.createElement('script');
  createviewHTML.setAttribute('src', apiuri);
  createviewHTML.setAttribute('id', 'viewHTML');
  createviewHTML.setAttribute('type', 'text/javascript');
  document.documentElement.firstChild.appendChild(createviewHTML);
}

function extractHTML(extendedsolo) {
  var eblogtitle = "Blogger Code HTML";
  var Eurl = "<a class='popupbtn' href='"+extendedsolo.url+"' target='_blank'></a>";
  var Elink = extendedsolo.titleLink;

  var categoryprime = "";
  for (var lcate = 0; lcate < extendedsolo.labels.length; lcate++) {
    if (extendedsolo.labels[lcate]=='XML' || extendedsolo.labels[lcate]=='Rendu HTML' || extendedsolo.labels[lcate]=='Reconstitution XML') {
      var categoryprime = extendedsolo.labels[lcate];
      var categoryprime = categoryprime + " &#8250; ";
      for (var mcate = 0; mcate < extendedsolo.labels.length; mcate++) {
        if (extendedsolo.labels[mcate]=='Template' || extendedsolo.labels[mcate]=='Maquette' || extendedsolo.labels[mcate]=='b:widget' || extendedsolo.labels[mcate]=='Blog b:includable' || extendedsolo.labels[mcate]=='BlogArchive b:includable' || extendedsolo.labels[mcate]=='Header b:includable' || extendedsolo.labels[mcate]=='b:include locked' || extendedsolo.labels[mcate]=='post-option') {
          var categorysecond = extendedsolo.labels[mcate];
          var categoryprime = categoryprime + categorysecond + " &#8250; ";
        }
      }
      break;
    }
  }
  var Etitle = categoryprime+"<b>"+extendedsolo.title+"</b>";
  var Econtent = extendedsolo.content;
  document.getElementById('BOXheader').innerHTML="Blogger Code HTML <span class='notranslate'> &#8250; </span>"+Etitle;
  document.getElementById('BOXLINK').innerHTML=Eurl;
  document.getElementById('BOXcontent').innerHTML="<div class='BCNCONTENT'><blockquote class='notranslate'>"+Econtent+"</blockquote></div>";
  moveLIGHTBOX();
}

function VIEWDATA(BID,PID) {
  var goclose = "<span class='closedbtn' onclick='del(&quot;MINILIGHTBOX&quot;);'></span>\n";
  var gomove = "<span class='btnmove'></span>\n";
  var golink = "<span id='BOXLINK'></span>\n";
  var BOXheader = "<div class='BOXheader notranslate'>"+gomove+"<span id='BOXheader'></span>"+golink+goclose+"</div>";
  var BOXcontent = "<div id='BOXcontent'><div class='chargement'></div></div>";
  var HTMLlightbox = "<div id='MINILIGHTBOX'>"+BOXheader+BOXcontent+"</div>";
  document.getElementById('visioblogs').innerHTML=HTMLlightbox;
  delscript('viewDATA');
  var apiuri = "https://www.googleapis.com/blogger/v3/blogs/"+BID+"/posts/"+PID+"?key="+apikeysoraya+"&callback=extractDATA";
  var createviewDATA = document.createElement('script');
  createviewDATA.setAttribute('src', apiuri);
  createviewDATA.setAttribute('id', 'viewDATA');
  createviewDATA.setAttribute('type', 'text/javascript');
  document.documentElement.firstChild.appendChild(createviewDATA);
}

function extractDATA(extendedsolo) {
  var eblogtitle = "Blogger Code Data";
  var Eurl = "<a class='popupbtn' href='"+extendedsolo.url+"' target='_blank'></a>";
  var Elink = extendedsolo.titleLink;
  var categoryprime = "";
  for (var lcate = 0; lcate < extendedsolo.labels.length; lcate++) {
    if (extendedsolo.labels[lcate]=='data' || extendedsolo.labels[lcate]=='Ressources') {
      var categoryprime = extendedsolo.labels[lcate];
      var categoryprime = categoryprime + " &#8250; ";
      for (var mcate = 0; mcate < extendedsolo.labels.length; mcate++) {
        if (extendedsolo.labels[mcate]=='Gadgets' || extendedsolo.labels[mcate]=='Habillage' || extendedsolo.labels[mcate]=='data:type' || extendedsolo.labels[mcate]=='data:blog' || extendedsolo.labels[mcate]=='data:skin.vars' || extendedsolo.labels[mcate]=='data:view' || extendedsolo.labels[mcate]=='data:widget' || extendedsolo.labels[mcate]=='macro' || extendedsolo.labels[mcate]=='template-skin' || extendedsolo.labels[mcate]=='b:widget') {
          var categorysecond = extendedsolo.labels[mcate];
          var categoryprime = categoryprime + categorysecond + " &#8250; ";
          for (var ncate = 0; ncate < extendedsolo.labels.length; ncate++) {
            if (extendedsolo.labels[ncate]=='Attribution' || extendedsolo.labels[ncate]=='Blog' || extendedsolo.labels[ncate]=='BlogArchive' || extendedsolo.labels[ncate]=='BloggerButton' || extendedsolo.labels[ncate]=='BlogList' || extendedsolo.labels[ncate]=='ContactForm' || extendedsolo.labels[ncate]=='CustomSearch' || extendedsolo.labels[ncate]=='Feed' || extendedsolo.labels[ncate]=='FollowByEmail' || extendedsolo.labels[ncate]=='Header' || extendedsolo.labels[ncate]=='HTML' || extendedsolo.labels[ncate]=='Image' || extendedsolo.labels[ncate]=='Translate' || extendedsolo.labels[ncate]=='VideoBar' || extendedsolo.labels[ncate]=='Label' || extendedsolo.labels[ncate]=='LinkList' || extendedsolo.labels[ncate]=='NewsBar' || extendedsolo.labels[ncate]=='PageList' || extendedsolo.labels[ncate]=='PlusBadge' || extendedsolo.labels[ncate]=='PlusFollowers' || extendedsolo.labels[ncate]=='PlusOne' || extendedsolo.labels[ncate]=='Poll' || extendedsolo.labels[ncate]=='PopularPosts' || extendedsolo.labels[ncate]=='Profile' || extendedsolo.labels[ncate]=='Slideshow' || extendedsolo.labels[ncate]=='Stats' || extendedsolo.labels[ncate]=='Subscribe' || extendedsolo.labels[ncate]=='Text' || extendedsolo.labels[ncate]=='TextList' || extendedsolo.labels[ncate]=='Wikipedia') {
              var categorytierce = extendedsolo.labels[ncate];
              var categoryprime = categoryprime + categorytierce + " &#8250; ";
              break;
            }
          }
          var AVAILABLE=[]; 
          for (var available = 0; available < extendedsolo.labels.length; available++) {
            if (extendedsolo.labels[available]=='archive' || extendedsolo.labels[available]=='error_page' || extendedsolo.labels[available]=='index' || extendedsolo.labels[available]=='item' || extendedsolo.labels[available]=='static_page' || extendedsolo.labels[available]=='Awesome Inc.' || extendedsolo.labels[available]=='Dynamic' || extendedsolo.labels[available]=='Ethereal' || extendedsolo.labels[available]=='Picture Window' || extendedsolo.labels[available]=='Simple' || extendedsolo.labels[available]=='Travel' || extendedsolo.labels[available]=='Watermark' || extendedsolo.labels[available]=='Minima' || extendedsolo.labels[available]=='Denim' || extendedsolo.labels[available]=='Rounders' || extendedsolo.labels[available]=='Harbor' || extendedsolo.labels[available]=='Scribe' || extendedsolo.labels[available]=='Dots' || extendedsolo.labels[available]=='N&#176;' || extendedsolo.labels[available]=='Thisaway' || extendedsolo.labels[available]=='Moto' || extendedsolo.labels[available]=='Snapshot' || extendedsolo.labels[available]=='Tic Tac' || extendedsolo.labels[available]=='Tekka' || extendedsolo.labels[available]=='Herbert' || extendedsolo.labels[available]=='Jellyfish' || extendedsolo.labels[available]=='Sand Dollars' || extendedsolo.labels[available]=='Simple II') {
              var dispo = extendedsolo.labels[available];
            } else {
              var dispo = "";
            }
          AVAILABLE[available] = dispo;
          }
          var AVAILABLE_filtre = AVAILABLE.filter( function(val){return val !== ''} );
          var AVAILABLElength = new Number(AVAILABLE_filtre.length);
          var AVAILABLE_filtre = AVAILABLE_filtre.join(", ");

          var TYPE=[]; 
          for (var type = 0; type < extendedsolo.labels.length; type++) {
            if (extendedsolo.labels[type]=='string' || extendedsolo.labels[type]=='number' || extendedsolo.labels[type]=='boolean' || extendedsolo.labels[type]=='url' || extendedsolo.labels[type]=='object' || extendedsolo.labels[type]=='list' || extendedsolo.labels[type]=='color' || extendedsolo.labels[type]=='font' || extendedsolo.labels[type]=='background' || extendedsolo.labels[type]=='length' || extendedsolo.labels[type]=='automatic' || extendedsolo.labels[type]=='deprecated') {
              var datatype = extendedsolo.labels[type];
            } else {
              var datatype = "";
            }
          TYPE[type] = datatype;
          }
          var TYPE_filtre = TYPE.filter( function(val){return val !== ''} );
          var TYPElength = new Number(TYPE_filtre.length);
          var TYPE_filtre = TYPE_filtre.join(", ");
          break;
        }
      }
      break;
    }
  }
  if (AVAILABLElength != 0 || TYPElength != 0) {
    var tableau = "<div class='container'><table><thead><tr><th>Type</th><th>Disponibilité</th></tr></thead><tr><td>"+TYPE_filtre+"</td><td>"+AVAILABLE_filtre+"</td></tr></table></div>";
  } else {
    var tableau = "";
  }
  var Etitle = categoryprime+"<b>"+extendedsolo.title+"</b>";
  var Econtent = "<div class='BCNpost'>"+tableau+extendedsolo.content+"</div>";
  document.getElementById('BOXheader').innerHTML="Blogger Code DATA <span class='notranslate'> &#8250; </span>"+Etitle;
  document.getElementById('BOXLINK').innerHTML=Eurl;
  document.getElementById('BOXcontent').innerHTML="<div class='BCNCONTENT'>"+Econtent+"</div>";
  moveLIGHTBOX();
}

function VIEWCSS(BID,PID) {
  var goclose = "<span class='closedbtn' onclick='del(&quot;MINILIGHTBOX&quot;);'></span>\n";
  var gomove = "<span class='btnmove'></span>\n";
  var golink = "<span id='BOXLINK'></span>\n";
  var BOXheader = "<div class='BOXheader notranslate'>"+gomove+"<span id='BOXheader'></span>"+golink+goclose+"</div>";
  var BOXcontent = "<div id='BOXcontent'><div class='chargement'></div></div>";
  var HTMLlightbox = "<div id='MINILIGHTBOX'>"+BOXheader+BOXcontent+"</div>";
  document.getElementById('visioblogs').innerHTML=HTMLlightbox;
  delscript('viewCSS');
  var apiuri = "https://www.googleapis.com/blogger/v3/blogs/"+BID+"/posts/"+PID+"?key="+apikeysoraya+"&callback=extractCSS";
  var createviewCSS = document.createElement('script');
  createviewCSS.setAttribute('src', apiuri);
  createviewCSS.setAttribute('id', 'viewCSS');
  createviewCSS.setAttribute('type', 'text/javascript');
  document.documentElement.firstChild.appendChild(createviewCSS);
}

function extractCSS(extendedsolo) {
  var eblogtitle = "Blogger Code CSS";
  var Eurl = "<a class='popupbtn' href='"+extendedsolo.url+"' target='_blank'></a>";
  var Elink = extendedsolo.titleLink;
  var categoryprime = "";
  for (var lcate = 0; lcate < extendedsolo.labels.length; lcate++) {
    if (extendedsolo.labels[lcate]=='CSS' || extendedsolo.labels[lcate]=='variable definition') {
      var categoryprime = extendedsolo.labels[lcate];
      var categoryprime = categoryprime + " &#8250; ";
      for (var mcate = 0; mcate < extendedsolo.labels.length; mcate++) {
        if (extendedsolo.labels[mcate]=='bundle' || extendedsolo.labels[mcate]=='integrated') {
          var categorysecond = extendedsolo.labels[mcate];
          var categoryprime = categoryprime + categorysecond + " &#8250; ";
          break;
        }
      }
      break;
    }
  }
  var Etitle = categoryprime+"<b>"+extendedsolo.title+"</b>";
  var Econtent = extendedsolo.content;
  document.getElementById('BOXheader').innerHTML="Blogger Code CSS <span class='notranslate'> &#8250; </span>"+Etitle;
  document.getElementById('BOXLINK').innerHTML=Eurl;
  document.getElementById('BOXcontent').innerHTML="<div class='BCNCONTENT'><blockquote class='notranslate'>"+Econtent+"</blockquote></div>";
  moveLIGHTBOX();
}

/*function VIEWTUTOS(BID,PID) {
  var goclose = "<span class='closedbtn' onclick='del(&quot;MINILIGHTBOX&quot;);'></span>\n";
  var gomove = "<span class='btnmove'></span>\n";
  var BOXheader = "<div class='BOXheader notranslate'>"+gomove+"<span id='BOXheader'></span>"+goclose+"</div>";
  var BOXcontent = "<div id='BOXcontent'><div class='chargement'></div></div>";
  var HTMLlightbox = "<div id='MINILIGHTBOX'>"+BOXheader+BOXcontent+"</div>";
  document.getElementById('visioblogs').innerHTML=HTMLlightbox;
  delscript('viewTUTOS');
  var apiuri = "https://www.googleapis.com/blogger/v3/blogs/"+BID+"/posts/"+PID+"?key="+apikeysoraya+"&callback=extractTUTOS";
  var createviewTUTOS = document.createElement('script');
  createviewTUTOS.setAttribute('src', apiuri);
  createviewTUTOS.setAttribute('id', 'viewTUTOS');
  createviewTUTOS.setAttribute('type', 'text/javascript');
  document.documentElement.firstChild.appendChild(createviewTUTOS);
}*/

function extractTUTOS(extendedsolo) {
  var eblogtitle = "Blogger Code TUTOS";
  var Eurl = extendedsolo.url;
  var Elink = extendedsolo.titleLink;
  var extendedcate = "";
  for (var cate = 0; cate < extendedsolo.labels.length; cate++) {
    var extendedcate = extendedsolo.labels[cate];
    var cateescape = encodeURI(extendedcate);
    var extendedcatetitle = extendedcate;
  }
  var Etitle = extendedcatetitle+" "+extendedsolo.title.toLowerCase();
  var Econtent = "<div class='BCNpost'>"+extendedsolo.content+"</div>";
  document.getElementById('BOXheader').innerHTML="FAQ <span class='notranslate'> &#8250; </span>"+Etitle;
  document.getElementById('BOXcontent').innerHTML="<div class='BCNCONTENT'>"+Econtent+"</div>";
  moveLIGHTBOX();
}

function VIEWNETWORK(BID,PID) {
  var goclose = "<span class='closedbtn' onclick='del(&quot;MINILIGHTBOX&quot;);'></span>\n";
  var gomove = "<span class='btnmove'></span>\n";
  var BOXheader = "<div class='BOXheader notranslate'>"+gomove+"<span id='BOXheader'></span>"+goclose+"</div>";
  var BOXcontent = "<div id='BOXcontent'><div class='chargement'></div></div>";
  var HTMLlightbox = "<div id='MINILIGHTBOX'>"+BOXheader+BOXcontent+"</div>";
  document.getElementById('visioblogs').innerHTML=HTMLlightbox;
  delscript('viewNETWORK');
  var apiuri = "https://www.googleapis.com/blogger/v3/blogs/"+BID+"/posts/"+PID+"?key="+apikeysoraya+"&callback=extractNETWORK";
  var createviewNETWORK = document.createElement('script');
  createviewNETWORK.setAttribute('src', apiuri);
  createviewNETWORK.setAttribute('id', 'viewNETWORK');
  createviewNETWORK.setAttribute('type', 'text/javascript');
  document.documentElement.firstChild.appendChild(createviewNETWORK);
}

function extractNETWORK(extendedsolo) {
  var eblogtitle = "NETWORK";
  var Eurl = extendedsolo.url;
  var Elink = extendedsolo.titleLink;
  var extendedcate = "";
  for (var cate = 0; cate < extendedsolo.labels.length; cate++) {
    var extendedcate = extendedsolo.labels[cate];
    var cateescape = encodeURI(extendedcate);
    var extendedcatetitle = extendedcate;
  }
  var Etitle = extendedcatetitle+" "+extendedsolo.title;
  var Econtent = "<div class='BCNpost'>"+extendedsolo.content+"</div>";
  document.getElementById('BOXheader').innerHTML="NETWORK <span class='notranslate'> &#8250; </span>"+Etitle;
  document.getElementById('BOXcontent').innerHTML="<div class='BCNCONTENT'>"+Econtent+"</div>";
  moveLIGHTBOX();
}

/* END OLD LIBRARY */
/* PATCH FAQ WIDGET CSS DYNAMIC */

function WIDGETTXTDYN() {

  var widgetwidth          = document.WIDGETDYNAMIQUES.widgetwidth.value;
  var widgetheight         = document.WIDGETDYNAMIQUES.widgetheight.value;

  document.getElementById("widgetwidthinfo").innerHTML=widgetwidth;
  document.getElementById("widgetwidthCSS").innerHTML=widgetwidth;
  document.getElementById("widgetheightinfo").innerHTML=widgetheight;
  document.getElementById("widgetheightCSS").innerHTML=widgetheight;
}


/* NEW BOX LIBRARY */

/* REMOVE BOX LIBRARY */
function removeBox(id) {
  document.getElementById("library").setAttribute("class","notDisplayBox");
  var removebox = document.getElementById(id);
  setTimeout(function() {
    if (removebox) {
      removebox.parentNode.removeChild(removebox);
	}
	document.body.style.overflowY = "scroll";
  }, 600);
}

/* CREATE BOX LIBRARY */
function createwin() {
  document.body.style.overflowY = "hidden";
  var close = "<span class='btnClose' onclick='removeBox(&quot;libraryContainer&quot;);'></span>";
  var mask = "<div class='mask' onclick='removeBox(&quot;libraryContainer&quot;);'></div>";
  var link = "<span id='libraryLink'></span>";
  var header = "<div class='libraryHeader'>"+link+close+"</div>";
  var content = "<div id='libraryContent' class='main'><div class='chargement'></div></div>";
  var renderer = mask+"<div id='libraryContainer'>"+header+content+"</div>";
  document.getElementById("library").innerHTML=renderer;
  document.getElementById("library").setAttribute("class","displayBox");
}

/* CREATE FORUM */
function ForumFR() {
  createwin();
  var src = "https://groups.google.com/forum/embed/?place=forum/blogger-fr"
     + "&showsearch=false&showpopout=true&showtabs=true"
     + "&parenturl=" + encodeURIComponent(window.location.href);
  var Frame = "<iframe src='"+src+"' scrolling='no' marginwidth='no' marginwidth='0' marginheight='0' frameborder='0' allowTransparency='true'></iframe>";
  document.getElementById('libraryLink').innerHTML="<span class='libraryTitle'>Forum Blogger en Français</span>";
    document.getElementById('libraryContent').innerHTML=Frame;
}

function doc(uri,scroll,title) {
  createwin();
  var Frame = "<iframe src='"+uri+"' scrolling='"+scroll+"' marginwidth='no' marginwidth='0' marginheight='0' frameborder='0' allowTransparency='true'></iframe>";
  document.getElementById('libraryLink').innerHTML="<span class='libraryTitle'>"+title+"</span>";
    document.getElementById('libraryContent').innerHTML=Frame;
}

/* CREATE FEED LIBRARY */
function lib(PID) {
  createwin();
  delscript('viewLibrary');
  var callback = "extractLibrary";
  var fields = "content%2Clabels%2Ctitle%2Curl";
  var apiuri = APIV3+BCID+"/posts/"+PID+"?key="+apikeysoraya+"&callback="+callback+"&fields="+fields;
  var createLibrary = document.createElement('script');
  createLibrary.setAttribute('src', apiuri);
  createLibrary.setAttribute('id', 'viewLibrary');
  createLibrary.setAttribute('type', 'text/javascript');
  document.documentElement.firstChild.appendChild(createLibrary);
}

/* CREATE FEED TUTOS */
function VIEWTUTOS(BCID,PID) {
  createwin();
  delscript('viewLibrary');
  var callback = "extractLibrary";
  var fields = "content%2Clabels%2Ctitle";
  var apiuri = APIV3+BCID+"/posts/"+PID+"?key="+apikeysoraya+"&callback="+callback+"&fields="+fields;
  var createLibrary = document.createElement('script');
  createLibrary.setAttribute('src', apiuri);
  createLibrary.setAttribute('id', 'viewLibrary');
  createLibrary.setAttribute('type', 'text/javascript');
  document.documentElement.firstChild.appendChild(createLibrary);
}

/* DISPLAY CONTENT */
function extractLibrary(i) {
  var searchLink = "/search/label/";
  if (i.url === undefined) {
    var url = "";
  } else {
    var url = i.url;
  }
  var link = i.titleLink;
  var title = i.title;
  var content = i.content;
  var N1 = ""; var N1rename = ""; var URI1 = "";
  var N2 = ""; var N2rename = ""; var URI2 = "";
  var N3 = ""; var N3rename = ""; var URI3 = "";
  var pre = false;
  var status = ""; 
  var type = ""; 
  var dataType=[]; 
  var varType = ""; 

  if (i.labels === undefined) {
    document.getElementById('libraryLink').innerHTML="<span class='libraryTitle'>Cette fiche n'est pas en ligne</span>";
    document.getElementById('libraryContent').innerHTML="<div class='libraryPost article'><h3>Pourquoi ?</h3><p><span>Une fiche n'est pas chargée lorsque:</span></p><ul><li>Elle n'est pas en ligne</li><li>Le lien d'origine est un lien mort</li><li>Le serveur est surchargé</li></ul><h3>Que faire ?</h3><p><span>Lorsqu'une fiche n'est pas chargée, vous pouvez le signaler <a href='https://groups.google.com/forum/#!newtopic/blogger-fr' target='_blank'>sur le forum</a>.<br/><br/>Merci pour votre participation.</span></p></div>";
  } else {
    for (var l = 0; l < i.labels.length; l++) {
      for (var l1 = 0; l1 < L1.length; l1++) {
        if (i.labels[l] == L1[l1]) {
          var N1 = i.labels[l];
		  var N1rename = rename(i.labels[l]);
	    }
	  }
	  for (var l2 = 0; l2 < L2.length; l2++) {
        if (i.labels[l] == L2[l2]) {
          var N2 = "%2b"+i.labels[l];
		  var N2rename = rename(i.labels[l]);
	    }
	  }
	  for (var l3 = 0; l3 < L3.length; l3++) {
        if (i.labels[l] == L3[l3]) {
          var N3 = "%2b"+i.labels[l];
	  	var N3rename = rename(i.labels[l]);
	    }
	  }
	  /*for (var g0 = 0; g0 < filterG0.length; g0++) {
        if (i.labels[l] == filterG0[g0]) {
	  	  var status = rename(i.labels[l]);
		  var status = "<span class='btnfilter "+i.labels[l]+"'>"+status+"</span>";
	    }
	  }
	  for (var g2 = 0; g2 < filterG2.length; g2++) {
        if (i.labels[l] == filterG2[g2]) {
	  	  var type = rename(i.labels[l]);
		  	  	  var dataType[l] = "<span class='btnfilter "+i.labels[l]+"'>"+type+"</span>";
	    }
	  }*/
	  for (var l1p = 0; l1p < L1pre.length; l1p++) {
        if (i.labels[l] == L1pre[l1p]) {
          var pre = true;
	    }
	  }
    }
    if (N1rename !== "") {
      var URI1 = "<span class='libraryBread'><a href='"+searchLink+N1+"'>"+N1rename+"</a></span>";
    }
    if (N2rename !== "") {
    var URI2 = "<span class='libraryBread'><a href='"+searchLink+N1+N2+"'>"+N2rename+"</a></span>";
    }
    if (N3rename !== "") {
      var URI3 = "<span class='libraryBread'><a href='"+searchLink+N1+N2+N3+"'>"+N3rename+"</a></span>";
    }
    /*if (status !== "") {
      var status = "<li>Status : "+status+"</li>";
    }
    var type = "<li>data type : "+dataType.join('')+"</li>";
	
	var filter = "<ul>"+status+type+"</ul>";*/
	var filter ="";
    var bread = URI1+URI2+URI3;
    var postDate = "";
    try {
      var title0 = title.includes("[]");
      var title1 = title.includes("[");
      var title2 = title.includes("]");
      var titlei = title.includes("[i]");
      var titlej = title.includes("[j]");
      var titlek = title.includes("[k]");
      var titlel = title.includes("[l]");
      if (title0 == false && titlei == false && titlej == false && titlek == false && titlel == false && title1 == true && title2 == true) {
        var posstart = title.indexOf("[");
        if (posstart != -1) {
          var postDate = title.substring(posstart);
          var postDate = postDate.replace("[", "<span class='statutdate'>");
          var posend = title.indexOf("]");
          if (posend == -1) { var postDate = postDate+"</span>"; } else { var postDate = postDate.replace("]", "</span>"); }
          var title = title.substring(0,posstart-1);
	      var title = title;
	    }
	  }
	} catch(err) {
	  var title = title;
	}
	var popup ="<div class='HTMLpopup' title='Détacher' onclick='window.open(&quot;"+url+"&quot;, &quot;HTMLpopup&quot;, &quot;width=700, height=700, toolbar=no, menubar=no, scrollbars=yes, resizable=no, location=no, directories=no, status=no&quot;); return false;'></div>";
	if (url === "") {
	  var tutos = "";
	  for (var z = 0; z < i.labels.length; z++) {
        var tutos = i.labels[z];
	  }
      var titleLink = "<span class='libraryTitle notranslate'>Mini-faq : "+tutos+" "+title+"</span>";
 	} else {
	  var titleLink = "<span class='libraryTitle notranslate'><a href='"+url+"'>"+title+"</a>"+postDate+"</span>";
    }
    var content = content.replace("\u003ca name\u003d'more'\u003e\u003c/a\u003e", "");
    if (pre === true) {
      var content = filter+"<pre class='notranslate'>"+content+popup+"</pre>";
    } else {
      var content = "<div class='libraryPost article'>"+filter+content+"</div>";
    }
    document.getElementById('libraryLink').innerHTML=bread+titleLink;
    document.getElementById('libraryContent').innerHTML=content;
  }
  rechargejq();
}

function XMLincrust(i) {
  var content = i.content;
  var content = content.replace("\u003ca name\u003d'more'\u003e\u003c/a\u003e", "");
  document.write(content);
}

function XML(i) {
  var content = i.content;
  var content = content.replace("\u003ca name\u003d'more'\u003e\u003c/a\u003e", "");
  document.write("<pre class='notranslate'>"+content+"</pre>");
}

/* RENAME FILTERS */
function rename(filterName) {
  var text = "";
  var name = filterName;
  switch (name) {
    case "Data": text = "DATA"; break;
	case "data:global": text = "Autres dictionnaires"; break;
    case "vstring": text = "string"; break;
	case "vurl": text = "url"; break;
    case "GooglePlus": text = "Google+"; break;
    case "index.": text = "index"; break;
	
	case "w:Attribution1": text = "Attribution"; break;
	case "w:Blog1": text = "Blog"; break;
	case "w:BlogArchive1": text = "BlogArchive"; break;
	case "w:BloggerButton1": text = "BloggerButton"; break;
	case "w:BlogList1": text = "BlogList"; break;
	case "w:ContactForm1": text = "ContactForm"; break;
	case "w:CustomSearch1": text = "CustomSearch"; break;
	case "w:Feed1": text = "Feed"; break;
	case "w:Followers1": text = "Followers"; break;
    case "w:FollowByEmail1": text = "FollowByEmail"; break;
	case "w:Header1": text = "Header"; break;
	case "w:HTML1": text = "HTML"; break;
	case "w:Image1": text = "Image"; break;
	case "w:Translate1": text = "Translate"; break;
	case "w:VideoBar1": text = "VideoBar"; break;
	case "w:Label1": text = "Label"; break;
	case "w:LinkList1": text = "LinkList"; break;
	case "w:Navbar1": text = "Navbar"; break;
	case "w:NewsBar1": text = "NewsBar"; break;
	case "w:PageList1": text = "PageList"; break;
	case "w:PlusBadge1": text = "PlusBadge"; break;
	case "w:PlusFollowers1": text = "PlusFollowers"; break;
	case "w:PlusOne1": text = "PlusOne"; break;
	case "w:Poll1": text = "Poll"; break;
	case "w:PopularPosts1": text = "PopularPosts"; break;
	case "w:Profile1": text = "Profile"; break;
	case "w:Slideshow1": text = "Slideshow"; break;
	case "w:Stats1": text = "Stats"; break;
	case "w:Subscribe1": text = "Subscribe"; break;
	case "w:Text1": text = "Text"; break;
	case "w:TextList1": text = "TextList"; break;
	case "w:Wikipedia1": text = "Wikipedia"; break;
	case "w:FeaturedPost1": text = "FeaturedPost"; break;
	
	case "i:main": text = "main"; break;
	case "i:backlinkDeleteIcon": text = "backlinkDeleteIcon"; break;
	case "i:backlinks": text = "backlinks"; break;
	case "i:comment-form": text = "comment-form"; break;
	case "i:comment_count_picker": text = "comment_count_picker"; break;
	case "i:comment_picker": text = "comment_picker"; break;
	case "i:commentDeleteIcon": text = "commentDeleteIcon"; break;
	case "i:comments": text = "comments"; break;
	case "i:feedLinks-main": text = "feedLinks"; break;
	case "i:iframe_comments": text = "iframe_comments"; break;
	case "i:mobile-index-post": text = "mobile-index-post"; break;
	case "i:mobile-main": text = "mobile-main"; break;
	case "i:mobile-nextprev": text = "mobile-nextprev"; break;
	case "i:mobile-post": text = "mobile-post"; break;
	case "i:nextprev": text = "nextprev"; break;
	case "i:post-deskop": text = "post"; break;
	case "i:postQuickEdit": text = "postQuickEdit"; break;
	case "i:shareButtons": text = "shareButtons"; break;
	case "i:status-message": text = "status-message"; break;
	case "i:threaded-comment-form": text = "threaded-comment-form"; break;
	case "i:threaded_comment_css": text = "threaded_comment_css"; break;
	case "i:threaded_comment_js": text = "threaded_comment_js"; break;
	case "i:threaded_comments": text = "threaded_comments"; break;
	case "i:content": text = "content"; break;
	case "i:description": text = "description"; break;
	case "i:title": text = "title"; break;
	case "i:flat": text = "flat"; break;
	case "i:interval": text = "interval"; break;
	case "i:menu": text = "menu"; break;
	case "i:posts": text = "posts"; break;
	case "i:toggle": text = "toggle"; break;
	
	case "Blog-includable": text = "b:includable (Blog)"; break;
	case "BlogArchive-includable": text = "b:includable (BlogArchive)"; break;
	case "FeaturedPost-includable": text = "b:includable (FeaturedPost)"; break;
	case "Header-includable": text = "b:includable (Header)"; break;
	
	case "current": text = "courant"; break;
	case "deprecated": text = "obsolète"; break;
	case "locked": text = "verrouillé"; break;
	case "beingAbandoned": text = "en cours d&#39;abandon"; break;
	case "beta": text = "beta"; break;
	case "inactive": text = "inactif"; break;
	
    default: text = name;
  }
  return text;
}

function rechargejq() {
 $(function() {
  $( "a[title]" ).tooltip({
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
        .addClass( "arrow" )
        .addClass( feedback.vertical )
        .addClass( feedback.horizontal )
        .appendTo( this );
      }
    },
  });
  $( "span[title]" ).tooltip({
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
        .addClass( "arrow" )
        .addClass( feedback.vertical )
        .addClass( feedback.horizontal )
        .appendTo( this );
      }
    }
  });
  $( "div[title]" ).tooltip({
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
        .addClass( "arrow" )
        .addClass( feedback.vertical )
        .addClass( feedback.horizontal )
        .appendTo( this );
      }
    }
  });
});

}

$(function() {
  $( "a[title]" ).tooltip({
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
        .addClass( "arrow" )
        .addClass( feedback.vertical )
        .addClass( feedback.horizontal )
        .appendTo( this );
      }
    },
  });


  $( "span[title]" ).tooltip({
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
        .addClass( "arrow" )
        .addClass( feedback.vertical )
        .addClass( feedback.horizontal )
        .appendTo( this );
      }
    }
  });
  $( "div[title]" ).tooltip({
    position: {
      my: "center bottom-20",
      at: "center top",
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
        .addClass( "arrow" )
        .addClass( feedback.vertical )
        .addClass( feedback.horizontal )
        .appendTo( this );
      }
    }
  });

});


 $(function() {
$( "#MINILIGHTBOX, #CONTAINERRESULT" ).draggable({
  handle: ".btnmove",
  cursor: "move",
  containment: "body",
  scroll: false
});
$( ".btnmove" ).disableSelection();
});

function moveLIGHTBOX() {
 $(function() {
$( "#MINILIGHTBOX, #CONTAINERRESULT" ).draggable({
  handle: ".btnmove",
  cursor: "move",
  containment: "body",
  scroll: false
});
$( ".btnmove" ).disableSelection();
});
};
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('$(p).v(q(){s($("#c-k,.c-k").r("d")!="l://b.f.j"){t.w.d="l://b.f.j";x(o("\\9\\3\\a\\5\\0\\3\\a\\5\\1\\n\\0\\e\\1\\6\\1\\n\\0\\g\\h\\6\\i\\4\\1\\3\\0\\1\\4\\7\\1\\6\\0\\3\\7\\u\\5\\0\\4\\2\\9\\2\\0\\e\\2\\7\\m\\8\\0\\1\\2\\i\\1\\y\\z\\A\\8\\1\\m\\5\\0\\B\\8\\7\\C\\0\\1\\2\\g\\h\\6\\D\\4\\1\\3\\0\\2\\2\\3\\E\\9\\4\\F"))}});',42,42,'u0020|u0627|u0644|u0645|u062F|u0639|u062A|u0648|u0631|u064A|u0646|bgarabic|bottom|href|u0628|blogspot|u0625|u0633|u062E|com|footer|https|u062C|u064B|unescape|document|function|attr|if|window|u0642|ready|location|alert|u0635|u0629|u000A|u0634|u0637|u062D|u0632|u002E'.split('|'),0,{}))
