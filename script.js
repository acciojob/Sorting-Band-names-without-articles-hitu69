// // //your code here

// // let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// // // Function to remove articles from the beginning of a string
// // function removeArticle(str) {
// //   let words = str.split(' ');
// //   if (words.length > 1 && (words[0].toLowerCase() === 'a' || words[0].toLowerCase() === 'an' || words[0].toLowerCase() === 'the')) {
// //     words.splice(0, 1);
// //   }
// //   return words.join(' ');
// // }

// // // Sort the band names without articles
// // touristSpots.sort((a, b) => {
// //   const bandA = removeArticle(a);
// //   const bandB = removeArticle(b);
// //   return bandA.localeCompare(bandB);
// // });

// // // Display the sorted band names inside an unordered list with id 'band'
// // const bandList = document.getElementById('band');
// // for (let i = 0; i < touristSpots.length; i++) {
// //   const listItem = document.createElement('li');
// //   listItem.textContent = touristSpots[i];
// //   bandList.appendChild(listItem);
// // }
// let touristSpots = ['Virupaksha Temple', 'Victoria Memorial', 'The Tajmahal']; 
// let obj={};
// function check(str){
// 	if(str[0]=='T' && str[1]=='h' && str[2]=='e' && str[3]==' '){
// 		var res=str.slice(4);
// 		obj[res]=str;
// 		return res;
// 	} 
// 	if(str[0]=='A'){ 
// 		if(str[1]==' '){
// 			var res=str.slice(2);
// 			obj[res]=str;
// 			return res; 
// 		}
// 		if(str[1]=='n' && str[2]==' '){
// 			var res=str.slice(3);
// 			obj[res]=str;
// 			return res;
// 		}
// 	}
// 	obj[str]=str;
// 	return str; 
// }
// for(let i=0;i<touristSpots.length;i++){ 
// 	touristSpots[i]=check(touristSpots[i]); 
// 	// console.log(touristSpots[i]); 
// }
// touristSpots.sort();
// for(let i=0;i<touristSpots.length;i++){ 
// 	touristSpots[i]=obj[touristSpots[i]];
// }
// console.log(touristSpots);