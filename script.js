const textArea = document.getElementById('messageBox');
const charCountDisplay = document.getElementById('charCount');
const warningMsg = document.getElementById('warningMsg');
const maxChars = 200;

//  track input 
textArea.addEventListener('input', () => {
    const currentLength = textArea.value.length;
    const remaining = maxChars - currentLength;

    // 1. Update the display 
    charCountDisplay.textContent = `${currentLength} / ${maxChars} characters`;

    // 2. Logic for warnings
    if (currentLength >= maxChars) {
        warningMsg.style.display = 'block';
        charCountDisplay.style.color = '#ff8fa3'; // Change counter color to red-ish
    } else {
        warningMsg.style.display = 'none';
        charCountDisplay.style.color = 'white';
    }
    
    
});

// Demo: Prevent button click if empty
document.getElementById('sendBtn').addEventListener('click', () => {
    if(textArea.value.trim() === "") {
        alert("Please enter a message first!");
    } else {
        alert("Message Sent: " + textArea.value);
    }
});