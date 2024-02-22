
var get_html =()=>
{
	var content = yqs(yconst.content);
	var get_html_btn = yqs(yconst.get_html_btn);
	var lightbox = yqs(yconst.lightbox_sel);
	var lightbox_content = yqs(yconst.lightbox_c);

	yaddEventListener(get_html_btn,"click",(e)=>{
		e.preventDefault();
		//show lightbox
		yshow(lightbox)
		//create textarea with html in lightbox
		var html = yget_html(content)
		//set lightbox form
		yhtml(lightbox_content,"")
		lightbox_txtarea("exported html","export_html",html,true);
	});
}//end get_html


var import_html =()=>
{
	var content = yqs(yconst.content);
	var set_html_btn = yqs(yconst.set_html_btn);
	var lightbox = yqs(yconst.lightbox_sel);
	var lightbox_content = yqs(yconst.lightbox_c);

	yaddEventListener(set_html_btn,"click",(e)=>{
		e.preventDefault();
		//show lightbox
		yshow(lightbox)
		//set lightbox form
		yhtml(lightbox_content,"")
		lightbox_txtarea("exported html",yconst.set_html_textarea_name,"");
		lightbox_btn("submit",yconst.set_html_btn_submit_btn_name);
	});
	
	yaddEventListener(lightbox,"click",(e)=>{
		e.preventDefault();
		//get html from textarea
		var imported_html = yval(yqs(yconst.set_html_textarea));
		//set content html with imported html
		yhtml(content,imported_html);
		//hide lightbox
		yhide(lightbox)
	},yconst.set_html_btn_submit_btn_class);
	
}//end import_html


var import_layout=()=>
{
	
	var content = yqs(yconst.content);
	var get_import_layout_btn = yqs(yconst.get_import_layout_btn);
	var lightbox = yqs(yconst.lightbox_sel);
	var lightbox_content = yqs(yconst.lightbox_c);

	//click import layout
	yaddEventListener(get_import_layout_btn,"click",(e)=>{
		e.preventDefault();
		//show lightbox
		yshow(lightbox)
		//create form
		yhtml(lightbox_content,"")
		lightbox_txtarea("import layout",yconst.import_layout_textarea_name,"")
		lightbox_btn("submit",yconst.get_import_layout_submit_btn_name);
	});
	
	//populate contant with new layout
	yaddEventListener(lightbox,"click",(e)=>{
		
		var import_layout_textarea = yqs(yconst.import_layout_textarea_class)
		//get textarea val
		var import_layout_textarea_val = yval(import_layout_textarea)
		//split by new line
		var import_coder = import_layout_textarea_val.split("\n");
		//empty content
		yhtml(content,"")
		//populate content with imorted layout components
		yeachr(import_coder,(i,val)=>{
			//get component
			var comp = get_component(val);
	
			
			//if such a component exists
			if(comp){
				
				//make html row
				var comp_html = 
				'<div class="'+yconst.editable_block+' row" comp="'+comp.name+'" >'+
				comp.html+
				'</div>';
				
				//append component html to content
				yappend(content,comp_html);
			}
		});//end for each
		
		yhide(lightbox)
		
	},yconst.get_import_layout_submit_btn_class);
	
	
}//end import_layout


export_layout=()=>
{
	
	var content = yqs(yconst.content);
	var get_export_layout_btn = yqs(yconst.get_export_layout_btn);
	var lightbox = yqs(yconst.lightbox_sel);
	var lightbox_content = yqs(yconst.lightbox_c);
	//click export layout
	yaddEventListener(get_export_layout_btn,"click",(e)=>{
		e.preventDefault();
		var comps_names="";//holds all component names
		
		var all_blocks = yqsa(yconst.editable_block);
		//loop all blocks
		yeachr(all_blocks,(i,val)=>{
			//get comp att that holds the rows/block component name
			var comp_name = ygattr(val,"comp")
			comps_names += comp_name+"\n";//add it to export string
		});
		
		yhtml(lightbox_content,"")
		lightbox_txtarea("export layout","",comps_names)
		//show lightbox
		yshow(lightbox)
	});

}//end export_layout


var save_as_zip = ()=>
{
	yaddEventListener(document,"click",(e)=>{
		ylog("save as")
		var content = yqs(yconst.content);
		var zip = new JSZip();
		var yhtml = yheader + "<div class='container'>";
		yhtml += yget_html(content);
		yhtml += "</div></div></div>" + yfooter;

		zip.file("index.html", yhtml);
		var img = zip.folder("img");
		var css = zip.folder("css");
		var js = zip.folder("js");
		//img.file("ph.jpg", "img/ph.jpg", {base64: true});
		//img.file("sm.png", "img/sm.png", {base64: true});
		js.file("script.js", yscriptf);
		css.file("style.css", ycss);
		css.file("box_model_helper.css", box_modelh);
		zip.generateAsync({ type: "blob" })
		  .then(function (content) {
			// see FileSaver.js
			saveAs(content, "website.zip");
		  });
		  

	},yconst.export_zip_btn);
};//end save_as_zip