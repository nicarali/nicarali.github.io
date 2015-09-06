// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();
$(document).ready(function(){
    var captionImgs = $('.blog-content img');
    console.log(captionImgs);
    for(var i=0; i<captionImgs.length; i++){
        img = $(captionImgs[i]);
        imgCopy = img.clone();
        imgAlt = img.attr("alt");
        console.log(imgAlt);
        fig = document.createElement("figure");
        fig = $(fig);
        fig.addClass("small-centered");
        cap = document.createElement("figcaption");
        if(img.hasClass("left")){
            fig.addClass("left");
            imgCopy.removeClass("left");
        } else if (img.hasClass("right")){
            fig.addClass("right");
            imgCopy.removeClass("right");
        }
        cap.innerHTML = imgAlt;
        imgCopy.appendTo(fig);
        $(cap).addClass("hide-for-small-only").appendTo(fig);
        img.replaceWith(fig);
    }
})