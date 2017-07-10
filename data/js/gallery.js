// JavaScript Document

'use strict';

$(document).ready(function(e) {
	var front_slider = null;
	
	//front slider
	if(typeof MasterSlider == 'function') {
		front_slider = new MasterSlider();
	
		front_slider.control('arrows', { autohide:false });			//add arrows
		front_slider.control('bullets', { dir:'v', autohide:false });		//add vertical bullets
		front_slider.control('timebar', { autohide:false, align:'top', color:'#01bab0' });		//add top timebar
		front_slider.control('thumblist' , { autohide:false, align:"bottom", inset:true, width:150, height:104 });	//add thumbnails
	
		front_slider.setup('masterslider', {
			width:1400,
			height:800,
			space:0,
			view:'basic',
			layout:'fullscreen',
			speed:20,
			autoplay:true,
			overPause:false
		});
		front_slider.api.pause();
	}

});