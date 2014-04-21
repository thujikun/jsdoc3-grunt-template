jsdoc3-grunt-template
===========================

## Introduction
The template for grunt tasks by JSDoc3 uses: [jsdoc3-bootstrap](https://github.com/alivedise/jsdoc3-bootstrap).

## Usage
### Install grunt-jsdoc on your project directory.

```
npm install grunt-jsdoc --save-dev
```

### Clone this repository in template files directory of your project.  
for example "jsdoc-templates/"

```
cd jsdoc-templates/
git clone git@github.com:thujikun/jsdoc3-grunt-template.git
```

### Create grunt task for jsdoc.

```
jsdoc: {
    dist: {
        src: [
            './Gruntfile.js'
        ],
        options: {
            destination: 'docs/grunt/',
            configure: 'jsdoc-templates/jsdoc3-grunt-template/jsdoc.conf.json',
            template: 'jsdoc-templates/jsdoc3-grunt-template'
        },
    },
}
```

### Write jsdoc comment in your Gruntfile.js.

```
/**
 * @function grunt
 * @desc default grunt task
 */
grunt.registerTask('default', [
    'your tasks'
]);

/**
 * @function grunt serve
 * @desc create server and watch
 */
grunt.registerTask('serve', [
    'connect',
    'watch'
]);
```

### Modify document title in jsdoc.conf.json file templates.title section.

```
{
    "tags"      : {
        "allowUnknownTags" : true
    },
    "plugins"   : ["plugins/markdown"],
    "templates" : {
        "title" : "Your JSDoc Document Name"
    },
    "markdown"  : {
        "parser"   : "gfm",
        "hardwrap" : true
    }
}
```

### Execute ```grunt jsdoc ``` and you can get Document in destination directory!

#### License
[MIT License](http://en.wikipedia.org/wiki/MIT_License)