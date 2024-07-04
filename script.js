document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer = document.getElementById('videoPlayer');
    var iframe = document.getElementById('myVideo');
    var playButtons = document.querySelectorAll('.play-btn');
    var showBtn = document.querySelector('.btn-bars');
    var closeBtn = document.querySelector('.btn-close');
    var navMenu = document.querySelector('.navbar-collapse');

    playButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var videoUrl = btn.getAttribute('data-video-url');
            playVideo(videoUrl);
        });
    });

    showBtn.addEventListener('click', function() {
        navMenu.classList.add('showMenu');
    });

    closeBtn.addEventListener('click', function() {
        navMenu.classList.remove('showMenu');
    });

    function playVideo(videoUrl) {
        iframe.src = videoUrl + '&autoplay=1';
        videoPlayer.style.display = 'block';
    }

    window.stopVideo = function() {
        iframe.src = '';
        videoPlayer.style.display = 'none';
    };
});
