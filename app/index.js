'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var PropellerGenerator = module.exports = function PropellerGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  this.on('end', function () {
    this.installDependencies({
      skipInstall: options['skip-install'] || options['s'],
      callback: function () {
        this.spawnCommand('grunt', ['build']);
      }.bind(this) // only run grunt build after succesful npm/bower install
    });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(PropellerGenerator, yeoman.generators.Base);

PropellerGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);

  var prompts = [
    {
      type: 'input',
      name: 'siteName',
      message: 'Your project name',
      default: this.appname
    }
  ];

  this.prompt(prompts, function (props) {
    this.siteName = props.siteName;

    cb();
  }.bind(this));
};

PropellerGenerator.prototype.app = function app() {
  this.copy('_package.json', 'package.json');
  this.copy('_bower.json', 'bower.json');
  this.copy('_Gruntfile.js', 'Gruntfile.js');
  this.copy('_README.md', 'README.md');
  this.directory('src', 'src');
};

PropellerGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('editorconfig', '.editorconfig');
  this.copy('gitattributes', '.gitattributes');
  this.copy('gitignore', '.gitignore');
  this.copy('htaccess', 'src/.htaccess');
  this.copy('jshintrc', '.jshintrc');
  this.copy('npmignore', '.npmignore');
};
