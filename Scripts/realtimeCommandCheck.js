export function commandFinder(text){
	let question;
	let searchQ;
if(text.includes("search/")){
	if(text.includes("search/google:")){
			question= text.slice(14); 
			searchQ=question.replace(" ","+");
			window.location.href = `https://www.google.com/search?q=${searchQ}`;
			return true;
		}else if(text.includes("search/youtube:")){
			question= text.slice(15); 
			searchQ=question.replace(" ","+");
			window.location.href = `https://m.youtube.com/results?sp=mAEA&search_query=${searchQ}`;
			return true;
			}else if(text.includes("search/wikipedia:")){
	question= text.slice(17); 
searchQ=question.replace(" ","+");
window.location.href = `https://en.m.wikipedia.org/wiki/Special:Search?go=Go&search=${searchQ}&ns0=1`;
return true;
}else{
	return false;
	}
	
	}else if(text.includes("call/")){
		let number= text.slice(5);
	window.location.href = `tel:${number}`;
	return true;
		}else{
	return false;
	}
      }
