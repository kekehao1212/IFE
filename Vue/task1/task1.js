function Observer(object) {
	var o = {}
		for(property in object){
			Object.defineProperty(o,property,{
				set:function(newValue){
					console.log(this["_" + property] + " changed to " + newValue)
					this["_" + property] = newValue
				},
				get:function(){
					console.log('you get ' + this["_" + property])
					return this["_" + property]
				}
			})
			Object.defineProperty(o,"_"+property,{
				value : object[property],
				writable : false
			})
		}
	return o
}

var hah = new Observer({
	haha: 4,
	kdlfj: "saldkj"
})




// var book = {
// 	_year:2017
// }

// Object.defineProperties(book,{
//     _year:{
//         writable:false
//     },
//     year:{
//         set: function(newValue){
//             this._year = newValue
//         },
//         get: function(){
//         	console.log(this)
//             return this._year + "from getter"
//         }
//     }
// })
// console.log(book)
