/* product-search/1.0.2 breadCrumb.js Date:2016-12-06 18:22:05 */
define("js/breadCrumb.js",[],function(require,a){function c(){var a=null;$("#J_searchWrap").delegate("#J_crumbsBar .menu-drop","mouseenter",function(){clearTimeout(a),$(this).addClass("z-menu-drop-open").closest(".crumbs-nav-item").siblings(".crumbs-nav-item").find(".menu-drop").removeClass("z-menu-drop-open")}),$("#J_searchWrap").delegate("#J_crumbsBar .menu-drop","mouseleave",function(){var b=$(this);a=setTimeout(function(){b.removeClass("z-menu-drop-open")},200)})}a.init=c});
