$(function($) {
	var url = document.URL;
	$("#hipertextos-nav").html('<div class="content">'+
		'<a href="http://hipertextos.net" class="brand"><img src="../img/logo-hipertextos.png" /></a>'+
		'<a href="#" id="nav-toggle" class="nav-toggle"><img src="../ics/32/black/list.png" /></a>'+
		'<div id="nav-collapse">'+
			'<a href="http://hipertextos.net" data-tooltip="Home" class="tip-bottom"><img src="../ics/32/black/home.png" /><span class="visible-phone">Home</span></a>'+
			'<div class="button-group">'+
				'<a data-toggle="dropdown" href="#" data-tooltip="Sections" class="tip-bottom"><img src="../ics/32/black/list.png" /><span class="visible-phone">Sections</span> <div class="caret"></div></a>'+
				'<ul class="dropdown-menu">'+
					'<li><a href="../framework/index.html">Framework</a></li>'+
					'<li><a href="../framework/start.html">Start</a></li>'+
					'<li><a href="../framework/html5template.html">HTML5 template</a></li>'+
					'<li><a href="../framework/basic-styles.html">Basic styles</a></li>'+
					'<li><a href="../framework/page-content.html">Page & content</a></li>'+
					'<li><a href="../framework/layouts-grids.html">Layouts & grids</a></li>'+
					'<li><a href="../framework/box-color-modes.html">Box & color modes</a></li>'+
					'<li><a href="../framework/text-modes-fonts.html">Text modes & fonts</a></li>'+
					'<li><a href="../framework/buttons.html">Buttons</a></li>'+
					'<li><a href="../framework/navigation.html">Navigation</a></li>'+
					'<li><a href="../framework/forms.html">Forms</a></li>'+
					'<li><a href="../framework/tiles.html">Tiles</a></li>'+
					'<li><a href="../framework/tooltips.html">Tooltips</a></li>'+
					'<li><a href="../framework/font-icons.html">Font icons</a></li>'+
					'<li><a href="../framework/animations.html">Animations</a></li>'+
					'<li><a href="../framework/image-frame-effects.html">Image frames & effects</a></li>'+
					'<li><a href="../framework/print-responsive.html">Print & responsive</a></li>'+
					'<li><a href="../framework/scripts-fallbacks.html">Scripts</a></li>'+
					'<li><a href="../framework/plugins.html">Plugins</a></li>'+
					'<li><a href="../framework/license.html">License</a></li>'+
					'<li class="divider"></li>'+
					'<li><a href="http://articles.hipertextos.net">Blog</a></li>'+
					'<li><a href="../services/">Services</a></li>'+
					'<li><a href="../about/">About</a></li>'+
				'</ul>'+
			'</div>'+
			'<div class="button-group">'+
				'<a data-toggle="dropdown" href="#" data-tooltip="Share" class="tip-bottom"><img src="../ics/32/black/share.png" /><span class="visible-phone">Share</span><div class="caret"></div></a>'+
				'<ul class="dropdown-menu">'+
					'<li><a href="http://www.facebook.com/sharer.php?u='+ url +'&t=title"><img src="../ics/32/black/facebookin.png" /> Facebook</a></li>'+
					'<li><a href="https://plusone.google.com/_/+1/confirm?hl=en&url='+ url +'"><img src="../ics/32/black/googleplusin.png" /> Google +</a></li>'+
					'<li><a href="http://twitter.com/?status='+ url +'"><img src="../ics/32/black/twitterin.png" /> Twitter</a></li>'+
				'</ul>'+
			'</div>'+
			'<div class="button-group">'+
				'<a data-toggle="dropdown" href="#" data-tooltip="Translate" class="tip-bottom"><img src="../ics/32/black/translate.png" /><span class="visible-phone">Translate</span><div class="caret"></div></a>'+
				'<ul class="dropdown-menu">'+
					'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=ca&u='+ url +'"><img src="../ics/32/flags/catalan.png" /> Catalan</a></li>'+
					'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=de&u='+ url +'"><img src="../ics/32/flags/deutsch.png" /> Deutsch</a></li>'+
					'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=en&u='+ url +'"><img src="../ics/32/flags/english.png" /> English</a></li>'+
					'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=fr&u='+ url +'"><img src="../ics/32/flags/french.png" /> French</a></li>'+
					'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=it&u='+ url +'"><img src="../ics/32/flags/italian.png" /> Italian</a></li>'+
					'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=pt&u='+ url +'"><img src="../ics/32/flags/portuguese.png" /> Portuguese</a></li>'+
					'<li><a href="http://translate.google.es/translate?hl=es&sl=auto&tl=es&u='+ url +'"><img src="../ics/32/flags/spanish.png" /> Spanish</a></li>'+
				'</ul>'+
			'</div>'+
			'<form class="form-search" action="http://www.google.com/cse">'+
				'<input type="hidden" name="cx" value="003165193387761205229:ixrm4rigjmk" />'+
				'<input type="text" name="q" />'+
				'<input type="submit" name="sa" class="button search-query" value="Search" />'+
			'</form><script type="text/javascript" src="http://www.google.com/cse/brand?form=cse-search-box&lang=ca"></script>'+
		'</div>'+
	'</div>');
});
$(function($) {
	$("#hipertextos-footer").html('<div class="content">'+
		'<div class="layout">'+
			'<div class="span-12">'+
				'<h4 class="title"><a href="http://hipertextos.net">www.hipertextos.net</a></h4>'+
				'<p class="title">Edició electrònica</p>'+
				'<hr />'+
			'</div>'+
			'<div class="span-3">'+
				'<h5 class="title">Rights</h5>'+
				'<p class="title">Copyleft by <a href="../about">Hipertextos</a></p>'+
				'<p class="title"><a href="../framework/licenses.html">Framework licenses</a></p>'+
			'</div>'+
			'<div class="span-3">'+
				'<h5 class="title">Technologies</h5>'+
				'<p class="title">Builded in HTML5 and CSS3</p>'+
			'</div>'+
			'<div class="span-3">'+
				'<h5 class="title">Credits</h5>'+
				'<p class="title">Designed and Coded by<br /> <a href="http://hipertextos.net">www.hipertextos.net</a></p>'+
			'</div>'+
			'<div class="span-3">'+
				'<h5 class="title">Adress</h5>'+
				'<p class="title"><adress><a href="mailto:hipertextos@hipertextos.net">hipertextos@hipertextos.net</a><br />Pla de Besòs, Barcelona</adress></p>'+
			'</div>'+
		'</div>'+
	'</div>');
});