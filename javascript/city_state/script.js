/*
'chennai':population=4646732
            literacyRate=90.20
            language='Tamil'
'Bengaluru':population=4646732
              literacyRate=90.20
              language='Kannada'
'Mumbai':population=12478000
          literacyRate=87.72
          language='Marathi'
'Delhi':population=16787941
        literacyRate=86.34
        language='Hindi'
The Indian city of Bangalore has a population of 4646732. Language spoken is Kannada and literacy rate is 90.20%
*/

const button=document.querySelector('button');//querySelector is used to select the button element from the HTML document and store it in a variable called button
//event listener for button click
    let resultdiv=document.createElement('div')//create a div element to display the result
    resultdiv.id='result'//set the id of the div element to 'result' in style.css
    resultdiv.style.color='Black'//set the color of the text in the div element to white
    resultdiv.style.marginTop='20px'//set the top margin of the div element to 20px
    resultdiv.style.fontSize='32px'//set the font size of the text in the div element to 32px
    document.getElementById("Wrapper").appendChild(resultdiv)//append the div element to the wrapper div in the HTML document

button.addEventListener('click',displaystats);//click is used to trigger the event listener and displaystats is the function that will be called when the button is clicked here
//here eventlistener='click' and the function="displaystats" is called when the button is clicked 
//evenListener is used to listen for the event and when the event occurs it will call the function displaystats
function displaystats(){//function to display the stats of the city
    console.log("button clicked");//log to the console when the button is clicked
    const input=document.getElementById("input")
    const city=input.options[input.selectedIndex].value//it is used to get the value of the selected option from the dropdown list and store it in a variable called city
    let population=0,literacyRate=0,language='';//it is used to declare the variables population,literacyRate and language and initialize them to 0 and empty string respectively
    switch(city){//switch statement is used to check the value of the city variable and execute the corresponding case block
        case 'chennai':
            population=4646732;
            literacyRate=90.20;
            language='Tamil';
            break;
        case 'bengaluru':
            population=4646732;
            literacyRate=90.20;
            language='Kannada';
            break;
        case 'mumbai':
            population=12478000;
            literacyRate=87.72;
            language='Marathi';
            break;
        case 'delhi':
            population=16787941;
            literacyRate=86.34;
            language='Hindi';
            break;
        default:
            population=0;
            literacyRate=0;
            language='Unknown';
            break;
    }
    let text=`The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%`
    document.getElementById('result').innerHTML=text
    
}

