/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-parsley-js',
  
  included(app) {
    this.locales = [];
    
    if (app.options && app.options.parsleyjs && app.options.parsleyjs.locales) {
      this.locales = app.options.parsleyjs.locales;
    }

    this._super.included.apply(this, arguments);
  },

  options: {
    nodeAssets: {
      parsleyjs(){
        const localePaths = this.locales.map(locale => `i18n/${locale}.js`)

        return {
          enabled: !process.env.EMBER_CLI_FASTBOOT,
          srcDir: 'dist',
          import: [
            'parsley.min.js'
          ].concat(localePaths)
        };
      }
    }
  }

};
