# grunt-properties

> Convert java .properties files to javascript

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-properties --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-properties');
```

## The "properties" task

### Overview
In your project's Gruntfile, add a section named `properties` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  properties: {
    page_config: {
      files: {
        'tmp/page_config.js': ['test/fixtures/page_config.properties'],
      },
    },
    page_color_config: {
      options: {
        namespace: 'mypage'
      },
      files: {
        'tmp/page_color_config.js': ['test/fixtures/page_config.properties', 'test/fixtures/page_color_config.properties'],
      },
    },
  },
})
```

### Options

#### options.namespace
Type: `String`
Default value: `'config'`

Use a previously defined namespace.

### Usage Examples

#### Default namespace config
```js
grunt.initConfig({
  properties: {
    options: {},
    files: {
      'tmp/page_config.js': ['test/fixtures/page_config.properties'],
    },
  },
})
```

#### Customized namespace
```js
grunt.initConfig({
  properties: {
    page_color_config: {
      options: {
        namespace: 'mypage'
      },
      files: {
        'tmp/page_color_config.js': ['test/fixtures/page_config.properties', 'test/fixtures/page_color_config.properties'],
      },
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
  * 2013-05-22   v0.1.0   Initial release.

## Credits
* [node-properties-parser](https://github.com/xavi-/node-properties-parser)
* The Nicholas C. Zakas awesome project [props2js](https://github.com/nzakas/props2js).
