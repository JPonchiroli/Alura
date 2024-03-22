public class Main {
    public static void main(String[] args) {
        System.out.println("This is Sreen Match");
        System.out.println("Movie: Top Gun: Maverick");

        int releaseYear = 2022;
        boolean includedInPlan = true;
        double movieScore = 8.1;

        double average = (9.8 + 6.3 + 8.0) / 3;
        System.out.println(average);

        String synopsis = """
                          Top Gun: Maverick
                          A adventure movie with Tom Cruise
                          Release Year: %d 
                          """.formatted(releaseYear);
        System.out.println(synopsis);

        int classification = (int) (average / 2);
        System.out.println(classification);
    }
}