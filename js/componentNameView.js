import QuestionView from 'core/js/views/questionView';

export default class ComponentNameView extends QuestionView {

  /**
   * Used by question components instead of preRender
   */
  setupQuestion() {}

  /**
   * Used by question components instead of postRender
   */

  onQuestionRendered() {}

  /**
   * Called when the user clicks submit and this.model.canSubmit() returns false
   */
  onCannotSubmit() {}

  /**
   * This determines the show/hide of marking in the template.
   * If shouldShowMarking the user will be given visual feedback on how they answered the question.
   * Normally done through ticks and crosses by adding classes
   */
  shouldShowMarking() {}

  /**
   * Resets the look and feel of the component
   * This could also include resetting item data
   * This is triggered when the reset button is clicked so it shouldn't be a full reset
   */
  resetQuestion() {}

}
