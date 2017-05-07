import Ember from 'ember';
import layout from '../templates/components/form-parsley';

export default Ember.Component.extend({
  layout,

  tagName: 'form',

  //Attribute default options
  inputs: 'input, textarea, select',
  excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]',
  priorityEnabled: true,
  multiple: null,
  group: null,
  uiEnabled: true,
  validationThreshold: 3,
  focus: 'first',
  eventTrigger: false,
  triggerAfterFailure: 'input',
  errorClass: 'parsley-error',
  successClass: 'parsley-success',

  didInsertElement() {
    this._super(...arguments);

    let options = {
      inputs: this.get('inputs'),
      excluded: this.get('excluded'),
      priorityEnabled: this.get('priorityEnabled'),
      multiple: this.get('multiple'),
      group: this.get('group'),
      uiEnabled: this.get('uiEnabled'),
      validationThreshold: this.get('validationThreshold'),
      focus: this.get('focus'),
      trigger: this.get('eventTrigger'),
      triggerAfterFailure: this.get('triggerAfterFailure'),
      errorClass: this.get('errorClass'),
      successClass: this.get('successClass')
    };

    this.$().parsley(options);
  },

  submit(e){
    e.preventDefault();
    this.sendAction();
  }

});
