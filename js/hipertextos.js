// Hipertextos Framework Base JS
// Included Components
// ++++++++++++++++++++++++++++++++++++++++++
// General MIT License (MIT)
// Copyright (c) 2013 by Pol Acozar (hipertextos.net)
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


!function ($) {

  $(function(){
   
/* ============================================================
* 	Collapser
* ============================================================ */
	
	$(".collapser div").hide();
	
	$(".collapser span").click(function(){
		$(this).next("div").slideToggle("slow")
		.siblings("div:visible").slideUp("slow");
		$(this).toggleClass("active");
		$(this).siblings("span").removeClass("active");
	});

	
/* ============================================================
* Nav Collapse on mobile devices
* ============================================================ */
	
	$("#nav-collapse").toggleClass("nav-collapsed");
	$("#nav-toggle").click(function(){
		$("#nav-collapse").toggleClass("nav-collapsed");
	});


/* ============================================================
 * bootstrap-dropdown.js v2.2.1
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */
	
	
	  "use strict"; // jshint ;_;
	
	
	 /* DROPDOWN CLASS DEFINITION
	  * ========================= */
	
	  var toggle = '[data-toggle=dropdown]'
		, Dropdown = function (element) {
			var $el = $(element).on('click.dropdown.data-api', this.toggle)
			$('html').on('click.dropdown.data-api', function () {
			  $el.parent().removeClass('open')
			})
		  }
	
	  Dropdown.prototype = {
	
		constructor: Dropdown
	
	  , toggle: function (e) {
		  var $this = $(this)
			, $parent
			, isActive
	
		  if ($this.is('.disabled, :disabled')) return
	
		  $parent = getParent($this)
	
		  isActive = $parent.hasClass('open')
	
		  clearMenus()
	
		  if (!isActive) {
			$parent.toggleClass('open')
			$this.focus()
		  }
	
		  return false
		}
	
	  , keydown: function (e) {
		  var $this
			, $items
			, $active
			, $parent
			, isActive
			, index
	
		  if (!/(38|40|27)/.test(e.keyCode)) return
	
		  $this = $(this)
	
		  e.preventDefault()
		  e.stopPropagation()
	
		  if ($this.is('.disabled, :disabled')) return
	
		  $parent = getParent($this)
	
		  isActive = $parent.hasClass('open')
	
		  if (!isActive || (isActive && e.keyCode == 27)) return $this.click()
	
		  $items = $('[role=menu] li:not(.divider) a', $parent)
	
		  if (!$items.length) return
	
		  index = $items.index($items.filter(':focus'))
	
		  if (e.keyCode == 38 && index > 0) index--                                        // up
		  if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
		  if (!~index) index = 0
	
		  $items
			.eq(index)
			.focus()
		}
	
	  }
	
	  function clearMenus() {
		$(toggle).each(function () {
		  getParent($(this)).removeClass('open')
		})
	  }
	
	  function getParent($this) {
		var selector = $this.attr('data-target')
		  , $parent
	
		if (!selector) {
		  selector = $this.attr('href')
		  selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
		}
	
		$parent = $(selector)
		$parent.length || ($parent = $this.parent())
	
		return $parent
	  }
	
	
	  /* DROPDOWN PLUGIN DEFINITION
	   * ========================== */
	
	  $.fn.dropdown = function (option) {
		return this.each(function () {
		  var $this = $(this)
			, data = $this.data('dropdown')
		  if (!data) $this.data('dropdown', (data = new Dropdown(this)))
		  if (typeof option == 'string') data[option].call($this)
		})
	  }
	
	  $.fn.dropdown.Constructor = Dropdown
	
	
	  /* APPLY TO STANDARD DROPDOWN ELEMENTS
	   * =================================== */
	
	  $(document)
		.on('touchstart.dropdown', '.dropdown-menu', function (e) { e.stopPropagation(); })
		.on('click.dropdown.data-api touchstart.dropdown.data-api', clearMenus)
		.on('click.dropdown touchstart.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
		.on('click.dropdown.data-api touchstart.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
		.on('keydown.dropdown.data-api touchstart.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)
	


/* ============================================================
 * Simple Figure zoomable (by hipertextos)
 * ============================================================ */
  	
			$('.fig-zoomable').toggle(function () {
				$(".fig-zoomable").css({width: "100%"});
			}, function () {
				$(".fig-zoomable").css({width: "50%"});
			});
 
 /* ============================================================
 * Simple Flip Box effect (by hipertextos)
 * ============================================================ */
 
			$('.click').toggle(function(){
					$(this).addClass('flip');
			},function(){
					$(this).removeClass('flip');
			});
    
    
/* ============================================================
 * Simple Modals (based on jquery.leanModal.js by http://leanmodal.finelysliced.com.au/). Licensed under  MIT and GPL licenses.
 * ============================================================ */

    	$.fn.extend({ 
         
        	leanModal: function(options) {
 
            	var defaults = {
              	 top: 20,
               	 overlay: 0.5,
               	 closeButton: null
            	}
            
            	var overlay = $("<div id='lean_overlay'></div>");
            
            	$("body").append(overlay);
                 
            	options =  $.extend(defaults, options);
 
            	return this.each(function() {
            
                	var o = options;
               
                	$(this).click(function(e) {
              
              		var modal_id = $(this).attr("href");

					$("#lean_overlay").click(function() { 
                     	close_modal(modal_id);                    
                	});
                
                	$(o.closeButton).click(function() { 
                     	close_modal(modal_id);                    
                	});
                         	
              		var modal_height = $(modal_id).outerHeight();
        	  		var modal_width = $(modal_id).outerWidth();

        			$('#lean_overlay').css({ 'display' : 'block', opacity : 0 });

        			$('#lean_overlay').fadeTo(300,o.overlay);

        			$(modal_id).css({ 
        		
        				'display' : 'block',
        				'position' : 'fixed',
        				'opacity' : 0,
        				'z-index': 600,
        				'left' : 50 + '%',
        				'margin-left' : -(modal_width/2) + "px",
        				'top' : o.top + "px"
        		
        			});
        			
        			$(modal_id).fadeTo(200,1);
        			
        			$('.page').addClass('zoom-out');
        			
                	e.preventDefault();
                		
              		});
             
            	});

				function close_modal(modal_id){

        			$("#lean_overlay").fadeOut(200);

        			$(modal_id).css({ 'display' : 'none' });
        			
        			$('.page').removeClass('zoom-out');
        			
				}
    
        	}
    	});
     
/* ============================================================
* Notifier
* ============================================================ */
// Notifier v1.0 by Hipertextos (www.hipertextos.net)
// Based on Sticky, a work by Daniel Raftery (http://thrivingkings.com/sticky) deprecated on july 19, 2011
// Licensed under the MIT License
		
		// Using it without an object
		$.htnotifier = function(note, options, callback) { return $.fn.htnotifier(note, options, callback); };
		
		$.fn.htnotifier = function(note, options, callback) 
			{
			// Default settings
			var position = 'htnotifier-inline'; // htnotifier-inline, htnotifier-top
			
			var settings =
				{
				'speed'			:	'fast',	 // animations: fast, slow, or integer
				'duplicates'	:	true,  // true or false
				'autoclose'		:	false  // integer or false
				};
			
			// Passing in the object instead of specifying a note
			if(!note)
				{ note = this.html(); }
			
			if(options)
				{ $.extend(settings, options); }
			
			// Variables
			var display = true;
			var duplicate = 'no';
			
			// Somewhat of a unique ID
			var uniqID = Math.floor(Math.random()*99999);
			
			// Handling duplicate notes and IDs
			$('.htnotifier-note').each(function()
				{
				if($(this).html() == note && $(this).is(':visible'))
					{ 
					duplicate = 'yes';
					if(!settings['duplicates'])
						{ display = false; }
					}
				if($(this).attr('id')==uniqID)
					{ uniqID = Math.floor(Math.random()*9999999); }
				});
			
			// Make sure the htnotifier queue exists
			if(!$('#htnotifier').find('.htnotifier-queue').html())
				{ $('#htnotifier').append('<div class="htnotifier-queue ' + position + '"></div>'); }
			
			// Can it be displayed?
			if(display)
				{
				// Building and inserting htnotifier note
				$('.htnotifier-queue').prepend('<div class="' + position + '" id="' + uniqID + '"></div>');
				$('#' + uniqID).append('<div class="icon-button htnotifier-close" rel="' + uniqID + '">x</div>');
				$('#' + uniqID).append('<div rel="' + uniqID + '">' + note + '</div>');
				
				// Smoother animation
				var height = $('#' + uniqID).height();
				$('#' + uniqID).css('height', height);
				
				$('#' + uniqID).slideDown(settings['speed']);
				display = true;
				}
			
			// Listeners
			$('.htnotifier').ready(function()
				{
				// If 'autoclose' is enabled, set a timer to close the htnotifier
				if(settings['autoclose'])
					{ $('#' + uniqID).delay(settings['autoclose']).fadeOut(settings['speed']); }
				});
			// Closing a htnotifier
			$('.htnotifier-close').click(function()
				{ $('#' + $(this).attr('rel')).dequeue().fadeOut(settings['speed']); });
			
			
			// Callback data
			var response = 
				{
				'id'		:	uniqID,
				'duplicate'	:	duplicate,
				'displayed'	: 	display,
				'position'	:	position
				}
			
			// Callback function?
			if(callback)
				{ callback(response); }
			else
				{ return(response); }
			
			}


	 
/* ============================================================
 * Page transitions
 * ============================================================ */
	 			
			$('body').css('display', 'none');
			$('body').fadeIn(1000);
			$('a.page-transit').click(function(event){
				event.preventDefault();
				linkLocation = this.href;
				$('body').fadeOut(5000, redirectPage);		
			});
			function redirectPage() {
				window.location = linkLocation;
			}


/* ============================================================
 * Persistent subnav on scroll (inspired by Twitter Bootstrap)
 * ============================================================ */
	 
	 var $win = $(window)
	  , $nav = $('.subnav')
	  , navTop = $('.subnav').length && $('.subnav').offset().top - 40
	  , isFixed = 0

	processScroll()

	// hack sad times - holdover until rewrite for 2.1
	$nav.on('click', function () {
	  if (!isFixed) setTimeout(function () {  $win.scrollTop($win.scrollTop() - 47) }, 10)
	})

	$win.on('scroll', processScroll)

	function processScroll() {
	  var i, scrollTop = $win.scrollTop()
	  if (scrollTop >= navTop && !isFixed) {
		isFixed = 1
		$nav.addClass('subnav-fixed')
	  } else if (scrollTop <= navTop && isFixed) {
		isFixed = 0
		$nav.removeClass('subnav-fixed')
	  }
	}
	
	
/* ============================================================
 * Simple Tabs
 * ============================================================ */
		$('.tabs-content a').click(function(){
			switch_tabs($(this));
		});
		switch_tabs($('.defaulttab'));
		
		function switch_tabs(obj){
			$('.panel-tab').hide();
			$('.tabs-content a').removeClass("active");
			var id = obj.attr("rel");
	 
			$('#'+id).show();
			obj.addClass("active");
		}
		
/* ============================================================
 * Smooth Scroll
 * ============================================================ */
		$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[id=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body').animate({scrollTop: targetOffset}, 1000);
					return false;
				}
			}
		});

/* ============================================================
 * Call Code Pretty (needs Google Prettify!)
 * ============================================================ */

	window.prettyPrint && prettyPrint()

  })

}(window.jQuery);




