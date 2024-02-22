
var y_lightbox = (selector,open_selector,close_selector)=>
{
	var lightbox_container = yqs(selector);
	var open_el = yqs(open_selector);
	var close_el = yqsa(close_selector);
	
	yhide(lightbox_container);
	
	yadd_class(lightbox_container,"lightbox");
	

	//on click hide lightbox
	yaddEventListener(document,"click",(e)=>{
		e.preventDefault();
		yhide(lightbox_container);
	}
	,close_selector)
	
	//click on lightbox background (the transperent black part)
	yaddEventListener(lightbox_container,"click",(e)=>
	{
		//dont hide if clicked inside lightbox body
		if(e.target !== e.currentTarget) return;
		//yhide(lightbox_container);
	});
	
	//open_lightbox on click open_el
	if(open_el)
	{
		yaddEventListener(open_el,"click",(e)=>
		{
			yshow(lightbox_container)
		});
	}
	
};//end y_lightbox



var lightbox_txtarea =(title,name,val,is_html)=>
{
	var html = "<h3>"+title+"</h3>"
	//check if val is not html
	if(!is_html)
	{
		html += "<textarea class='lbox_in "+name+"'>"+String(val)+"</textarea>";
	}
	else{
		html += "<textarea class='lbox_in "+name+"'></textarea>";
	}
	//add to lightbox
	var lightbox_content =yqs(yconst.lightbox_c);
	yappend(lightbox_content,html)
	
	//set textarea value (if its html)
	if(!is_html){return;}//if not html return
	var classname = "."+name;
	var new_textarea = yqs(classname);
	new_textarea.value  = val;
		
}//end lightbox_txtarea

var lightbox_txtinput =(title,name,val)=>
{
	var html = "<h3>"+title+"</h3>"
	html += "<input type='text' class='lbox_in "+name+"' value ='"+val+"' name='"+name+"'>";

	var lightbox_content =yqs(yconst.lightbox_c);
	yappend(lightbox_content,html)
}//end lightbox_txtarea

var lightbox_btn =(btn_txt,btn_class)=>
{
	var btn ="<a class='col s12 l2 btn "+btn_class+"' href='\#'>"+btn_txt+" </a>";
	var lightbox_content =yqs(yconst.lightbox_c);
	yappend(lightbox_content,btn)
}//end lightbox_txtarea_btn

