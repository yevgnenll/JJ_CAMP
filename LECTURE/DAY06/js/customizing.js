if(!String.prototype.trim){
	String.prototype.trimBefore = function(){
		return this.replace(/^\s+/, '');
	}
	String.prototype.trimAfter = function(){
		return this.replace(/\s+$/, '');
	}
	String.prototype.trim = function(){
		return this.trimAfter().trimBefore();
	}
}

if(!Array.prototype.forEach){

	Array.prototype.forEach = function (callback) {
		var _this = this;
		for(var i=0, l=_this.length; i<l; i++){
			callback.call(undefined, i, _this[i]);
			// callback.call(undefined, _this[i], i);
		}
	}

}