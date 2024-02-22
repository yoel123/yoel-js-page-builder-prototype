yready(()=>{
	
	ylog("ready")
	
	//get json
	get_components();
	//init lightbox
	y_lightbox(yconst.lightbox_sel,"",yconst.lightbox_close)
	//init yeditable
	show_options();
	click_options();//click on yeditable div
	remove_row();
	//sidebar do
	add_row();
	row_move_up_down();
	edit_mode_checkbox();
	get_html();
	import_html();
	import_layout();
	export_layout();
	save_as_zip();
	
	//edit mode
	click_h()
	click_p()
	//click_span()
	click_a()
	click_img()
	//click_img_link()
	
	
});//end ready