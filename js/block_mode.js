var current


var get_components = async ()=>
{
	//yconst.data 
	yconst.data = await yjson(yconst.data_src);
	ylog("json data:")
	ylog(yconst.data)
};//end get_components

//var somefunc = ()=>{};//end


//after you click a row in block mode show all html block options
var show_options = ()=>
{
	var selector_name = yconst.editable_block_class_name;
	var selector = yconst.editable_block;
	//on click editable selector in block mode
	yaddEventListener(document,"click",(e)=>{
		e.preventDefault();
		if (yconst.edit_mode){return;}//if edit mode do nothing
		var t = e.target
		var lightbox = yqs(yconst.lightbox_sel);
		var lightbox_content = yqs(yconst.lightbox_c);
		//set current to clicked row
		current = t;
		//make sure current is a yeditble container div
		var hascllass = yhas_calss(current,selector_name)
		while(!hascllass)
		{
			current = yparent(current);//if its not yeditble get parent 
			hascllass = yhas_calss(current,selector_name)
		}
		
		//show lightbox
		yshow(lightbox);
		//components
		var comp = yconst.data.items;
		comp_list = "";//component list
		//add remove link
		comp_list += remove_link();
		comp_list += create_link("move up","ymove_up");
		comp_list += create_link("move down","ymove_down");
		
		//get options
		yeach(comp,(key,val)=>{
			comp_list += option_link(val.name);
		});

		//render to lightbox body
		yhtml(lightbox_content,comp_list)
		
	},selector)
};//end show_options

//handale click on option blocks in the lightbox content after you click a row in block mode
var click_options =()=>
{
	var lightbox = yqs(yconst.lightbox_sel);
	//on click item selector
	yaddEventListener(lightbox,"click",(e)=>{
		e.preventDefault();
		if (yconst.edit_mode){return;}//if edit mode do nothing
		var t = e.target
		//get component
		var component = get_component(t.textContent);
		//set the target yeditable to component html
		yhtml(current,component.html)
		//set current element comp att to current comp name
		ysattr(current,"comp",t.textContent)
		
		//hide lightbox
		yhide(lightbox);
	},".yitem");
}//end click_options


var get_component = (name)=>
{
	//remove spaces
	name = name.replace('/\s/g', '');
	name = name.trim();
	var ret;
	var comp = yconst.data.items;//components
	//find component
	yeach(comp, (key,val) =>{
 
	  if(new String(val.name).valueOf() == new String(name).valueOf()){ ret = val;}
	  
	}); 
	//console.log("--------");
	return ret;
}//end get_component


var add_row =()=>
{
	var add_bts =yqs(yconst.add_row_btn);
	var content =yqs(yconst.content);
	//on click add row add a row to contant div
	yaddEventListener(add_bts,"click",(e)=>{
		e.preventDefault();
		if (yconst.edit_mode){return;}//if edit mode do nothing
		var row ="<div class=\" "+yconst.editable_block_class_name+" row\" comp=\"none\" >";
		row +="<h1>new row</h1></div>";
		yappend(content,row)
	});
}//end add row

var remove_row =()=>
{	
	var lightbox =yqs(yconst.lightbox_sel);
	yaddEventListener(lightbox,"click",(e)=>{
		e.preventDefault();
		current.remove();//remove current selected element
		yhide(lightbox);
	},yconst.remove_row_btn)
}//end remove row

var row_move_up_down =()=>
{
	//move up
	var lightbox =yqs(yconst.lightbox_sel);
	yaddEventListener(lightbox,"click",(e)=>{
		e.preventDefault();
		moveUp(current);
		yhide(lightbox);
	},yconst.move_up_row_btn);
	
	//move down
	yaddEventListener(lightbox,"click",(e)=>{
		e.preventDefault();
		moveDown(current);
		yhide(lightbox);
	},yconst.move_down_row_btn);
}//end row_move_up_down



//////////utils/////////////
function moveUp($item) {
	var content = yqs(yconst.content)
    $before =yprev($item);
    $before.before($item)
}

function moveDown($item) {
	var content = yqs(yconst.content)
    $after = ynext($item);
    $after.after($item);
}
/////////templates//////////////

var option_link =(name)=>{return "<a class='col s12 l2 btn yitem' href='\#'>"+name+" </a>";}
var remove_link =()=>{return "<a class='col s12 l2 btn red yremove' href='\#'>remove </a>";}
var create_link =(name,yclass)=>{return "<a class='col s12 l2 btn cyan "+yclass+"' href='\#'>"+name+" </a>";}
