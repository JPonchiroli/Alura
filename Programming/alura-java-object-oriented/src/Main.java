import Model.Movie;

public class Main {
    public static void main(String[] args) {
        Movie mov = new Movie();
        mov.setName("The godfather");
        mov.setReleaseYear(1972);
        mov.setDurationInMinutes(175);
        mov.setIncludeOnPlan(true);

        mov.evaluate(8);
        mov.evaluate(5);
        mov.evaluate(10);

        mov.showsTechnicalSheet();
        System.out.println("Total Evaluations: " + mov.getTotalEvaluations());
        System.out.println("Movie Average: " + mov.returnAverage());

    }
}
