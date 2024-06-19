export function filtering(test){
const arrStart = [];
const arrMide = [];
const arrEnd = [];
const arrOne = [];
const reassemblyInfo = []; // Array to store information for reassembling the string

function abs(str, len) {
    for (let i = 0; i < len; i++) {
        // Check for three consecutive backticks
        if (str[i] === "`" && str[i + 1] === "`" && str[i + 2] === "`") {
            arrStart.push(i);
            arrMide.push(i + 1);
            arrEnd.push(i + 2);
            i += 2; // Skip the next two indices
        } 
        // Check for two consecutive backticks
        else if (str[i] === "`" && str[i + 1] === "`") {
            arrStart.push(i);
            arrMide.push(i + 1);
            i += 1; // Skip the next index
        } 
        // Check for a single backtick
        else if (str[i] === "`") {
            arrOne.push(i);
        }
    }
}

function divideString(str) {
    let currentIndex = 0;
    for (let i = 0; i < arrStart.length; i++) {
        
        if (arrStart[i] + 2 === arrEnd[i]) {
           
            reassemblyInfo.push({
                type: "text",
                value: str.slice(currentIndex, arrStart[i])
            });
            
            currentIndex = arrEnd[i] + 1;
            reassemblyInfo.push({
                type: "backticks",
                value: " "
            });
            
            if (i + 1 < arrStart.length && arrStart[i + 1] + 2 === arrEnd[i + 1]) {
                // Add the part between the current end and the next start
                let cutMethod=str.slice(currentIndex, arrStart[i + 1]);

function firstWordFinder(ab){
let enter ="\n";
let strEnter ="↵";
let word="";
for(let i=0;i<ab.length;i++){
	if(ab[i]==" "|| ab[i]==enter || ab[i]==strEnter){
		i=ab.length;
		}else if(ab[i]!=" "|| ab[i]!=enter){
			word+=ab[i];
			}
	}
	return word;
	}
	
                reassemblyInfo.push({
                    type: "text",
                    value: `<pre class="language-${firstWordFinder(cutMethod)}" ><code class="language-${firstWordFinder(cutMethod)}" >${cutMethod}</code></pre>`
                });
                // Update the current index to the end of the next three backticks
                currentIndex = arrEnd[i + 1] + 1;
                reassemblyInfo.push({
                    type: "backticks",
                    value: " "
                });
                i++; // Skip the next group of three backticks as it has been processed
            }
        }
    }
    
    reassemblyInfo.push({
        type: "text",
        value: str.slice(currentIndex)
    });
}

function reassembleString() {
    return reassemblyInfo.map(segment => segment.value).join('');
}
 
let len = test.length;

abs(test, len);
divideString(test);

function speak(){
    let synth = window.speechSynthesis;
    let voice = new SpeechSynthesisUtterance(`${reassembledString}`);
    let sounds = synth.getVoices();
    voice.voice =  sounds[9];
    voice.pitch = 1.2;
    voice.rate = 1.1; 
    synth.speak(voice);
   }
   
const reassembledString = reassembleString();
let highlighted = reassembledString.replace(/`([^`]+)`/g, '<span class="highlight">$1</span>').replace(/\*\*([^*]+)\*\*/g, '<span class="heading">$1</span>'); // if want a sinde back tick (/`([^`]+)`/g
let highlightedText = `<button class ="speak" onclick="${speak()}"><svg fill="#ffffff" height="15px" width="15px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 512 512"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="m444.8,76.8c-6.8-9-19.7-10.9-28.8-4.2-9.1,6.7-11,19.4-4.2,28.4 64.8,85.9 64.8,225.6 0,311.5-6.8,9-5.1,21.9 4.2,28.4 11.4,7.9 24.8,1.2 28.8-4.2 74.9-99.1 74.9-260.6 0-359.9v-1.42109e-14z"></path> <path d="m394.7,143.2c-6.8-9-19.7-10.8-28.8-4.2-9.1,6.7-11,19.4-4.2,28.4 36.6,48.4 36.6,130.3 0,178.7-6.8,9-5,21.8 4.2,28.4 11.7,8.3 24.8,1.2 28.8-4.2 48.1-63.6 48.1-163.4 0-227.1z"></path> <path d="m291.9,438.3l-144.2-112.4v-138.2l144.2-112.3v362.9 5.68434e-14zm-185.4-122.8h-54.3v-117.7h54.3v117.7zm194.7-300.2l-180.1,141.9h-89.5c-11.4,0-20.6,9.1-20.6,20.3v158.2c0,11.2 9.2,20.3 20.6,20.3h91.2l178.4,140.7c12.8,10.1 31.9,1.1 31.9-15.1v-451.2c0-16.2-19-25.3-31.9-15.1z"></path> </g> </g> </g> </g></svg></button>  ` + highlighted;
return highlightedText;
}