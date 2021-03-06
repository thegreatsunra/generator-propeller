# generator-propeller 0.5.8

> [Yeoman](http://yeoman.io) generator for [Propeller](http://propellerjs.com), a static site generator built on [Assemble](http://assemble.io) and [Bootstrap 3](http://getbootstrap.com).

## Getting started

1. Download and install [Node](http://nodejs.org)
1. At the command line install [Yeoman](http://yeoman.io), [Bower](http://bower.io) and [Grunt](http://gruntjs.com) globally by typing `sudo npm install -g yo bower grunt-cli`
1. Install the Propeller generator for Yeoman by typing `sudo npm install -g generator-propeller`

## Usage

1. Create an empty folder for your Propeller project, and navigate into it at the command line
1. Generate a new Propeller project in the folder by typing `yo propeller` at the command line and following the prompts

### Now you're ready to use Propeller

1. Once Yeoman is finished creating your project, type `grunt` at the command line to run the tasks to generate your static site, which will appear in a `/dist` folder
1. Type `grunt serve` to start your development server. Propeller will monitor the files in the `/src` folder and update your static site whenever it detects changes
1. Open [http://localhost:9000](http://localhost:9000) in a web browser to view your site
1. Begin creating your site by modifying the files in the `/src` folder

## Additional Information

* Propeller uses [Assemble](http://assemble.io) and [Handlebars](http://handlebarsjs.com) as its templating engine
* When the server is running it monitors for file updates, and automatically regenerates the static files
* The server also monitors for changes to [LESS](http://lesscss.org) files, and automatically compiles them into static CSS files when updated

## Resources

* [propeller](http://propellerjs.com)
* [assemble](http://assemble.io)
* [yeoman](http://yeoman.io)
* [bower](http://bower.io)
* [grunt](http://gruntjs.com)

## License

The MIT License (MIT)

Copyright (c) 2014 Dane Petersen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
