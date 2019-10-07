class Search  {
    constructor(text, word){
        this.text = text;
        this.word = word;
    };

	searchWordInText() {
		return this.text;
	};
	getWord() {
		return this.word;
	};
};

class SearchAdapter {
    constructor(adaptee) {
        this.adaptee = adaptee
    }
	searchWordInText() {
        const {adaptee} = this;
		return 'Это слово ' + adaptee.getWord()
			+ ' найдено в тексте ' + adaptee.searchWordInText();
	};
};
const search = new Search("night coding", "night");
const searchAdapter = new SearchAdapter(search); 
const result = searchAdapter.searchWordInText();

console.log(result);