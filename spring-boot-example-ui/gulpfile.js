var gulp    = require("gulp");
var plugins = require("gulp-load-plugins")({lazy:false});
var config  = require("./gulpfile.config");

var bower         = require("gulp-bower");
var concat        = require("gulp-concat");
var sourcemaps    = require("gulp-sourcemaps");
var uglify        = require("gulp-uglify");
var sass          = require("gulp-sass");
var cleanCss      = require("gulp-clean-css");
var connect       = require("gulp-connect");
var livereload    = require("gulp-livereload");
var watch         = require("gulp-watch");
var jshint        = require("gulp-jshint");
var karma         = require("karma");

var defaultTasks = ["bower", "scripts", "libs", "sass", "fonts", "html-files"];


/**
 * Run test once and exit
 */
gulp.task('test', function (done) {
  new karma.Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task("bower", function() {
    return bower()
        .pipe(gulp.dest('bower_components/'));
})

gulp.task("scripts", function() {
    return gulp.src(config.scripts.src)
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
        .pipe(sourcemaps.init())
        .pipe(concat(config.scripts.dest_filename))
        .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(config.output.dest + config.scripts.dest))
        .pipe(livereload());
});

gulp.task("libs", require("./gulpfile.libraries")(gulp, config, plugins));

gulp.task("sass", function() {
    return gulp.src(config.styles.src)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(concat(config.styles.dest_filename))
        .pipe(cleanCss())
        .pipe(sourcemaps.write("/"))
        .pipe(gulp.dest(config.output.dest + config.styles.dest))
        .pipe(livereload());
});

gulp.task("fonts", function() {
    return gulp.src(config.directories.bower_dir + "/bootstrap-sass-official/assets/fonts/**/*")
        .pipe(gulp.dest(config.output.dest + config.fonts.dest))
        .pipe(livereload());
})

gulp.task("html-files", function() {
    return gulp.src(config.html.src)
        .pipe(gulp.dest(config.output.dest))
        .pipe(livereload());
});

gulp.task("deployment-spec", function() {
    return gulp.src(config.deployment.src)
        .pipe(gulp.dest(config.output.dest));
});

gulp.task("watch", function() {
    livereload.listen();
    gulp.watch(config.directories.app_dir + "/**/*.js", ["scripts"]);
    gulp.watch(config.directories.app_dir + "/**/*.html", ["html-files"]);
    gulp.watch(config.directories.app_sass_dir + "/**/*{.scss,.css}", ["sass"]);
});

gulp.task("server", function() {
    connect.server({
        root: config.output.dest,
        port: config.server.port,
        livereload: true
    });
});

/**
 * Default Task for development -> Set isProduction to false!
 */
gulp.task("default", ["server"].concat(defaultTasks).concat(["watch"]));

/**
 * Distribution Task -> Set isProduction to true!
 */
gulp.task("build", defaultTasks.concat(["deployment-spec"]));
