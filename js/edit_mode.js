var edit_current

var click_img = ()=>
{
	
	var content = yqs(yconst.content);
	var lightbox = yqs(yconst.lightbox_sel);
	var lightbox_content = yqs(yconst.lightbox_c);
	
	//click on an img element
	yaddEventListener(content,"click",(e)=>{
		e.preventDefault();
		if (!yconst.edit_mode){return;}//if not edit mode do nothing
		//show lightbox
		yshow(lightbox)
		//get img source
		var src = e.target.src;
		//get img alt text
		var alt = e.target.alt
		//set edit current as clicked element
		edit_current = e.target
		//set lightbox form
		yhtml(lightbox_content,"")
		lightbox_txtinput(" img_src(image addres)","img_edit_src",src)
		lightbox_txtinput(" img alt txt","img_edit_alt",alt)
		lightbox_btn("save","save_new_data_img")
	},"img");
	
	//click on edit in the lightbox form
	yaddEventListener(document,"click",(e)=>{
		e.preventDefault();
		//get form data from lightbox
		var img_edit_src = yqs(".img_edit_src")
		var img_edit_alt = yqs(".img_edit_alt")
		//set current editable to the form data
		ysattr(edit_current,"src",yval(img_edit_src))
		ysattr(edit_current,"alt",yval(img_edit_alt))
		
		yhide(lightbox)
	},".save_new_data_img");
};//end click_a

var click_a = ()=>
{
	
	var content = yqs(yconst.content);
	var lightbox = yqs(yconst.lightbox_sel);
	var lightbox_content = yqs(yconst.lightbox_c);
	//click on an link a tag element
	yaddEventListener(content,"click",(e)=>{
		e.preventDefault();
		if (!yconst.edit_mode){return;}//if not edit mode do nothing
		//show lightbox
		yshow(lightbox)
		//get a text val
		var val = e.target.innerText
		//get a tag link address
		var href = e.target.href //ygattr(e.target,"href")

		//set edit current as clicked element
		edit_current = e.target
		//set lightbox form
		yhtml(lightbox_content,"")
		lightbox_txtinput(" link text","a_edit_txt",val)
		lightbox_txtinput(" link address","a_edit_href",href)
		lightbox_btn("save","save_new_data_a")
	},"a");
	
	//click on edit in the lightbox form
	yaddEventListener(document,"click",(e)=>{
		e.preventDefault();
		//get form data from lightbox
		var linktxt = yqs(".a_edit_txt")
		var linkhref = yqs(".a_edit_href")
		//set current editable to the form data
		edit_current.innerText = yval(linktxt)
		ysattr(edit_current,"href",yval(linkhref))
		yhide(lightbox)
	},".save_new_data_a");
};//end click_a

var click_h = ()=>
{
	var content = yqs(yconst.content);
	var lightbox = yqs(yconst.lightbox_sel);
	var lightbox_content = yqs(yconst.lightbox_c);
	//do for all h tags from h1 to h6
	for (let i = 0; i <= 6; i++) {
		htag= String("h"+i);//htag name
		//click on an link h tag title element
		yaddEventListener(content,"click",(e)=>{
			e.preventDefault();
			if (!yconst.edit_mode){return;}//if not edit mode do nothing
			//show lightbox
			yshow(lightbox)
			//get h2 val
			var val = e.target.innerText
			//set edit current as clicked element
			edit_current = e.target
			//set lightbox form
			yhtml(lightbox_content,"")
			lightbox_txtinput(" title",htag+"_edit",val);
			lightbox_btn("save","save_new_datah");

		},htag)
		
		//click on edit in the lightbox form
		yaddEventListener(document,"click",(e)=>{
			e.preventDefault();
			//get form data from lightbox
			var h1 = yqs("."+htag+"_edit")
			//set current editable to the form data
			edit_current.innerText = yval(h1)
			yhide(lightbox)
		},".save_new_datah");
	}
};//end click_h


var click_p = ()=>
{
	var content = yqs(yconst.content);
	var lightbox = yqs(yconst.lightbox_sel);
	var lightbox_content = yqs(yconst.lightbox_c);
	
	yaddEventListener(content,"click",(e)=>{
		e.preventDefault();
		if (!yconst.edit_mode){return;}//if not edit mode do nothing
		//show lightbox
		yshow(lightbox)
		//get p val
		var val = e.target.innerText
		//set edit current as clicked element
		edit_current = e.target
		//set lightbox form
		yhtml(lightbox_content,"")
		lightbox_txtarea("content","p_edit",val)
		lightbox_btn("save","save_new_datap")
		
	},"p,span,li");	

	
	yaddEventListener(document,"click",(e)=>{
			e.preventDefault();
			//get form data from lightbox
			var p = yqs(".p_edit")
			//set current editable to the form data
			edit_current.innerText = yval(p)
			yhide(lightbox)
	},".save_new_datap");
};

var edit_mode_checkbox = ()=>
{
	//click on edit mode switch
	yaddEventListener(document,"click",(e)=>{
		//toggle edit mode 
		yconst.edit_mode = !yconst.edit_mode;
	},".edit_switch_el")
};//end edit_mode_chacbox


var save_as_zip = ()=>
{

};//end save_as_zip
