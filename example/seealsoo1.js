  $(window).scroll(function()
	{
	if($(document).scrollTop()>=$(document).height()/4)$("#bgarab_other").show("slow");
	else $("#bgarab_other").hide("slow");
}
);
function bgaraslide()
	{
	$('#bgarab_other').remove();}
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
var set = unescape("\u003C\u0061\u0020\u0073\u0074\u0079\u006C\u0065\u003D\u0022\u0062\u0061\u0063\u006B\u0067\u0072\u006F\u0075\u006E\u0064\u003A\u0020\u0072\u0067\u0062\u0061\u0028\u0030\u002C\u0020\u0030\u002C\u0020\u0030\u002C\u0020\u0030\u0029\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0062\u006F\u0072\u0064\u0065\u0072\u003A\u0020\u0030\u0020\u006E\u006F\u006E\u0065\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0062\u006F\u0074\u0074\u006F\u006D\u003A\u0020\u0030\u003B\u0020\u0062\u006F\u0078\u002D\u0073\u0068\u0061\u0064\u006F\u0077\u003A\u0020\u006E\u006F\u006E\u0065\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0063\u006F\u006C\u006F\u0072\u003A\u0020\u0072\u0067\u0062\u0061\u0028\u0030\u002C\u0020\u0030\u002C\u0020\u0030\u002C\u0020\u0030\u0029\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0063\u0075\u0072\u0073\u006F\u0072\u003A\u0020\u0064\u0065\u0066\u0061\u0075\u006C\u0074\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0064\u0069\u0073\u0070\u006C\u0061\u0079\u003A\u0020\u0069\u006E\u006C\u0069\u006E\u0065\u003B\u0020\u0066\u006F\u006E\u0074\u002D\u0073\u0069\u007A\u0065\u003A\u0020\u0031\u0070\u0078\u003B\u0020\u0068\u0065\u0069\u0067\u0068\u0074\u003A\u0020\u0031\u0070\u0078\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u006D\u0061\u0072\u0067\u0069\u006E\u003A\u0020\u0030\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0070\u0061\u0064\u0064\u0069\u006E\u0067\u003A\u0020\u0030\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0070\u006F\u0073\u0069\u0074\u0069\u006F\u006E\u003A\u0020\u0066\u0069\u0078\u0065\u0064\u003B\u0020\u0072\u0069\u0067\u0068\u0074\u003A\u0020\u0030\u003B\u0020\u0074\u0065\u0078\u0074\u002D\u0073\u0068\u0061\u0064\u006F\u0077\u003A\u0020\u006E\u006F\u006E\u0065\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u0077\u0069\u0064\u0074\u0068\u003A\u0020\u0031\u0070\u0078\u0020\u0021\u0069\u006D\u0070\u006F\u0072\u0074\u0061\u006E\u0074\u003B\u0020\u007A\u002D\u0069\u006E\u0064\u0065\u0078\u003A\u0020\u0039\u0039\u0039\u0039\u0039\u0039\u003B\u0022\u0020\u0068\u0072\u0065\u0066\u003D\u0022\u0068\u0074\u0074\u0070\u003A\u002F\u002F\u0062\u0067\u0061\u0072\u0061\u0062\u0069\u0063\u002E\u0062\u006C\u006F\u0067\u0073\u0070\u006F\u0074\u002E\u0063\u006F\u006D\u0022\u0020\u0072\u0065\u006C\u003D\u0022\u0064\u006F\u0066\u006F\u006C\u006C\u006F\u0077\u0022\u0020\u0074\u0061\u0072\u0067\u0065\u0074\u003D\u0022\u005F\u0062\u006C\u0061\u006E\u006B\u0022\u003E\u062F\u0644\u064A\u0644\u0020\u0628\u0644\u0648\u062C\u0631\u003C\u002F\u0061\u003E");
document.write(set)