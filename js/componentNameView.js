import QuestionView from 'core/js/views/questionView';

export default class ComponentNameView extends QuestionView {

  /**
   * Used to disable the question during submit and complete stages
   */
  disableQuestion() {}

  /**
   * Used to enable the question during submit and complete stages
   */
  enableQuestion() {}

  /**
   * Used to reset the question when revisiting the component
   * @param {string} [type] - the type of reset e.g. hard/soft
   */
  resetQuestionOnRevisit(type) {}

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
   * Not necessary but you
   */
  onCannotSubmit() {}

  /**
   * This is important and should give the user visual feedback on how they answered the question
   * Normally done through ticks and crosses by adding classes
   */
  showMarking() {}

  /**
   * Resets the look and feel of the component
   * This could also include resetting item data
   * This is triggered when the reset button is clicked so it shouldn't be a full reset
   */
  resetQuestion() {}

  /**
   * Displays the correct answer to the user
   */
  showCorrectAnswer() {}

  /**
   * Displays the user's answer and hides the correct answer
   * Should use the values stored in this.storeUserAnswer
   */
  hideCorrectAnswer() {}

  /**
   * Used by adapt-contrib-spoor to get the user's answers in the format
   * required by the cmi.interactions.n.student_response data field
   * @returns {string} a string representation of the user's answer
   */
  getResponse() {}

  /**
   * Used by adapt-contrib-spoor to get the type of this question in the
   * format required by the cmi.interactions.n.type data field.
   * Please note the answer will not store correctly unless this function returns a valid string
   * @returns {string} one of the following: choice, matching, numeric, fill-in
   */
  getResponseType() {}

}
