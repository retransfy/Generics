
// Retrieve the message from the URL and display it
let params = new URLSearchParams(window.location.search);
let encodedMessage = params.get("text");
let transactionDetails = decodeURIComponent(encodedMessage);
document.getElementById("messageOutput").innerHTML = transactionDetails;
let copyButton = document.getElementById("copyButton");

copyButton.addEventListener("click", function () {
      const textToCopy = transactionDetails.replace(/<[^>]*>/g, '');
      copyToClipboard(textToCopy);
      copyButton.innerHTML = "Transaction Details Copied";
      copyButton.style.backgroundColor = "gray";
      copyButton.disabled = true;
      alert(`You've been restricted to use the payment function. Send the transaction details to Our official whatsApp page to complete your transaction. Click "OK" to copy the transaction details`)
    });
  

// Function to copy text to clipboard using the Clipboard API
function copyToClipboard(text) {
  const textArea = document.createElement("textarea");
  textArea.value = text;
  document.body.appendChild(textArea);
  
  textArea.select();
  textArea.setSelectionRange(0, textArea.value.length);

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "Copied to clipboard" : "Failed to copy";
    console.log(msg);
  } catch (err) {
    console.error("Error copying text to clipboard:", err);
  } finally {
    document.body.removeChild(textArea);
  }
}
