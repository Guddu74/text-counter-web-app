const input=document.querySelector("#input");

const charcount=document.getElementById("charcount");
    

    var wordcount=document.getElementById("wordcount");

  // Update character count on input
  input.addEventListener('input', () => {
    charCount.textContent = input.value.length;
    wordcount.textContent = input.value.trim() ? input.value.trim().split(/\s+/).length : 0;
  });