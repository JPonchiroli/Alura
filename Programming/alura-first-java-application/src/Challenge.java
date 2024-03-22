import java.util.Scanner;

public class Challenge {
    public static void main(String[] args) {

        Scanner s = new Scanner(System.in);

        String name, accountType;
        double openingBalance;
        int operation = 0;

        System.out.println("Write your Name");
        name = s.nextLine();

        System.out.println("Write the type of your Account");
        accountType = s.nextLine();

        System.out.println("Write the your Opening Balance");
        openingBalance = s.nextDouble();

        System.out.println("*********************************************");
        System.out.println("Initial data of the client");
        System.out.println("Name:            " + name);
        System.out.println("Account Type:    " + accountType);
        System.out.println("Opening Balance: " + openingBalance);
        System.out.println("*********************************************");

        while(operation != 4){
            System.out.println("Operations");

            System.out.println("\n 1- Consult Balance \n 2- Receive Value \n 3- Transfer Value \n 4- Exit \n");
            System.out.println("Write the wanted option");
            operation = s.nextInt();

            if(operation == 1){
                System.out.println("The current balance is R$" + openingBalance + "\n");
                operation = 0;
            } else if (operation == 2) {
                System.out.println("Enter the amount to be received");
                double receiveValue = s.nextDouble();
                openingBalance += receiveValue;
                System.out.println("Updated Balance R$" + openingBalance + "\n");
                operation = 0;
            } else if (operation == 3) {
                System.out.println("Enter the amount to be transferred");
                double transferredValue = s.nextDouble();
                if(transferredValue > openingBalance){
                    System.out.println("Insufficient Balance \n");
                } else {
                    openingBalance -= transferredValue;
                    System.out.println("Updated Balance R$" + openingBalance + "\n");
                }
                operation = 0;
            } else if(operation > 4) {
                System.out.println("Invalid Operation");
                operation = 0;
            }
        }
    }
}
