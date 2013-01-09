;(function($){  
  function log(debugtext) {
		if ( $('#logger').length == 0 ){ 
			var $logger = '<div id=\'logger\' style=\'position: absolute;bottom:10px;right: 12px;width:25%;height:150px;overflow: auto; background:rgba(0, 0, 0, 0.5); padding:10px; color:#fff; opacity:0.8; \'></div>';
			$('body').append($logger); 
			$('#logger').prepend(navigator.userAgent);
		}
		if (log && typeof (window['console']) != "undefined") { 
			jQuery.error = console.error; console.log(debugtext);
		}
		$('#logger').append('<p style=\'font-size:13px;padding:2px;border-bottom: 1px solid #ccc;margin: 0;\'>'+debugtext+'</p>').scrollTop(999999);
		$('#logger p:nth-child(even)').css('background-color','#FFFFE8');
	}
	this.log = log; 
})(jQuery); 

/* Usage
$('#test').click( function(){  
  log('me')
});*/
