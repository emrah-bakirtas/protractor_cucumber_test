module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js'],
            options: {
                // options here to override JSHint defaults
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true
                }
            }
        },
        protractor: {
            options: {
                noColor: false,
                args: {
                    // Arguments passed to the command
                }
            },
            test: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "e2e-tests/conf/cucumber/protractor.conf.js",
                    keepAlive: true,
                }
            }
        },
        protractor_webdriver:{
            start: {
                command: 'node ./node_modules/protractor/bin/webdriver-manager start --proxy=%PROXY% --ignore_ssl'
            }
        },
        shell: {
            options: {
                stdout: true
            },
            npm_install: {
                command: 'npm install --only=production'
            },
            protractor_install: {
                command: 'node ./node_modules/protractor/bin/webdriver-manager update --proxy=%PROXY% --ignore_ssl'
            }
        }
    });

    grunt.loadNpmTasks('grunt-protractor-webdriver');
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-shell-spawn');

    grunt.registerTask('install', ['shell:npm_install', 'shell:protractor_install']);
    //grunt.registerTask('test', ['jshint', 'protractor_webdriver:update_and_start', 'protractor:test']);

    grunt.registerTask('test', function () {
        try {
            grunt.task.run('jshint');
            grunt.task.run('shell');
            grunt.task.run('protractor_webdriver');
            grunt.task.run('protractor:test');
        } catch (e) {
            // Something went wrong.
            grunt.verbose.or.write().error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });


    //var target = grunt.option('target') || 'def';

    //grunt.loadNpmTasks('grunt-execute');

    //grunt.loadNpmTasks('grunt-contrib-jshint');

    //grunt.loadNpmTasks('grunt-shell-spawn');

    //grunt.loadNpmTasks('grunt-protractor-runner');

    //grunt.loadNpmTasks('perfjankie');

    //grunt.registerTask('default', ['jshint', 'shell','protractor:default']);
    /*
    grunt.registerTask('default', ['jshint', 'execute:target', 'shell', 'protractor:default']);
    grunt.registerTask('default', function (arg) {
        try {
            grunt.task.run('jshint');
            grunt.task.run('execute:target');
            grunt.task.run('shell');
            grunt.task.run('protractor:default');
            // doSomethingThatThrowsAnExceptionOnError(arg);
            // Success!
            //grunt.verbose.ok();
        } catch (e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });

    grunt.registerTask('test', function (arg) {
        try {
            grunt.task.run('jshint');
            grunt.task.run('execute:target');
            grunt.task.run('shell');
            grunt.task.run('protractor:test');
            // doSomethingThatThrowsAnExceptionOnError(arg);
            // Success!
            //grunt.verbose.ok();
        } catch (e) {
            // Something went wrong.
            grunt.verbose.or.write(msg).error().error(e.message);
            grunt.fail.warn('Something went wrong.');
        }
    });

    //grunt.registerTask('test', ['jshint','shell','protractor:test']);

    //grunt.registerTask('noSuite', ['jshint','shell','protractor:noSuite']);
    grunt.registerTask('noSuite', ['jshint', 'execute:target', 'shell', 'protractor:noSuite']);


    grunt.registerTask('browser', ['jshint', 'shell', 'protractor:browser']);

    //var protractorperf = require('protractor-perf');
    // grunt.registerTask('performance', function() {
    //     var donerun = this.async();
    //     // Optional config Object that overwrites properties of conf.js.
    //     // Useful to set property values from grunt.option()
    //     var argv = {
    //         selenium: 'http://localhost:54321/wd/hub',
    //         seleniumPort: 54321,
    //         suite: grunt.option('suite')
    //
    //     };
    //     protractorperf.run(grunt.option('conf'), donerun, argv); // config file
    // });
    grunt.registerTask('run', ['protractorperf']);*/
};