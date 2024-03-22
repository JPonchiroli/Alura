import java.util.Scanner;

public class Read {
    public static void main(String[] args) {
        Scanner s = new Scanner(System.in);

        System.out.println("Type your favorite movie");
        String movie = s.nextLine();

        System.out.println("Whats is the release year of the " + movie);
        int releseYear = s.nextInt();

        System.out.println(movie + " " + releseYear);
    }
}
