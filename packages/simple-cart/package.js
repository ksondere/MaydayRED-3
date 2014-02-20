Package.describe({
    summary: "Packages the wojodesign simplecart-js."
});

Package.on_use(function (api) {
    api.use('jquery','client');
    api.use('templating', 'client');

    var clientFiles=[
      "simpleCart.js",
    ];
  
    api.add_files(clientFiles,"client");
  
    //api.export('YoutubeVideos', 'client');
});