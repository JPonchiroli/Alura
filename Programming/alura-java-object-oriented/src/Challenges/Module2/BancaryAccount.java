package Challenges.Module2;

import org.w3c.dom.ls.LSOutput;

public class BancaryAccount {

    private int accountNumber;
    private double balance;
    public String owner;

    void showAccount(){
        System.out.println("Account Number: " + getAccountNumber());
        System.out.println("Account Balance: R$" + getBalance());
        System.out.println("Account Owner: " + owner);
    }


    public int getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }
}
