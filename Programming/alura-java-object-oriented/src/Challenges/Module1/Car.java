package Challenges.Module1;

public class Car {
    String model;
    int releaseYear;
    String color;
    int carAge;

    void showsTechnicalSheet(){
        System.out.println("Car name: " + model);
        System.out.println("Car Release Year: " + releaseYear);
        System.out.println("Car Color: " + color);
    }

    void calculateCarAge(int currentYear){
        carAge = currentYear - releaseYear;
        System.out.println("Car Age: " + carAge);
    }

}
