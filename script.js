document.addEventListener('DOMContentLoaded', function() {
    var videoPlayer = document.getElementById('videoPlayer');
    var iframe = document.getElementById('myVideo');
    var playButtons = document.querySelectorAll('.play-btn');
    var closeBtn = document.querySelector('.close-btn');

    playButtons.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var videoUrl = btn.getAttribute('data-video-url');
            playVideo(videoUrl);
        });
    });

    function playVideo(videoUrl) {
        iframe.src = videoUrl + '&autoplay=1';
        videoPlayer.style.display = 'block';
    }

    closeBtn.addEventListener('click', function() {
        stopVideo();
    });

    window.stopVideo = function() {
        iframe.src = '';
        videoPlayer.style.display = 'none';
    };
});
