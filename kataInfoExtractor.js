const sampleParentDiv = document.querySelector('#ripthis');

// Function to extract kyu, kata name, and link from the given HTML div
function extractKyuKataLink(divHTML) {
  const div = document.createElement('div');
  div.innerHTML = divHTML;

  // Extract kyu and kata name
  const kyu = div.querySelector('.small-hex span').innerText.trim().charAt(0);
  const kataName = div.querySelector('.item-title a').innerText.trim();

  // Extract link to the kata and add CodeWars base URL
  const kataLink = 'https://www.codewars.com/' + div.querySelector('.item-title a').getAttribute('href');

  return { kyu, kataName, kataLink };
}

// Function to format the extracted data
function formatOutput(kyu, kataName, kataLink) {
  const solutionName = kataName.replace(/ /g, '_').toLowerCase();
  const formattedOutput = `| ${kyu} | [${kataName}](${kataLink}) | [${solutionName}.py](https://github.com/Jack-2077/Codewars-Python/tree/main/${kyu}-kyu/${solutionName}.py) |`;
  return formattedOutput;
}

// Get all the children divs inside the parent div
const sampleDivs = sampleParentDiv.querySelectorAll('.list-item-kata');

// Define the number of results you want to display (replace 'x' with your desired number)
const numResults = x;

// Loop through the first 'numResults' divs, extract data, and log the formatted output in the console
for (let i = 0; i < numResults && i < sampleDivs.length; i++) {
  const extractedData = extractKyuKataLink(sampleDivs[i].innerHTML);
  const formattedOutput = formatOutput(extractedData.kyu, extractedData.kataName, extractedData.kataLink);
  console.log(formattedOutput);
}
