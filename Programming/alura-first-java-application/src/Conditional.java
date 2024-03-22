public class Conditional {
    public static void main(String[] args) {
        int releaseYear = 2022;
        boolean includedInPlan = true;
        double movieScore = 8.1;
        String planType = "Plan Plus";

        if(releaseYear >= 2022){
            System.out.println("A new Release");
        } else {
            System.out.println("A old Release");
        }

        if(includedInPlan == true || planType.equals("Plan Plus")){
            System.out.println("You can watch the movie");
        } else {
            System.out.println("You can't watch the movie");
        }
    }
}
