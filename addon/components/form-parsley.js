import Ember from 'ember';
import layout from '../templates/components/form-parsley';

const { Component, assign } = Ember;

export default Component.extend({
  layout,

  tagName: 'form',

  parsleyRef: null,

  // Default data-namespace for DOM API
  namespace: 'data-parsley-',
  // Supported inputs by default
  inputs: 'input, textarea, select',
  // Excluded inputs by default
  excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]',
  // Stop validating field on highest priority failing constraint
  priorityEnabled: true,
  // identifier used to group together inputs (e.g. radio buttons...)
  multiple: null,
  // identifier (or array of identifiers) used to validate only a select group of inputs
  group: null,
  // Enable\Disable error messages
  uiEnabled: true,
  // Key events threshold before validation
  validationThreshold: 3,
  // Focused field on form validation error. 'first'|'last'|'none'
  focus: 'first',
  // event(s) that will trigger validation before first failure. eg: `input`...
  eleTrigger: false,
  // event(s) that will trigger validation after first failure.
  triggerAfterFailure: 'input',
  // Class that would be added on every failing validation Parsley field
  errorClass: 'parsley-error',
  // Same for success validation
  successClass: 'parsley-success',
  // ul elem that would receive errors' list
  errorsWrapper: '<ul class="parsley-errors-list"></ul>',
  // li elem that would receive error message
  errorTemplate: '<li></li>',

  didInsertElement() {
    this._super(...arguments);

    let options = this.getProperties(
    ['inputs',
      'excluded',
      'priorityEnabled',
      'multiple',
      'group',
      'uiEnabled',
      'validationThreshold',
      'focus',
      'triggerAfterFailure',
      'errorClass',
      'successClass',
      'errorsWrapper',
      'errorTemplate'
    ]);

    assign(options, {
      trigger: this.get('eventTrigger'),
      classHandler: this._classHandler.bind(this),
      errorsContainer: this._errorsContainer.bind(this),
    });

    let parsleyRef = this.$().parsley(options);

    this.set('parsleyRef', parsleyRef);
  },

  willDestroyElement() {
    this.get('parsleyRef').destroy();
  },

  submit(e) {
    e.preventDefault();
    this.sendAction();
  },

  _classHandler(element) {
    this.sendAction('classHandler', element);
  },

  _errorsContainer(element) {
    this.sendAction('errorsContainer', element);
  }

});
