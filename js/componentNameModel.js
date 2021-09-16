import QuestionModel from 'core/js/models/questionModel';

export default class ComponentNameModel extends QuestionModel {

  /**
   * Used to restore the user's answers when revisiting the page or course
   */
  restoreUserAnswers() {
    if (!this.get('_isSubmitted')) return;

    // The user answer is retrieved here
    // This value can then be used to set individual answers on items
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
}
