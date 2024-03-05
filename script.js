function toggleNav() {
  let x = document.getElementById("res")
  if(x.className==="none-responsive"){
    x.className="responsive"
  }
  else{
    x.className="none-responsive"
  }
  
}


const words = [
"An Algorithm Developer",
"A tech enthusiast",
];
const intervalTime = 1000; // 3 seconds

let wordIndex = 0;
let letterIndex = 0;

const textElement = document.getElementById("typewriter-text");

function type() {
if (letterIndex < words[wordIndex].length) {
textElement.textContent += words[wordIndex].charAt(letterIndex);
letterIndex++;
setTimeout(type, 100); // typing speed
} else {
setTimeout(erase, intervalTime);
}
}

function erase() {
if (letterIndex > 0) {
textElement.textContent = words[wordIndex].substring(0, letterIndex - 1);
letterIndex--;
setTimeout(erase, 100); // erasing speed
} else {
wordIndex = (wordIndex + 1) % words.length;
setTimeout(type, 1000); // delay before typing next word
}
}

type(); // Start the typewriter effect


document.getElementById("downloadResume").addEventListener("click", function() {
// Google Drive link to open in new tab
var googleDriveLink = "https://drive.google.com/file/d/1arVk-DOYgteA_C5mPy2Tf1tjllr0sGUN/view";

// PDF file link to download
var pdfFileLink = "./assets/Resume.pdf";

// Open Google Drive link in a new tab
window.open(googleDriveLink, '_blank');

// Create a hidden anchor element to trigger the download
var hiddenAnchor = document.createElement('a');
hiddenAnchor.href = pdfFileLink;
hiddenAnchor.target = '_blank';
hiddenAnchor.download = 'resume.pdf';
document.body.appendChild(hiddenAnchor);
hiddenAnchor.click();
document.body.removeChild(hiddenAnchor);
});
