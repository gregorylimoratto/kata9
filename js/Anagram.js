(function(){

	var anagram = function(wordFile){
		this.dictionnary = {};
		this.fileContent = null;
		if (wordFile){
			var xmlhttp = new XMLHttpRequest();
			xmlhttp.onreadystatechange = function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					this.fileContent = xmlhttp.responseText;
				}
			}.bind(this);
			xmlhttp.open("GET", wordFile, false);
			xmlhttp.send();
		}
	};
	
	function calculateKey(word){
		return word.split("").sort().join("");
	}
	
	anagram.prototype.parseData = function(){
		var words = this.fileContent.split('\n');
		words = words.sort();
		for(var i=0; i <= words.length; i++){
			if (words[i]){
				var key = calculateKey(words[i]);
				if (!this.dictionnary[key]){
					this.dictionnary[key] = [];
				}
				this.dictionnary[key].push(words[i]);
			}
		}
	};
	
	anagram.prototype.findAnagrams = function(callback){
		for(var prop in this.dictionnary) {
			if(this.dictionnary.hasOwnProperty(prop)){
				if (this.dictionnary[prop].length > 1){
					if (callback){
						callback(this.dictionnary[prop]);
					}
				}
			}
		}
	}
	
	window.Anagram = anagram;
}());