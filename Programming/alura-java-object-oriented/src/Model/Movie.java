package Model;

public class Movie {
    private String name;
    private int releaseYear;
    private boolean includeOnPlan;
    private double sumOfRatings;
    private int  totalEvaluations;
    private int durationInMinutes;

    public int getTotalEvaluations(){
        return totalEvaluations;
    }

    public void showsTechnicalSheet(){
        System.out.println("Model.Movie Name: " + name);
        System.out.println("Release Year: " + releaseYear);
        System.out.println("Duration in Minutes: " + durationInMinutes);
        if(isIncludeOnPlan()){
            System.out.println("Include on Plan: Yes");
        } else {
            System.out.println("Include on Plan: No");
        }
    }

    public void evaluate(double grade){
        sumOfRatings += grade;
        totalEvaluations++;
    }

    public double returnAverage(){
        return sumOfRatings / totalEvaluations;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setReleaseYear(int releaseYear) {
        this.releaseYear = releaseYear;
    }

    public void setIncludeOnPlan(boolean includeOnPlan) {
        this.includeOnPlan = includeOnPlan;
    }

    public void setDurationInMinutes(int durationInMinutes) {
        this.durationInMinutes = durationInMinutes;
    }

    public String getName() {
        return name;
    }

    public int getReleaseYear() {
        return releaseYear;
    }

    public boolean isIncludeOnPlan() {
        return includeOnPlan;
    }

    public int getDurationInMinutes() {
        return durationInMinutes;
    }


}
