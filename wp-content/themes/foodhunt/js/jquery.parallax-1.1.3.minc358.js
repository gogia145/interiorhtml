/*
Plugin: jQuery Parallax
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/
!function(t){var n=t(window),i=n.height();n.resize(function(){i=n.height()}),t.fn.parallax=function(s,e,o){function a(){var o=n.scrollTop();r.each(function(){var n=t(this),a=n.offset().top,c=h(n);o>a+c||a>o+i||r.css("backgroundPosition",s+" "+Math.round((l-o)*e)+"px")})}var h,l,r=t(this);r.each(function(){l=r.offset().top}),h=o?function(t){return t.outerHeight(!0)}:function(t){return t.height()},(arguments.length<1||null===s)&&(s="50%"),(arguments.length<2||null===e)&&(e=.1),(arguments.length<3||null===o)&&(o=!0),n.bind("scroll",a).resize(a),a()}}(jQuery);