/* ============================================================
 * ResponsiveSlides.js v1.51
 * ============================================================
 * http://responsiveslides.com
 * http://viljamis.com
 * Copyright (c) 2011-2012 @viljamis
 * Available under the MIT license
 */

/*jslint browser: true, sloppy: true, vars: true, plusplus: true, indent: 2 */

(function ($, window, i) {
  $.fn.responsiveSlides = function (options) {

    // Default settings
    var settings = $.extend({
      "auto": true,             // Boolean: Animate automatically, true or false
      "speed": 1000,            // Integer: Speed of the transition, in milliseconds
      "timeout": 4000,          // Integer: Time between slide transitions, in milliseconds
      "pager": false,           // Boolean: Show pager, true or false
      "nav": false,             // Boolean: Show navigation, true or false
      "random": false,          // Boolean: Randomize the order of the slides, true or false
      "pause": false,           // Boolean: Pause on hover, true or false
      "pauseControls": true,    // Boolean: Pause when hovering controls, true or false
      "prevText": "Previous",   // String: Text for the "previous" button
      "nextText": "Next",       // String: Text for the "next" button
      "maxwidth": "",           // Integer: Max-width of the slideshow, in pixels
      "controls": "",           // Selector: Where controls should be appended to, default is after the <ul>
      "namespace": "rslides",   // String: change the default namespace used
      before: function () {},   // Function: Before callback
      after: function () {}     // Function: After callback
    }, options);

    return this.each(function () {

      // Index for namespacing
      i++;

      var $this = $(this),

        // Local variables
        vendor, selectTab, startCycle, restartCycle, rotate, $tabs,

        // Helpers
        index = 0,
        $slide = $this.children(),
        length = $slide.size(),
        fadeTime = parseFloat(settings.speed),
        waitTime = parseFloat(settings.timeout),
        maxw = parseFloat(settings.maxwidth),

        // Namespacing
        namespace = settings.namespace,
        namespaceIdx = namespace + i,

        // Classes
        navClass = namespace + "_nav " + namespaceIdx + "_nav",
        activeClass = namespace + "_here",
        visibleClass = namespaceIdx + "_on",
        slideClassPrefix = namespaceIdx + "_s",

        // Pager
        $pager = $("<ul class='" + namespace + "_tabs " + namespaceIdx + "_tabs' />"),

        // Styles for visible and hidden slides
        visible = {"float": "left", "position": "relative", "opacity": 1, "zIndex": 2},
        hidden = {"float": "none", "position": "absolute", "opacity": 0, "zIndex": 1},

        // Detect transition support
        supportsTransitions = (function () {
          var docBody = document.body || document.documentElement;
          var styles = docBody.style;
          var prop = "transition";
          if (typeof styles[prop] === "string") {
            return true;
          }
          // Tests for vendor specific prop
          vendor = ["Moz", "Webkit", "Khtml", "O", "ms"];
          prop = prop.charAt(0).toUpperCase() + prop.substr(1);
          var i;
          for (i = 0; i < vendor.length; i++) {
            if (typeof styles[vendor[i] + prop] === "string") {
              return true;
            }
          }
          return false;
        })(),

        // Fading animation
        slideTo = function (idx) {
          settings.before();
          // If CSS3 transitions are supported
          if (supportsTransitions) {
            $slide
              .removeClass(visibleClass)
              .css(hidden)
              .eq(idx)
              .addClass(visibleClass)
              .css(visible);
            index = idx;
            setTimeout(function () {
              settings.after();
            }, fadeTime);
          // If not, use jQuery fallback
          } else {
            $slide
              .stop()
              .fadeOut(fadeTime, function () {
                $(this)
                  .removeClass(visibleClass)
                  .css(hidden)
                  .css("opacity", 1);
              })
              .eq(idx)
              .fadeIn(fadeTime, function () {
                $(this)
                  .addClass(visibleClass)
                  .css(visible);
                settings.after();
                index = idx;
              });
          }
        };

      // Random order
      if (settings.random) {
        $slide.sort(function () {
          return (Math.round(Math.random()) - 0.5);
        });
        $this
          .empty()
          .append($slide);
      }

      // Add ID's to each slide
      $slide.each(function (i) {
        this.id = slideClassPrefix + i;
      });

      // Add max-width and classes
      $this.addClass(namespace + " " + namespaceIdx);
      if (options && options.maxwidth) {
        $this.css("max-width", maxw);
      }

      // Hide all slides, then show first one
      $slide
        .hide()
        .css(hidden)
        .eq(0)
        .addClass(visibleClass)
        .css(visible)
        .show();

      // CSS transitions
      if (supportsTransitions) {
        $slide
          .show()
          .css({
            // -ms prefix isn't needed as IE10 uses prefix free version
            "-webkit-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-moz-transition": "opacity " + fadeTime + "ms ease-in-out",
            "-o-transition": "opacity " + fadeTime + "ms ease-in-out",
            "transition": "opacity " + fadeTime + "ms ease-in-out"
          });
      }

      // Only run if there's more than one slide
      if ($slide.size() > 1) {

        // Make sure the timeout is at least 100ms longer than the fade
        if (waitTime < fadeTime + 100) {
          return;
        }

        // Pager
        if (settings.pager) {
          var tabMarkup = [];
          $slide.each(function (i) {
            var n = i + 1;
            tabMarkup +=
              "<li>" +
              "<a href='#' class='" + slideClassPrefix + n + "'>" + n + "</a>" +
              "</li>";
          });
          $pager.append(tabMarkup);

          $tabs = $pager.find("a");

          // Inject pager
          if (options.controls) {
            $(settings.controls).append($pager);
          } else {
            $this.after($pager);
          }

          // Select pager item
          selectTab = function (idx) {
            $tabs
              .closest("li")
              .removeClass(activeClass)
              .eq(idx)
              .addClass(activeClass);
          };
        }

        // Auto cycle
        if (settings.auto) {

          startCycle = function () {
            rotate = setInterval(function () {

              // Clear the event queue
              $slide.stop(true, true);

              var idx = index + 1 < length ? index + 1 : 0;

              // Remove active state and set new if pager is set
              if (settings.pager) {
                selectTab(idx);
              }

              slideTo(idx);
            }, waitTime);
          };

          // Init cycle
          startCycle();
        }

        // Restarting cycle
        restartCycle = function () {
          if (settings.auto) {
            // Stop
            clearInterval(rotate);
            // Restart
            startCycle();
          }
        };

        // Pause on hover
        if (settings.pause) {
          $this.hover(function () {
            clearInterval(rotate);
          }, function () {
            restartCycle();
          });
        }

        // Pager click event handler
        if (settings.pager) {
          $tabs.bind("click", function (e) {
            e.preventDefault();

            if (!settings.pauseControls) {
              restartCycle();
            }

            // Get index of clicked tab
            var idx = $tabs.index(this);

            // Break if element is already active or currently animated
            if (index === idx || $("." + visibleClass).queue('fx').length) {
              return;
            }

            // Remove active state from old tab and set new one
            selectTab(idx);

            // Do the animation
            slideTo(idx);
          })
            .eq(0)
            .closest("li")
            .addClass(activeClass);

          // Pause when hovering pager
          if (settings.pauseControls) {
            $tabs.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

        // Navigation
        if (settings.nav) {
          var navMarkup =
            "<a href='#' class='" + navClass + " prev'>" + settings.prevText + "</a>" +
            "<a href='#' class='" + navClass + " next'>" + settings.nextText + "</a>";

          // Inject navigation
          if (options.controls) {
            $(settings.controls).append(navMarkup);
          } else {
            $this.after(navMarkup);
          }

          var $trigger = $("." + namespaceIdx + "_nav"),
            $prev = $("." + namespaceIdx + "_nav.prev");

          // Click event handler
          $trigger.bind("click", function (e) {
            e.preventDefault();

            // Prevent clicking if currently animated
            if ($("." + visibleClass).queue('fx').length) {
              return;
            }

            //  Adds active class during slide animation
            //  $(this)
            //    .addClass(namespace + "_active")
            //    .delay(fadeTime)
            //    .queue(function (next) {
            //      $(this).removeClass(namespace + "_active");
            //      next();
            //  });

            // Determine where to slide
            var idx = $slide.index($("." + visibleClass)),
              prevIdx = idx - 1,
              nextIdx = idx + 1 < length ? index + 1 : 0;

            // Go to slide
            slideTo($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            if (settings.pager) {
              selectTab($(this)[0] === $prev[0] ? prevIdx : nextIdx);
            }

            if (!settings.pauseControls) {
              restartCycle();
            }
          });

          // Pause when hovering navigation
          if (settings.pauseControls) {
            $trigger.hover(function () {
              clearInterval(rotate);
            }, function () {
              restartCycle();
            });
          }
        }

      }

      // Max-width fallback
      if (typeof document.body.style.maxWidth === "undefined" && options.maxwidth) {
        var widthSupport = function () {
          $this.css("width", "100%");
          if ($this.width() > maxw) {
            $this.css("width", maxw);
          }
        };

        // Init fallback
        widthSupport();
        $(window).bind("resize", function () {
          widthSupport();
        });
      }

    });

  };
})(jQuery, this, 0);
