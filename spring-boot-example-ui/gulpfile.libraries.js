module.exports = function (gulp, config, plugins) {
    return function () {

        var bower_json = require(config.libraries.src);
        var files = [];
        for(var lib in bower_json.dependencies) {
            files.push(config.directories.bower_dir + "/" + lib + "/**/" + lib + ".js");
        }

        return gulp.src(files)
            .pipe(plugins.sourcemaps.init())
            .pipe(plugins.concat(config.libraries.dest_filename))
            .pipe(plugins.uglify())
            .pipe(plugins.sourcemaps.write("./"))
            .pipe(gulp.dest(config.output.dest + config.libraries.dest))
    };
};
