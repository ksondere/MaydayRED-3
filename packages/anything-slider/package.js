Package.describe({
    summary: "Packages the fanstastic anything slider."
});

Package.on_use(function (api) {
    api.use('jquery','client');
    api.use('templating', 'client');

    var css_path = 'css/';
    //css
    //api.add_files(css_path + 'animate.css', 'client');
    api.add_files(css_path + 'anythingslider.css', 'client');
    api.add_files(css_path + 'anythingslider-override.css', 'client');  
    //api.add_files(css_path + 'theme-construction.css', 'client');
    //api.add_files(css_path + 'theme-cs-portfolio.css', 'client');
    api.add_files(css_path + 'theme-metallic.css', 'client');
    api.add_files(css_path + 'theme-metallic-override.css', 'client');  
    //api.add_files(css_path + 'theme-minimalist-round.css', 'client');
    //api.add_files(css_path + 'theme-minimalist-square.css', 'client');  
      
    // js
    var js_path = 'js/'; 
    api.add_files(js_path + 'jquery.anythingslider.js', 'client');  
    api.add_files(js_path + 'jquery.easing.1.2.js', 'client');  
    api.add_files(js_path + 'swfobject.js', 'client');  
    api.add_files(js_path + 'jquery.anythingslider.fx.js', 'client');
    api.add_files(js_path + 'jquery.anythingslider.video.js', 'client');    
    api.add_files(js_path + 'app-slider.js', 'client');    
  
    
  
    var clientFiles=[
      "images/arrows-metallic.png",
      "images/arrows-minimalist.png",      
      "images/construction.gif",            
      "images/cs-portfolio.png",            
      "images/default.png"
    ];
  
    api.add_files(clientFiles,"client");
    
    var view_path = "views/videos/";
    var viewFiles=[
      view_path + "video_slider.html",
      view_path + "video_slider.js",
      view_path + "video.html"
    ]
    
    api.add_files(viewFiles,"client");
  
    api.export('YoutubeVideos', 'client');
});