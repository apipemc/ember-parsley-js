/*jshint node:true*/
module.exports = {
  description: 'ember-parsley-js',

  // locals: function(options) {
  //   // Return custom template variables here.
  //   return {
  //     foo: options.entity.options.foo
  //   };
  // }

  afterInstall: function(options) {
      return this.addBowerPackagesToProject([{name: 'parsleyjs', target: '2.7.1'}]);
  }

};
