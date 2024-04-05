package Challenges.Module1;

public class Music {
    String title;
    String artist;
    int releaseYear;
    int evaluation;
    int totalEvaluations;

    void showsTechnicalSheet(){
        System.out.println("Music Name: " + title);
        System.out.println("Music Artist: " + artist);
        System.out.println("Music Release Year: " + releaseYear);
    }

    void sumEvaluations(int grade){
        evaluation += grade;
        totalEvaluations++;
    }

    void returnAverage(){
        System.out.println("Music Average: " + (evaluation / totalEvaluations));
    }

}
