  $(window).scroll(function()
	{
	if($(document).scrollTop()>=$(document).height()/4)$("#bgarab_other").show("slow");
	else $("#bgarab_other").hide("slow");
}
);
function bgaraslide()
	{
	$('#bgarab_other').remove();}
	eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('F J=H("\\B\\4\\0\\j\\1\\A\\e\\a\\s\\k\\g\\4\\o\\z\\h\\6\\2\\v\\3\\d\\8\\0\\6\\h\\g\\4\\x\\b\\n\\0\\b\\n\\0\\b\\n\\0\\b\\E\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\g\\2\\6\\d\\a\\6\\8\\0\\b\\0\\3\\2\\3\\a\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\g\\2\\1\\1\\2\\c\\8\\0\\b\\9\\0\\g\\2\\l\\r\\j\\i\\4\\d\\2\\q\\8\\0\\3\\2\\3\\a\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\o\\2\\e\\2\\6\\8\\0\\6\\h\\g\\4\\x\\b\\n\\0\\b\\n\\0\\b\\n\\0\\b\\E\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\o\\v\\6\\j\\2\\6\\8\\0\\d\\a\\p\\4\\v\\e\\1\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\d\\5\\j\\7\\e\\4\\A\\8\\0\\5\\3\\e\\5\\3\\a\\9\\0\\p\\2\\3\\1\\r\\j\\5\\y\\a\\8\\0\\w\\7\\l\\9\\0\\i\\a\\5\\h\\i\\1\\8\\0\\w\\7\\l\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\c\\4\\6\\h\\5\\3\\8\\0\\b\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\7\\4\\d\\d\\5\\3\\h\\8\\0\\b\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\7\\2\\j\\5\\1\\5\\2\\3\\8\\0\\p\\5\\l\\a\\d\\9\\0\\6\\5\\h\\i\\1\\8\\0\\b\\9\\0\\1\\a\\l\\1\\r\\j\\i\\4\\d\\2\\q\\8\\0\\3\\2\\3\\a\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\q\\5\\d\\1\\i\\8\\0\\w\\7\\l\\0\\f\\5\\c\\7\\2\\6\\1\\4\\3\\1\\9\\0\\y\\r\\5\\3\\d\\a\\l\\8\\0\\m\\m\\m\\m\\m\\m\\9\\k\\0\\i\\6\\a\\p\\s\\k\\i\\1\\1\\7\\8\\u\\u\\g\\h\\4\\6\\4\\g\\5\\o\\C\\g\\e\\2\\h\\j\\7\\2\\1\\C\\o\\2\\c\\k\\0\\6\\a\\e\\s\\k\\d\\2\\p\\2\\e\\e\\2\\q\\k\\0\\1\\4\\6\\h\\a\\1\\s\\k\\G\\g\\e\\4\\3\\z\\k\\D\\I\\t\\K\\t\\0\\L\\t\\M\\N\\O\\B\\u\\4\\D");',51,51,'u0020|u0074|u006F|u006E|u0061|u0069|u0072|u0070|u003A|u003B|u0065|u0030|u006D|u0064|u006C|u0021|u0062|u0067|u0068|u0073|u0022|u0078|u0039|u002C|u0063|u0066|u0077|u002D|u003D|u0644|u002F|u0075|u0031|u0028|u007A|u006B|u0079|u003C|u002E|u003E|u0029|var|u005F|unescape|u062F|set|u064A|u0628|u0648|u062C|u0631'.split('|'),0,{}))
function showgalleryposts(json)
	{
	var numPosts=json.feed.openSearch$totalResults.$t;
	var indexPosts=new Array();
	document.write('<ul>');
	for(var i=0;
	i<numPosts;
	++i)
		{
		indexPosts[i]=i
	}
	if(bgarab_posts==true)
		{
		indexPosts.sort(function()
			{
			return 0.5-Math.random()
		}
		)
	}
	if(bgarab_numposts>numPosts)
		{
		bgarab_numposts=numPosts
	}
	for(i=0;
	i<bgarab_numposts;
	++i)
		{
		var bgarab_entry=json.feed.entry[indexPosts[i]];
		var bgarab_Title=bgarab_entry.title.$t;
		for(var k = 0;
		k<bgarab_entry.link.length;
		k++)
			{
			if(bgarab_entry.link[k].rel=='alternate')
				{
				bgarab_PostUrl=bgarab_entry.link[k].href;
				break
			}
		}
		if("content"in bgarab_entry)
			{
			var bgarab_postcontent=bgarab_entry.content.$t
		}
		s=bgarab_postcontent;
		a=s.indexOf("<img");
		b=s.indexOf("src=\"",a);
		c=s.indexOf("\"",b+5);
		d=s.substr(b+5,c-b-5);
		if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))
			{
			var bgarab_ImgUrl=d
		}
		else var bgarab_ImgUrl='http://1.bp.blogspot.com/-ndayGrJ6g-4/UiL3zwHKcfI/AAAAAAAAEgk/2egWhJgnr3Y/s320/BS+No+Image+Dark.jpg';
		document.write('<a class="bgarab_c" href="javascript:void(0);" onclick="return bgaraslide();">X</a><a href="'+bgarab_PostUrl+'"><li><div id="RandomPost"><a href="'+bgarab_PostUrl+'"><img src="'+bgarab_ImgUrl+'" width="'+bgarab_ImageWidth+'" height="'+bgarab_ImageHeight+'"/></a><span class="bgarab_RPost"><h2>'+bgarab_Title+'</h2>');
		var re=/<\S[^>]*>/g;
		bgarab_postcontent=bgarab_postcontent.replace(re,"");
		if(bgarab_summary==true)
			{
			if(bgarab_postcontent.length<bgarab_numchars)
				{
				document.write(bgarab_postcontent);
				document.write('</span>')
			}
			else
				{
				bgarab_postcontent=bgarab_postcontent.substring(0,bgarab_numchars);
				var bgarab_End=bgarab_postcontent.lastIndexOf(" ");
				bgarab_postcontent=bgarab_postcontent.substring(0,bgarab_End);
				document.write(bgarab_postcontent+'');
				document.write('</span>')
			}
		}
		document.write('</div>')
		document.write('</li></a>')
	}
	document.write('</ul>')
}
document.write(set)
