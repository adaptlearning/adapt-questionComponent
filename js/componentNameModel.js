import QuestionModel from 'core/js/models/questionModel';

export default class ComponentNameModel extends QuestionModel {

  /**
   * Used to restore the user's answers when revisiting the page or course
   */
  restoreUserAnswers() {
    if (!this.get('_isSubmitted')) return;

    // Note: _userAnswer can only contain arrays, booleans and numbers. 
    // Each array must contain the same type, such that only arrays of arrays, 
    // arrays of booleans and arrays of numbers are allowed. 
    // [[true, false], [0, 1, 2, 3]]
    // [0, 1, 2, 3]
    // [true, false]
    const userAnswer = this.get('_userAnswer');

    this.setQuestionAsSubmitted();
    this.markQuestion();
    this.setScore();
    this.setupFeedback();
  }

  /**
   * Used to check if the user is allowed to submit the question
   * @returns {boolean}
   */
  canSubmit() {}

  /**
   * This evaluates the user's answer and stores the value
   * This value can then be used later on e.g. by the view to show the user's answer
   */
  storeUserAnswer() {
    // Expand on this to retrieve the user's answer as a single value
    const userAnswer;
    this.set('_userAnswer', userAnswer);
  }

  /**
   * Used to establish if the question is correct or not
   * @returns {boolean}
   */
  isCorrect() {}

  /**
   * Used to set the score based upon the _questionWeight
   */
  setScore() {
    // You may wish to expand on the following
    const questionWeight = this.get('_questionWeight');
    const score = this.get('_isCorrect') ? questionWeight : 0;
    this.set('_score', score);
  }

  /**
   * Used by the question to determine if the question is incorrect or partly correct
   * @returns {boolean}
   */
  isPartlyCorrect() {}

  /**
   * Resets the stored user answer
   */
  resetUserAnswer() {}

   /**
   * Used to reset the question when revisiting the component
   * @param {string} [type] - the type of reset e.g. hard/soft
   */
  reset(type = 'hard', canReset = this.get('_canReset')) {
    super.reset(type, canReset);
  }

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
