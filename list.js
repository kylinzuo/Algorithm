/*== start 定义一个列表 ===========================================================================*/

//== 给列表添加元素 =============================
function append(element){
	this.dataStore[this.listSize++] = element;
}
//== 在列表中查找某一个元素 ======================
function find(element){
	for(var i=0; i<this.dataStore.length; i++){
		if(this.dataStore[i] == element){
			return i;
		}
	}
	return -1;
}
//== 从列表中删除元素 ===========================
function remove(element){
	var findAt = this.find(element);
	if(findAt > -1){
		this.dataStore.splice(findAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}
//== 列表中有多少个元素 =========================
function length(){
	return this.listSize;
}
//== 显示列表中的元素 ===========================
function toString(){
	return this.dataStore;
}
//== 向列表中插入一个元素 =======================
function insert(element, after){
	var insertPos = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos+1, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}
//== 清空列表中的所有的元素 =====================
function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.dataStore.length = 0;
	this.listSize = this.pos = 0;
}
//== 判断给定值是否在列表中 ======================
function contains(element){
	for(var i=0; i<this.dataStore.length; i++){
		if(this.dataStore[i] == element){
			return true;
		}
	}
	return false;
}
//== 遍历列表 ==================================
function front(){
	this.pos = 0;
}
function end(){
	this.pos = this.listSize - 1;
}
function prev(){
	--this.pos;
}
function next(){
	if (this.pos < this.listSize){
		++this.pos;
	}
}
function currPos(){
	return this.pos;
}
function moveTo(postion){
	this.pos = position;
}
function getElement(){
	return this.dataStore[this.pos];
}
function hasNext(){
	return this.pos < this.listSize;
}
function hasPrev(){
	return this.pos >=0;
}

function list(){
	this.listSize = 0;
	this.pos = 0;
	this.dataStore = [];
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.hasNext = hasNext;
	this.hasPrev = hasPrev;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
}

/*== end 定义一个列表 ===========================================================================*/







var names = new list();
names.append("hello");
names.append("world");
names.append("html5");
names.append("css3");
names.append("javascript");
names.append("jquery");
names.append("angularJS");
names.append("vue.js");
console.log(names.toString());
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());
names.next();
names.next();
console.log(names.getElement());
console.log("");
console.log("");
console.log("");
for(names.front(); names.hasNext(); names.next()){
	console.log(names.getElement());
}





