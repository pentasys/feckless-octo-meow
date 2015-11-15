module.exports = {
    server : {
        port : 80
    },
    directories : {
        app_dir      : "./app",
        app_sass_dir : "./app/css",
        bower_dir    : "./bower_components"
    },
    output : {
        dest : "./dist"
    },
    scripts : {
        src           : ["./app/**/*.js", "!./app/bower_components", "!./app/bower_components/**"],
        dest          : "/scripts",
        dest_filename : "app.all.min.js"
    },
    libraries : {
        src           : "./bower.json",
        dest          : "/scripts",
        dest_filename : "libraries.all.min.js"
    },
    styles : {
        src           : "./app/css/*{.scss,.css}",
        dest          : "/styles",
        dest_filename : "app-style.min.css"
    },
    html : {
        src  : "./app/index.html"
    }
};
