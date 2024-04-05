package Challenges.Module2;

public class Person {
    private String name;
    private int age;
    public String higherAge;

    void verifyAge(int age){
        if(age >= 18){
            higherAge =  "Yes";
        } else {
            higherAge = "No";
        }
    }

    void showPersonsAttributes(){
        System.out.println("Person Name: " + getName());
        System.out.println("Person Age: " + getAge());
        System.out.println("The Person is Higher Age?: " + higherAge);
    }


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }
}
