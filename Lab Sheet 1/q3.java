import java.util.Scanner;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

 

class q3{
    public static void main(String[] args){
        Scanner sc = new Scanner(System.in);
        
        String s = sc.nextLine();
        
        if(s.matches("[a-zA-Z_][\\w]*")){
            System.out.println("Identifier");
        }
        else if(s.matches("[0-9]+")){
            System.out.println("Number");
        }
        else{
            System.out.println("Not a valid lexeme");
        }
    }
}
