	$(function () {
	    $('#slider')
	        .anythingSlider({
	        resizeContents: true,
	        toggleControls: true,
	        theme: 'metallic',
	        addWmodeToObject: 'opaque',
	        navigationFormatter: function (i, panel) { // add thumbnails as navigation links
            //console.debug("i: " + i + " panel:" + panel);
            var id = 0;
            if (youTubeVideos[i-1] && youTubeVideos[i-1].id)
              id = youTubeVideos[i-1].id || 1;
             
	          return "<img src='http://img.youtube.com/vi/" + id  + "/2.jpg' height='45' width='60'>";
	        }
	    })

	    // Initialize video extension
	    // see https://developers.google.com/youtube/player_parameters?hl=en#Parameters for a list of parameters
	    .anythingSliderVideo({
	        // video id prefix; suffix from $.fn.anythingSliderVideo.videoIndex
	        videoId: 'asvideo',
	        // auto load YouTube api script
	        youtubeAutoLoad: true,
	        // see: https://developers.google.com/youtube/player_parameters#Parameters
	        youtubeParams: {
	            modestbranding: 1,
	            iv_load_policy: 3,
	            fs: 1
	        }
	    });
	});