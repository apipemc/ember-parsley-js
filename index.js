/* jshint node: true */
'use strict';

var fs = require('fs');
var path = require('path');

var DEFAULT_OPTIONS = {
  importLang: 'en',
};

module.exports = {
  name: 'ember-parsley-js',

  included: function(app) {
    this._super.included.apply(this, arguments);

    var options = Object.assign({}, DEFAULT_OPTIONS, app.options['ember-parsley-js']);

    var parsleyPath = path.join(app.bowerDirectory, 'parsleyjs/dist');

    if ( options.importLang ) {
      var langPath = path.join(parsleyPath, 'i18n/' + options.importLang + '.js');
      if ( fs.existsSync(langPath)) {
        var i18nPath = 'i18n/' + options.importLang;
        app.import(path.join(parsleyPath, i18nPath + '.js'));
        if ( fs.existsSync(i18nPath + '.extra.js') ) {
           app.import(path.join(parsleyPath, i18nPath + '.extra.js'));
        }
      } else {
        console.error("Language no exist");
      }
    }

    app.import(path.join(parsleyPath, 'parsley.min.js'));
  }
};
