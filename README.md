hipertextos-framework
=====================

A semantic oriented CSS framework

Presentation
============

Hipertextos is a framework but not exactly a framework. It's rather an example, a way to work when we make web pages. 

Unlike other frameworks, Hipertextos uses CSS classes to create reusable modes of color and text. Hipertextos don't uses preprocessors: no variables, no less, no Sass. Focused on the natural language of HTML, using semantic tags according to the contexts in which they find themselves.

The idea behind Hipertextos framework is that every web developer or designer creates their own framework, according to their needs. It's a starting point, a resource library. Presenting this Framework we just want to give back to the open source community tools that we use in our daily work.

Hipertextos is a core set of HTML, CSS and JS files to developing modern sites and web applications. Like most existing frameworks is developed on HTML5, CSS3 and uses the popular jQuery library script.

In summary, we can say that this framework aims to:

Relieve code
* Separate fully the content (HTML) design and behavior (CSS and JS)
* Minimizing repetition code, which inevitably also suffer all popular frameworks
* Minimizing the use of classes and IDs in HTML documents
* Limit classes to define: components and modes (which are combinable and reusable)
* Limit the use of ID for event management
* Perform in JS only what can not be done properly in CSS
* Encourage the design and content updating
* Touching the minimum the HTML for design issues
* Do all this without losing any features

Some of the components included in the JS framework are authored by third parties and have been incorporated in accordance with its license.

File structure
==============

css/hipertextos.css
---------------
hipertextos.css could be divided into 9 CSS but is unnecessary. It's structured as follows:

* Browser Resets
* HTML5 tags
* Components
* Text modes
* Color Modes
* Animation Modes
* Image Effects
* Font Icons
* Responsive Modes

css/fonts.css
---------

This file connects text modes with fonts required (included in the fonts folder), if not using the online service Google Fonts.

With this project come included (as an example) the following fonts:

* Cabin sketch (Google sources)
* Josefin healthy (source Google)
* Annie use your telescope (Google sources)
* Special elite (Google sources)
* Quattrocento (Google sources)
* Exo (Google sources)
* UnifrakturMaguntia (Google sources)
* Yanone Kaffeesatz (Google sources)
* Icomoon custom pack (icomoon.io)

css/hipertextos-print.css
---------------------

This stylesheet provides friendly styles to print pages directly from browser.

css/hipertextos-noscript.css
------------------------

This stylesheet provides friendly alternatives if javascript is disabled.

js/jquery.js
---------

The last version of the jQuery javascript library is included in the download package.

js/hipertextos.js
--------------

This file provides, with jQuery and in combination with the proper HTML tags, a lot of effects applied to components, very common in modern web pages.

js/hipertextos-layout.js
---------------------

Provides samples of javascript content injection.

templates/blank.html
---------------------

This file provides an HTML5 empty template ready to use.

framework/
----------

This directory contains docs and demos to learn how to use the Hipertextos Framework.

ics/
----
This directory contains some icons from Hipertextos Icon Library used to display framework documentation.

img/
----
This directory contains some basic images used in this framework.


License
=======

Hipertextos Framework is open source and it's distribute under a MIT License. You can use it for free to any purposes, respecting the Copyright and the license terms.

For references, please link the hipertextos home page.


About
=====

Hipertextos was developed by hipertextos.


Website: http://hipertextos.net

Contact: hipertextos@hipertextos.net
