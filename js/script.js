// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
    var captionImgs = $('.blog-content img');
    for(var i=0; i<captionImgs.length; i++){
        img = $(captionImgs[i]);
        imgCopy = img.clone();
        imgAlt = img.attr("alt");
        fig = document.createElement("figure");
        fig = $(fig);
        imgCopy.attr('title', imgAlt);
        cap = document.createElement("figcaption");
        if(img.hasClass("left")){
            fig.addClass("left");
            imgCopy.removeClass("left");
        }else if(img.hasClass("right")){
            fig.addClass("right");
            imgCopy.removeClass("right");
        }
        cap.innerHTML = imgAlt;
        imgCopy.appendTo(fig);
        $(cap).appendTo(fig);
        img.parent('p').replaceWith(fig);
    }
});