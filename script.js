
//dropdown list
$('.faux-select').click(function(){
    $(this).toggleClass('open');
    $('.options',this).toggleClass('open');
  });
  
  $('.options li').click(function(){
    var selection = $(this).text();
    var dataValue = $(this).attr('data-value');
    $('.selected-option span').text(selection);
    $('.faux-select').attr('data-selected-value',dataValue);
  });

var scroller = document.getElementsByClassName("options");

//news carousel
var slideIndex = 1;
var articleIndex = 1;
let timerSlides;

    function showSlides() {
        clearTimeout(timerSlides);
        var slides = document.getElementsByClassName("mySlides");
        var articles = document.getElementsByClassName("article-block");
        if (slideIndex > slides.length) {
            slideIndex = 1;
            articleIndex = 1;
        }
        if (slideIndex < 1) {
            slideIndex = slides.length;
            articleIndex = slideIndex;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
            articles[i].style.display = "none";
        }
        slides[slideIndex-1].style.display = "block";
        articles[articleIndex-1].style.display = "block";
        var dots = document.getElementsByClassName("slide-dot");
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" slide-dot-active", "");
       }
        dots[slideIndex-1].className += " slide-dot-active";

        timerSlides = setTimeout(plusSlides, 7000, 1);
    }
    
    function plusSlides(n) {
        slideIndex += n;
        articleIndex += n;
        showSlides();
    }
    
    function currentSlide(n) {
        slideIndex = n;
        articleIndex = n;
        showSlides();
    }


//video carousel
var videoIndex = 1;
let timerVideos;

    function showVideos() {
        clearTimeout(timerVideos);
        var videos = document.getElementsByClassName("video-item");
        if (videoIndex > videos.length) {
            videoIndex = 1;
        }
        if (videoIndex < 1) {
            videoIndex = videos.length;
        }
        for (var i = 0; i < videos.length; i++) {
            videos[i].style.display = "none";
        }
        videos[videoIndex-1].style.display = "block";

        timerVideos = setTimeout(plusVideo, 5000, 1);
    }
    
    function plusVideo(n) {
        videoIndex += n;
        showVideos();
    }
    
    function currentVideo(n) {
        videoIndex = n;
        showVideos();
    }

//photos changed by buttons
var photoIndex = 1;

    function showPhotos() {
        var photos = document.getElementsByClassName("photo-display");
        for (var i = 0; i < photos.length; i++) {
            photos[i].style.display = "none";
        }
        photos[photoIndex-1].style.display = "block";

        var photoButtons = document.getElementsByClassName("photo-button");
        for (var i = 0; i < photoButtons.length; i++) {
            photoButtons[i].className = photoButtons[i].className.replace(" photo-button-active", "");
       }
        photoButtons[photoIndex-1].className += " photo-button-active";
    }
    
    function currentPhoto(n) {
        photoIndex = n;
        showPhotos();
    }


//blocks changed by buttons
var blockIndex = 1;

function showBlocks() {
    var blocks = document.getElementsByClassName("block-display");
    for (var i = 0; i < blocks.length; i++) {
        blocks[i].style.display = "none";
    }
    blocks[blockIndex-1].style.display = "block";

    var blockButtons = document.getElementsByClassName("block-button");
    for (var i = 0; i < blockButtons.length; i++) {
        blockButtons[i].className = blockButtons[i].className.replace(" block-button-active", "");
   }
    blockButtons[blockIndex-1].className += " block-button-active";
}

function currentBlock(n) {
    blockIndex = n;
    showBlocks();
}

window.onload = function() {
    showSlides();
    showVideos();
    showPhotos();
    showBlocks();
}

//сборка данныхс файла data.txt
