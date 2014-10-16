describe("Anagram", function () {
	
    it("should read file word.txt", function () {
		var anagram = new Anagram("/base/js/words.txt");
		expect(anagram.fileContent).toBeDefined();
    });
	
    it("should parse word file", function () {
		var anagram = new Anagram("/base/js/words.txt");
		anagram.parseData();
		expect(anagram.dictionnary).toBeDefined();
		expect(anagram.dictionnary["a"]).toBeDefined();
    });
	
	it("should give words list that match input (letters must be sorted)", function(){
		var anagram = new Anagram("/base/js/words.txt");
		anagram.parseData();
		console.log(anagram.dictionnary["estt"]);
		expect(anagram.dictionnary["estt"].length).toBe(2);
	});
	
	it("should find all anagrams of a word in the file", function(){
		var anagram = new Anagram("/base/js/words.txt");
		anagram.parseData();
		var result = "";
		function printConsole(anagrams){
			result += anagrams.join(' ');
			result += "\n";
		}
		anagram.findAnagrams(printConsole);
		console.log(result);
	});
});