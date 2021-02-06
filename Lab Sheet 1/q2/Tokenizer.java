public class Tokenizer {
	String result;
	String kwdRgx;
	String idRgx;
	String numRgx;
	String[][] kwdNameValPair;

	// brackets
	String bracketRgx;
	String[][] bracketNameValPair;

	// operators
	String arithOpRgx;
	String[][] arithOpNameValPair;
	String assnOpRgx;
	String relOpRgx;
	String[][] relOpNameValPair;
	String logOpRgx;
	String bwOpRgx;

	// negative look-behind (?<![\\w]) look-ahead (?![\\w]) can be used
	Tokenizer() {
		idRgx = "[a-zA-Z_][\\w]*";
		numRgx = "\\d+";
		bracketRgx = "(\\s|\\(|\\)|\\[|\\]|\\{|\\})";

		arithOpRgx = "(?<![\\w])(\\+|-|\\*|/|%)(?![\\w])";
		logOpRgx = "(?<![\\w])(&&|\\|\\||!)(?![\\w])";
		relOpRgx = "(?<![\\w])(>|<|==|>=|<=|!=)(?![\\w])";

		setKwdTokens();
		setBracketTokens();
		setArithOpTokens();
		setRelOpTokens();
	}

	private void put(String token) {
		result += token;
	}

	void tokenize(String code) {
		String s = "";
		result = "";
		int i = 0, l = code.length();
		while (i < l) {
			char c = code.charAt(i);
			String s1 = String.valueOf(c);
			if (s1.matches(" ")) {
				put(othToken(s));
				s = "";
			} else if (s1.matches(bracketRgx)) {
				put(othToken(s));
				s = "";
				put(getBracketToken(s1));
			} else if (s1.matches(relOpRgx)) {
				put(othToken(s));
				if (i < l) {
					String s2 = String.valueOf(code.charAt(i + 1));
					if (s2.equals("=")) {
						++i;
						s1 += s2;
					}
				}
				s = "";
				put(getRelOpToken(s1));
			} else if (s1.matches(arithOpRgx)) {
				put(othToken(s));
				if (i < l) {
					String s2 = String.valueOf(code.charAt(i + 1));
					if (s2.equals("=")) {
						++i;
						s1 += s2;
						put(getRelOpToken(s1));
					} else if (s2.matches(".?")) {
						if (s2.equals(" ")) {
							++i;
						}
						put(getarithOpToken(s1));
					}
				}
				s = "";
			} else if (s1.matches("=")) {
				put(othToken(s));
				s = "";
				put("<ASSIGN, =>");
			} else if (s1.matches(";")) {
				put(othToken(s));
				s = "";
				put("<SEMICOLON, ;>");
			} else if (s1.matches("\n")) {
				put(othToken(s));
				s = "";
			} else
				s += String.valueOf(c);
			++i;
		}
	}

	void setKwdTokens() {
		kwdNameValPair = new String[][] { { "IF", "if" }, { "ELSE", "else" }, { "RETURN", "return" } };
		String preKwdRgx = "(?<![\\w])", postKwdRgx = "(?![\\w])";
		kwdRgx = "";
		for (String s[] : kwdNameValPair) {
			kwdRgx += (s[1] + "|");
		}
		kwdRgx = kwdRgx.substring(0, kwdRgx.length() - 1);
		kwdRgx = preKwdRgx + "(" + kwdRgx + ")" + postKwdRgx;
	}

	void setBracketTokens() {
		bracketNameValPair = new String[][] { { "OPEN_PAR", "(" }, { "CLOSE_PAR", ")" } };
	}

	String getBracketToken(String val) {
		for (String[] s : bracketNameValPair) {
			if (s[1].equals(val)) {
				return "<" + s[0] + ", " + s[1] + ">";
			}
		}
		return invToken(val);
	}

	// for keywords
	String getKwdToken(String val) {
		for (String[] s : kwdNameValPair) {
			if (s[1].equals(val))
				return "<" + s[0] + ", " + s[1] + ">";
		}
		return invToken(val);
	}

	// for identifiers
	String getIdToken(String val) {
		return "<ID, " + val + ">";
	}

	// for numbers
	String getNumToken(String val) {
		return "<NUM, " + val + ">";
	}

	void setArithOpTokens() {
		arithOpNameValPair = new String[][] { { "PLUS", "+" }, { "MINUS", "-" }, { "TIMES", "*" } };
	}

	String getarithOpToken(String val) {
		for (String[] s : arithOpNameValPair) {
			if (s[1].equals(val))
				return "<" + s[0] + ", " + s[1] + ">";
		}
		return invToken(val);
	}

	void setRelOpTokens() {
		relOpNameValPair = new String[][] { { "GEQ", ">=" }, { "CLOSE_PAR", ")" } };
	}

	String getRelOpToken(String val) {
		for (String[] s : relOpNameValPair) {
			if (s[1].equals(val))
				return "<" + s[0] + ", " + s[1] + ">";
		}
		return invToken(val);
	}

	boolean isKwd(String s) {
		return s.matches(kwdRgx);
	}

	boolean isId(String s) {
		return s.matches(idRgx);
	}

	boolean isNum(String s) {
		return s.matches(numRgx);
	}

	String invToken(String val) {
		return invToken(val);
	}

	String othToken(String s) {
		if (!s.isEmpty()) {
			if (isKwd(s)) {
				s = getKwdToken(s);
			} else if (isId(s)) {
				s = getIdToken(s);
			} else if (isNum(s)) {
				s = getNumToken(s);
			} else {
				s = invToken(s);
			}
		}
		return s;
	}

}
