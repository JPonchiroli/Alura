import java.util.Scanner;

public class Loop {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        double score = 0, averageEvaluation = 0;
        int scoreTotal = 0;
        /*
        for (int i = 0; i < 3; i++) {
            System.out.println("Whats is the score of the movie");
            score = s.nextDouble();

            averageEvaluation += score;
        }*/

        while (score != -1) {
            System.out.println("Whats is the score of the movie or -1 to cancel");
            score = s.nextDouble();

            if(score != -1){
                averageEvaluation += score;
                scoreTotal++;
            }
        }

        System.out.println("The Average Evaluation of the movie is " + averageEvaluation / scoreTotal);
    }
}
