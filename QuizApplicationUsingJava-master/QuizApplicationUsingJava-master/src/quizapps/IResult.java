/**
 * 
 */
package quizapps;

/**
 * @author Jatin Varlyani
 *
 */
public interface IResult {
	
	void showResult();
	double showPercentage(int correctAnswers, int totalQuestions);
	String showPerformance(double percentage);
	
}
