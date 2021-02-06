import java.io.File; // import the File class
import java.io.FileNotFoundException; // handling errors
import java.io.FileWriter;
import java.io.IOException; // handling errors
import java.util.Scanner; // read text files

class q2 {
	public static void main(String[] args) {
		Tokenizer t = new Tokenizer();
		// read from file q2_code.txt
		try {
			String code = "if (txn >= 20) rxn = txn * 100;else rxn = txn - 10;";
			File myObj = new File("q2_code.txt");
			Scanner myReader = new Scanner(myObj);
			while (myReader.hasNextLine()) {
				code += myReader.nextLine();
			}
			t.tokenize(code);
			myReader.close();
		} catch (FileNotFoundException e) {
			System.out.println("the file was not found");
			// e.printStackTrace();
		}
		
		// write to a file q2_tokenized.txt
		try {
			String fileName = "q2_tokenized.txt";
			FileWriter myWriter = new FileWriter(fileName);
			myWriter.write(t.result);
			myWriter.close();
			System.out.println("successfully wrote to the file.");
		} catch (IOException e) {
			System.out.println("the file was not found");
			// e.printStackTrace();
		}
		System.out.println(t.result);
	}
}
