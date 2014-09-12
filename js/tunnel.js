/* 
    Created on : Sep 11, 2014, 11:46:17 AM
    Author     : Subhajit
    Contact    : art.subhajit@gmail.com // for your advice and suggestions 
 */

jQuery(document).ready(function(event) {
    jQuery("a[data-nbg='nbg-tunnel']").click(function() {
        tunnel_gallery();
        stack_gallery(2000);
    });
    jQuery(".nbg-link").each(function() {
        var height = jQuery(this).parent().css("height");
        jQuery(this).css("height", height);
        jQuery(this.a).css("height", height);
        //jQuery(this).css("line-height",height);
    });
});
//------------------------------------------------------------------------------------------------------------------- tunnel
function tunnel_gallery()
{    
    timerFunction = setInterval(tunnelanimate, 20);
}
function tunnelanimate()
{
    var clip = document.getElementById("circle1");
    var rad = clip.getAttribute("r");
    var tunnel_width = jQuery("#tunnel-mask").parent().width();
    var newrad = 2 + parseInt(rad);    
    if (newrad > tunnel_width)
    {
        clearInterval(timerFunction);
        clip.setAttribute("r", 0);
        timerFunction = null;
    }
    else
    {       
        clip.setAttribute("r", newrad);
    }
}
//------------------------------------------------------------------------------------------------------------------- stack gallery
function stack_gallery(animation_speed)
{
    var last_liHtml = '<li>' + jQuery(".stack-gallery li:last").html() + '</li>';
    jQuery(".stack-container").append("<div class='ub-stack-over'></div>");
    jQuery(".stack-gallery li:first").before(last_liHtml);
    //jQuery(".ub-stack-gallery li:last").css({zIndex:'1'});
    jQuery(".stack-gallery li:nth-last-child(2)").css({zIndex: '3'});
    jQuery(".stack-gallery li:nth-last-child(2)").find("div").addClass("cliptarget");
    jQuery(".stack-gallery li:last").css({zIndex: '1'});
    /* -- extra addition -- */
    jQuery("div.tunnel ul.stack-gallery li:last").addClass("tunnel-zoom");//for tunnel effect
    setTimeout(function() {
        jQuery(".stack-gallery li:nth-last-child(2)").find("div").removeClass("cliptarget");
        jQuery(".stack-gallery li:last").remove();
        jQuery(".stack-gallery li:last").css({zIndex: 'auto'});
        jQuery(".stack-over").remove();
    }, animation_speed);
}


