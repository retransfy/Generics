let rate = 18.5;
let senderCountry = document.getElementById("senderCountry").value;
let receiverCountry = document.getElementById("receiverCountry").value;
let sendAmountInput = document.getElementById("sendAmount");
let sendAmount = parseFloat(sendAmountInput.value);
let receiveAmountInput = document.getElementById("receiveAmount");
let receiveAmount = parseFloat(receiveAmountInput.value);
let handleFee = document.getElementById("handleFee").value;
let senderNetwork = document.getElementById("senderNetwork").value;
let senderMmNumber = document.getElementById("senderMmNumber").value;
let receiverNetwork = document.getElementById("receiverNetwork").value;
let receiverMmNumber = document.getElementById("receiverMmNumber").value;
let messageError = document.getElementById("errorMessage");
let messageError2 = document.getElementById("errorMessage2");
let resultMessage = document.getElementById("resultMessage");
let senderFieldError = document.getElementById("senderField");
let receiverFieldError = document.getElementById("receiverField");


//Clear Error messages
senderFieldError.textContent = "";
senderFieldError.className = "";
senderFieldError.style.display = "none";

receiverFieldError.textContent = "";
receiverFieldError.className = "";
receiverFieldError.style.display = "none";

// Toggle between Send amount and receive Amount
const toggleButton = document.getElementById("toggleButton");
const senderDiv = document.getElementById("senderDiv");
const receiverDiv = document.getElementById("receiverDiv");
const handler = document.getElementById("handleFee");

toggleButton.addEventListener("click", function () {
  if (senderDiv.classList.contains("receiverHidden")) {
    senderDiv.classList.remove("receiverHidden");
    receiverDiv.classList.add("receiverHidden");
    toggleButton.innerHTML = "Switch to Amount to receive";
    handler.disabled = false;
    receiveAmountInput.value = "";
    messageError.textContent = "";
    messageError.className = "";
    messageError2.textContent = "";
    messageError2.className = "";
    resultMessage.textContent = "";
    resultMessage.style.display = "none";
    proceedButton.style.display = "none";

  } else {
    senderDiv.classList.add("receiverHidden");
    receiverDiv.classList.remove("receiverHidden");
    toggleButton.innerHTML = "Switch to Amount to send";
    handler.disabled = true;
    sendAmountInput.value = "";
    messageError.textContent = "";
    messageError.className = "";
    messageError2.textContent = "";
    messageError2.className = "";
    resultMessage.textContent = "";
    resultMessage.style.display = "none";
    proceedButton.style.display = "none";
  }
});



// Networks options based on selected sender Country
function onSenderCountryChange() {
  senderCountry = document.getElementById("senderCountry").value;
  sendAmountInput = document.getElementById("sendAmount");
  receiveAmountInput = document.getElementById("receiveAmount");
  senderFieldError = document.getElementById("senderField");
  
  
  if (senderCountry === "GHANA") {
    sendAmountInput.placeholder = "Enter Amount in GHS";
    receiveAmountInput.placeholder = "Enter Amount in FCFA";
  }
  else {
    sendAmountInput.placeholder = "Enter Amount in FCFA";
    receiveAmountInput.placeholder = "Enter Amount in GHS";
  }
  sendAmountInput.style.textAlign = "center";
  receiveAmountInput.style.textAlign = "center";

  if (senderCountry) {
    senderFieldError.textContent = "";
    senderFieldError.className = "";
    senderFieldError.style.display = "none";
  }
  
  const senderCountrySelect = document.querySelector('#senderCountry');
  const senderNetworkSelect = document.querySelector('#senderNetwork');
  const selectedCountry = senderCountrySelect.value;

  // Clear existing options
  senderNetworkSelect.innerHTML = '';

  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = 'N/A';
  defaultOption.textContent = 'Select';
  senderNetworkSelect.appendChild(defaultOption);

  if (selectedCountry === "TOGO") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov (Togo)';

    const togocelOption = document.createElement('option');
    togocelOption.value = 'TOGOCEL';
    togocelOption.textContent = 'Togocel';

    senderNetworkSelect.appendChild(moovOption);
    senderNetworkSelect.appendChild(togocelOption);
  }

  else if (selectedCountry === "BENIN") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov (Benin)';

    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN (Benin)';

    senderNetworkSelect.appendChild(moovOption);
    senderNetworkSelect.appendChild(mtnOption);
  }

  else if (selectedCountry === "BURKINA FASO") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov (Burkina Faso)';

    const orangeOption = document.createElement('option');
    orangeOption.value = 'ORANGE';
    orangeOption.textContent = 'Orange (Burkina Faso)';

    senderNetworkSelect.appendChild(moovOption);
    senderNetworkSelect.appendChild(orangeOption);
  }

  else if (selectedCountry === "IVORY COAST") {
    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN (Ivory Coast)';

    const orangeOption = document.createElement('option');
    orangeOption.value = 'ORANGE';
    orangeOption.textContent = 'Orange (Ivory Coast)';

    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov (Ivory Coast)';

    senderNetworkSelect.appendChild(mtnOption);
    senderNetworkSelect.appendChild(orangeOption);
    senderNetworkSelect.appendChild(moovOption);
  }

  else {
    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN (Ghana)';

    const vodafoneOption = document.createElement('option');
    vodafoneOption.value = 'VODAFONE';
    vodafoneOption.textContent = 'Vodafone (Ghana)';

    const airtelTigoOption = document.createElement('option');
    airtelTigoOption.value = 'AIRTELTIGO';
    airtelTigoOption.textContent = 'AirtelTigo (Ghana)';

    senderNetworkSelect.appendChild(mtnOption);
    senderNetworkSelect.appendChild(vodafoneOption);
    senderNetworkSelect.appendChild(airtelTigoOption);
  }
}


// Networks options based on selected receiverCountry
function onReceiverCountryChange() {
  receiverCountry = document.getElementById("receiverCountry").value;
  receiverFieldError = document.getElementById("receiverField");
  

  if (receiverCountry) {
    receiverFieldError.textContent = "";
    receiverFieldError.className = "";
    receiverFieldError.style.display = "none";
  }


  const receiverCountrySelect = document.querySelector('#receiverCountry');
  const receiverNetworkSelect = document.querySelector('#receiverNetwork');
  const selectedReceiverCountry = receiverCountrySelect.value;

  receiverNetworkSelect.innerHTML = '';

  // Add default option
  const defaultOption = document.createElement('option');
  defaultOption.value = 'N/A';
  defaultOption.textContent = 'Select';
  receiverNetworkSelect.appendChild(defaultOption);

  if (selectedReceiverCountry === "TOGO") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov (Togo)';

    const togocelOption = document.createElement('option');
    togocelOption.value = 'TOGOCEL';
    togocelOption.textContent = 'Togocel';

    receiverNetworkSelect.appendChild(moovOption);
    receiverNetworkSelect.appendChild(togocelOption);
  }
  else if (selectedReceiverCountry === "BENIN") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov (Benin)';

    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN (Benin)';

    receiverNetworkSelect.appendChild(moovOption);
    receiverNetworkSelect.appendChild(mtnOption);
  }
  else if (selectedReceiverCountry === "BURKINA FASO") {
    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov (Burkina Faso)';

    const orangeOption = document.createElement('option');
    orangeOption.value = 'ORANGE';
    orangeOption.textContent = 'Orange (Burkina Faso)';

    receiverNetworkSelect.appendChild(moovOption);
    receiverNetworkSelect.appendChild(orangeOption);
  }
  else if (selectedReceiverCountry === "IVORY COAST") {
    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN (Ivory Coast)';

    const orangeOption = document.createElement('option');
    orangeOption.value = 'ORANGE';
    orangeOption.textContent = 'Orange (Ivory Coast)';

    const moovOption = document.createElement('option');
    moovOption.value = 'MOOV';
    moovOption.textContent = 'Moov (Ivory Coast)';

    receiverNetworkSelect.appendChild(mtnOption);
    receiverNetworkSelect.appendChild(orangeOption);
    receiverNetworkSelect.appendChild(moovOption);
  }
  else {
    const mtnOption = document.createElement('option');
    mtnOption.value = 'MTN';
    mtnOption.textContent = 'MTN (Ghana)';

    const vodafoneOption = document.createElement('option');
    vodafoneOption.value = 'VODAFONE';
    vodafoneOption.textContent = 'Vodafone (Ghana)';

    const airtelTigoOption = document.createElement('option');
    airtelTigoOption.value = 'AIRTELTIGO';
    airtelTigoOption.textContent = 'AirtelTigo (Ghana)';

    receiverNetworkSelect.appendChild(mtnOption);
    receiverNetworkSelect.appendChild(vodafoneOption);
    receiverNetworkSelect.appendChild(airtelTigoOption);
  }
}




function roundDown(number) {
  return Math.floor(number / 5) * 5;
}

function roundUp(number) {
  return Math.ceil(number / 5) * 5;
}





function calculateTransactionFee() {
  let transactionFee = 0;
//(GHANA to TOGO)
  if (senderCountry === "GHANA" && receiverCountry === "TOGO") {
    if (sendAmount >= 50 && sendAmount <= 150) { transactionFee = 5; }
    else if (sendAmount >= 151 && sendAmount <= 500) { transactionFee = 10; }
    else if (sendAmount >= 501 && sendAmount <= 800) { transactionFee = 15; }
    else if (sendAmount >= 801 && sendAmount <= 1200) { transactionFee = 20; }
    else if (sendAmount >= 1201 && sendAmount <= 2000) { transactionFee = 25; }
    else if (sendAmount >= 2001 && sendAmount <= 5000) { transactionFee = 40; }
    else if (sendAmount >= 5001 && sendAmount <= 8000) { transactionFee = 70; }
    else if (sendAmount >= 8001 && sendAmount <= 10000) { transactionFee = 95; }
    else if (sendAmount >= 10001 && sendAmount <= 30000) { transactionFee = ((sendAmount * 1) / 100); }
    else if (sendAmount >= 30001 && sendAmount <= 100000) { transactionFee = ((sendAmount * 9) / 1000); }
  }

//(GHANA to BCB)
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO") {
    if (sendAmount >= 100 && sendAmount <= 150) { transactionFee = 10; }
    else if (sendAmount >= 151 && sendAmount <= 500) { transactionFee = 15; }
    else if (sendAmount >= 501 && sendAmount <= 800) { transactionFee = 20; }
    else if (sendAmount >= 801 && sendAmount <= 1200) { transactionFee = 25; }
    else if (sendAmount >= 1201 && sendAmount <= 2000) { transactionFee = 40; }
    else if (sendAmount >= 2001 && sendAmount <= 5000) { transactionFee = 50; }
    else if (sendAmount >= 5001 && sendAmount <= 8000) { transactionFee = 80; }
    else if (sendAmount >= 8001 && sendAmount <= 10000) { transactionFee = 120; }
    else if (sendAmount >= 10001 && sendAmount <= 30000) { transactionFee = ((sendAmount * 11) / 1000); }
    else if (sendAmount >= 30001 && sendAmount <= 100000) { transactionFee = ((sendAmount * 1) / 100); }
  }

//(ALL COUNTRIES to GHANA)
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA") {
    if (sendAmount < 1000) { transactionFee = 0; }
    else if (sendAmount >= 1000 && sendAmount <= 5000) { transactionFee = 500; }
    else if (sendAmount >= 6000 && sendAmount <= 20000) { transactionFee = 1000; }
    else if (sendAmount >= 21000 && sendAmount <= 40000) { transactionFee = 2000; }
    else if (sendAmount >= 41000 && sendAmount <= 60000) { transactionFee = 3000; }
    else if (sendAmount >= 61000 && sendAmount <= 100000) { transactionFee = 4000; }
    else if (sendAmount >= 101000 && sendAmount <= 200000) { transactionFee = 5000; }
    else if (sendAmount >= 201000 && sendAmount <= 600000) { transactionFee = 8000; }
    else if (sendAmount >= 601000 && sendAmount <= 1000000) { transactionFee = 10000; }
    else if (sendAmount >= 1001000 && sendAmount <= 5000000) { transactionFee = ((sendAmount * 15) / 1000); }
  }
  return transactionFee;
}




function calculateTransactionFee2() {
  let transactionFee2 = 0;
  let sendingAmount = (receiveAmount / 1000) * rate;
//(GHANA to TOGO)
  if (senderCountry === "GHANA" && receiverCountry === "TOGO") {
    sendingAmount = (receiveAmount / 1000) * rate;
    if (receiveAmount >= ((50 * 1000) / 19) && receiveAmount <= ((150 * 1000) / rate)) { transactionFee2 = 5; }
    else if (receiveAmount >= ((151 * 1000) / rate) && receiveAmount <= ((500 * 1000) / rate)) { transactionFee2 = 10; }
    else if (receiveAmount >= ((501 * 1000) / rate) && receiveAmount <= ((800 * 1000) / rate)) { transactionFee2 = 15; }
    else if (receiveAmount >= ((801 * 1000) / rate) && receiveAmount <= ((1200 * 1000) / rate)) { transactionFee2 = 20; }
    else if (receiveAmount >= ((1201 * 1000) / rate) && receiveAmount <= ((2000 * 1000) / rate)) { transactionFee2 = 25; }
    else if (receiveAmount >= ((2001 * 1000) / rate) && receiveAmount <= ((5000 * 1000) / rate)) { transactionFee2 = 40; }
    else if (receiveAmount >= ((5001 * 1000) / rate) && receiveAmount <= ((8000 * 1000) / rate)) { transactionFee2 = 70; }
    else if (receiveAmount >= ((8001 * 1000) / rate) && receiveAmount <= ((10000 * 1000) / rate)) { transactionFee2 = 95; }
    else if (receiveAmount >= ((10001 * 1000) / rate) && receiveAmount <= ((30000 * 1000) / rate)) { transactionFee2 = ((sendingAmount * 1) / 100); }
    else if (receiveAmount >= ((30001 * 1000) / rate) && receiveAmount <= ((100000 * 1000) / rate)) { transactionFee2 = ((sendingAmount * 9) / 1000); }
  }

//(GHANA to BCB)
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO") {
    sendingAmount = (receiveAmount / 1000) * rate;
    if (receiveAmount >= ((100 * 1000) / 19) && receiveAmount <= ((150 * 1000) / 19)) { transactionFee2 = 10; }
    else if (receiveAmount >= ((151 * 1000) / rate) && receiveAmount <= ((500 * 1000) / rate)) { transactionFee2 = 15; }
    else if (receiveAmount >= ((501 * 1000) / rate) && receiveAmount <= ((800 * 1000) / rate)) { transactionFee2 = 20; }
    else if (receiveAmount >= ((801 * 1000) / rate) && receiveAmount <= ((1200 * 1000) / rate)) { transactionFee2 = 25; }
    else if (receiveAmount >= ((1201 * 1000) / rate) && receiveAmount <= ((2000 * 1000) / rate)) { transactionFee2 = 40; }
    else if (receiveAmount >= ((2001 * 1000) / rate) && receiveAmount <= ((5000 * 1000) / rate)) { transactionFee2 = 50; }
    else if (receiveAmount >= ((5001 * 1000) / rate) && receiveAmount <= ((8000 * 1000) / rate)) { transactionFee2 = 80; }
    else if (receiveAmount >= ((8001 * 1000) / rate) && receiveAmount <= ((10000 * 1000) / rate)) { transactionFee2 = 120; }
    else if (receiveAmount >= ((10001 * 1000) / rate) && receiveAmount <= ((30000 * 1000) / rate)) { transactionFee2 = ((sendingAmount * 11) / 1000); }
    else if (receiveAmount >= ((30001 * 1000) / rate) && receiveAmount <= ((100000 * 1000) / rate)) { transactionFee2 = ((sendingAmount * 1) / 100); }
  }
//(ALL COUNTRIES to GHANA)
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount) {
    sendingAmount = (receiveAmount * 1000) / (rate - 1);
    if (receiveAmount < (((rate - 1) * 1000) / 1000)) { transactionFee2 = 0; }
    else if ((receiveAmount >= (((rate - 1) * 1000) / 1000) && receiveAmount <= (((rate - 1) * 5000) / 1000))) { transactionFee2 = 500; }
    else if ((receiveAmount >= (((rate - 1) * 6000) / 1000) && receiveAmount <= (((rate - 1) * 20000) / 1000))) { transactionFee2 = 1000; }
    else if ((receiveAmount >= (((rate - 1) * 21000) / 1000) && receiveAmount <= (((rate - 1) * 40000) / 1000))) { transactionFee2 = 2000; }
    else if ((receiveAmount >= (((rate - 1) * 41000) / 1000) && receiveAmount <= (((rate - 1) * 60000) / 1000))) { transactionFee2 = 3000; }
    else if ((receiveAmount >= (((rate - 1) * 61000) / 1000) && receiveAmount <= (((rate - 1) * 100000) / 1000))) { transactionFee2 = 4000; }
    else if ((receiveAmount >= (((rate - 1) * 101000) / 1000) && receiveAmount <= (((rate - 1) * 200000) / 1000))) { transactionFee2 = 5000; }
    else if ((receiveAmount >= (((rate - 1) * 201000) / 1000) && receiveAmount <= (((rate - 1) * 600000) / 1000))) { transactionFee2 = 8000; }
    else if ((receiveAmount >= (((rate - 1) * 601000) / 1000) && receiveAmount <= (((rate - 1) * 1000000) / 1000))) { transactionFee2 = 10000; }
    else if ((receiveAmount >= (((rate - 1) * 1001000) / 1000) && receiveAmount <= (((rate - 1) * 5000000) / 1000))) { transactionFee2 = ((sendingAmount * 15) / 1000); }
  }
  return transactionFee2;
}




function calculateAmountToSend() {
  transactionFee2 = calculateTransactionFee2();
  let amountToSend = 0;
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiveAmount) {
    amountToSend = (receiveAmount / 1000) * rate;
    return amountToSend;
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount) {
    amountToSend = (receiveAmount * 1000) / (rate - 1);
    return amountToSend;
  }

}


function calculateAmountToReceive() {
  transactionFee = calculateTransactionFee();
  let amountToReceive = (((sendAmount - transactionFee) / rate) * 1000);
  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && handleFee === "ADD FEE") {
    amountToReceive = ((sendAmount / rate) * 1000);
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && handleFee === "ADD FEE") {
    amountToReceive = ((sendAmount / 1000) * (rate - 1));
  } else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && handleFee === "SUBSTRACT FEE") {
    amountToReceive = (((sendAmount - transactionFee) / rate) * 1000);
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && handleFee === "SUBSTRACT FEE") {
    amountToReceive = (((sendAmount - transactionFee) / 1000) * (rate - 1));
  }
  return amountToReceive;
}


//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------
function rtConvertAndDisplayRt(event) {
  event.preventDefault();
  senderCountry = document.getElementById("senderCountry").value;
  receiverCountry = document.getElementById("receiverCountry").value;
  sendAmountInput = document.getElementById("sendAmount");
  sendAmount = parseFloat(sendAmountInput.value);
  receiveAmountInput = document.getElementById("receiveAmount");
  receiveAmount = parseFloat(receiveAmountInput.value);
  handleFee = document.getElementById("handleFee").value;
  transactionFee = calculateTransactionFee();
  transactionFee2 = calculateTransactionFee2();
  amountToReceive = calculateAmountToReceive();
  amountToSend = calculateAmountToSend();
  messageError = document.getElementById("errorMessage");
  resultMessage = document.getElementById("resultMessage");
  senderFieldError = document.getElementById("senderField");
  receiverFieldError = document.getElementById("receiverField");

  
messageError.textContent = "";
messageError.className = "";
messageError.style.display = "none";

if (senderCountry === "") {
  senderFieldError.textContent = "Please select a Country";
  senderFieldError.className = "red_error2";
  senderFieldError.style.display = "block";
  return;
} 
if (receiverCountry === "") {
  receiverFieldError.textContent = "Please select a Country";
  receiverFieldError.className = "red_error2";
  receiverFieldError.style.display = "block";
  return;
}

if (sendAmountInput.value === "" && receiveAmountInput.value === "" && handleFee.disabled === false) {
  messageError.textContent = "Please complete all required fields";
  messageError.className = "red_error";
  messageError.style.display = "block";
} 
else if (sendAmountInput.value !== "" && receiveAmountInput.value === "" && handleFee.disabled === false) {
  messageError.textContent = "";
  messageError.className = "";
  messageError.style.display = "none";
}

if (receiveAmountInput.value === "" && sendAmountInput.value === "" && handleFee.disabled === true) {
  messageError.textContent = "Please complete all required fields";
  messageError.className = "red_error";
  messageError.style.display = "block";
} 
else if (receiveAmountInput.value !== "" && sendAmountInput.value === "" && handleFee.disabled === true){
  messageError.textContent = "";
  messageError.className = "";
  messageError.style.display = "none";
}

if (handleFee === "") {
  messageError.textContent = "Please complete all required fields";
  messageError.className = "red_error";
  messageError.style.display = "block";
} else {
  messageError.textContent = "";
  messageError.className = "";
  messageError.style.display = "none";
}


   // Countries validations & errors
  if (senderCountry === receiverCountry) {
    messageError.textContent = "Sorry, you cannot send money between the same country";
    messageError.className = "red_error";
    messageError.style.display = "block";
  } else if (senderCountry !== "GHANA" && receiverCountry !== "GHANA") {
    messageError.textContent = "Money can only be sent between Ghana and other countries";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }


  if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount < 50) {
    messageError.textContent = "The minimum to send from GHANA to TOGO is 50 GHS.";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && sendAmount < 100) {
    messageError.textContent = "The minimum to send from GHANA to " + receiverCountry + " is 100 GHS.";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }
  else if (senderCountry !== "GHANA" && sendAmount < 1000) {
    messageError.textContent = "The minimum to send from " + senderCountry + " to GHANA is 1000 FCFA";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }


  if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && sendAmount > 100000) {
    messageError.textContent = "The maximum to send from GHANA to " + receiverCountry + " is 100000 GHS.";
    messageError.className = "red_error";
    messageError.style.display = "block";
  } else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount > 5000000) {
    messageError.textContent = "The maximum to send from " + senderCountry + " to GHANA is 5000000 FCFA";
    messageError.className = "red_error";
    messageError.style.display = "block";
  }


//-------------------------------------------------------------------------------------------------------------------------------
if (senderCountry === "GHANA" && receiverCountry === "TOGO" && !sendAmount && receiveAmount < ((50 * 1000) / 19)) {
    messageError.textContent = `The minimum to be received from GHANA to TOGO is ${Math.round((50 * 1000) / 19).toLocaleString('fr-FR')} FCFA`;
    messageError.className = "red_error";
    messageError.style.display = "block";
  }
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && !sendAmount && receiveAmount < ((100 * 1000) / 19)) {
    messageError.textContent = `The minimum to be received from GHANA to ${receiverCountry} is ${Math.round(((100 * 1000) / 19)).toLocaleString('fr-FR')} FCFA`;
    messageError.className = "red_error";
    messageError.style.display = "block";
  }
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && !sendAmount && receiveAmount < (rate - 1)) {
    messageError.textContent = `The minimum to be received from ${senderCountry} to GHANA is ${(rate - 1).toFixed(2)} GHS`;
    messageError.className = "red_error";
    messageError.style.display = "block";

  }


  if (senderCountry === "GHANA" && receiverCountry === "TOGO" && !sendAmount && receiveAmount > ((100000 * 1000) / 19)) {
    messageError.textContent = `The maximum to be received from GHANA to TOGO is ${Math.round(((100000 * 1000) / 19)).toLocaleString('fr-FR')} FCFA`;
    messageError.className = "red_error";
    messageError.style.display = "block";
  }
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && !sendAmount && receiveAmount > ((100000 * 1000) / 19)) {
    messageError.textContent = `The maximum to be received from GHANA to ${receiverCountry} is ${Math.round(((100000 * 1000) / 19)).toLocaleString('fr-FR')} FCFA`;
    messageError.className = "red_error";
    messageError.style.display = "block";
  }
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && !sendAmount && receiveAmount > (((rate - 1) * 5000000) / 1000)) {
    messageError.textContent = `The maximum to be received from ${senderCountry} to GHANA is ${(((rate - 1) * 5000000) / 1000).toFixed(2)
      } GHS`;
    messageError.className = "red_error";
    messageError.style.display = "block";

  }


//-----------------------------------------------------------------------------------------------------------------------
let totalAmount = sendAmount + transactionFee;
  

  resultMessage.textContent = ""; 
  resultMessage.style.display = "none";
  
  //(GHANA to TOGO) / ADDFee
  if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount >= 50 && sendAmount <= 100000 && handleFee === "ADD FEE") {
    resultMessage.textContent = `Sending: ${sendAmount.toFixed(2)} GHS\n
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA\n
    Transaction fee: ${transactionFee.toFixed(2)} GHS\n
    Paying: ${totalAmount.toFixed(2)} GHS`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    proceedButton.style.display = "block";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
  }
  //(GHANA to BCB) / ADDFee
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && sendAmount >= 100 && sendAmount <= 100000 && handleFee === "ADD FEE") {
    resultMessage.textContent = `Sending: ${sendAmount.toFixed(2)} GHS\n
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA\n
    Transaction fee: ${transactionFee.toFixed(2)} GHS\n
    Paying: ${totalAmount.toFixed(2)} GHS`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    proceedButton.style.display = "block";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
    
  }

  //(ALL COUNTRIES to GHANA) / ADDFee
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount >= 1000 && sendAmount <= 5000000 && handleFee === "ADD FEE") {
    resultMessage.textContent = `Sending: ${sendAmount.toLocaleString('fr-FR')} FCFA\n
    Amount to receive: ${amountToReceive.toFixed(2)} GHS\n
    Transaction fee: ${transactionFee.toLocaleString('fr-FR')} FCFA\n
    Paying: ${Math.round(totalAmount).toLocaleString('fr-FR')} FCFA`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    proceedButton.style.display = "block";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
  }

  //(GHANA to TOGO) / SUBSTRACTFee
  else if (senderCountry === "GHANA" && receiverCountry === "TOGO" && sendAmount >= 50 && sendAmount <= 100000 && handleFee === "SUBSTRACT FEE") {
    resultMessage.textContent = `Sending: ${(sendAmount - transactionFee).toFixed(2)} GHS\n
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA\n
    Transaction fee: ${transactionFee.toFixed(2)} GHS\n
    Paying: ${sendAmount.toFixed(2)} GHS`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    proceedButton.style.display = "block";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
  }

  //(GHANA to BCB) / SUBSTRACTFee
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && sendAmount >= 100 && sendAmount <= 100000 && handleFee === "SUBSTRACT FEE") {
    resultMessage.textContent = `Sending: ${(sendAmount - transactionFee).toFixed(2)} GHS\n
    Amount to receive: ${roundDown(Math.round(amountToReceive)).toFixed(0)} FCFA\n
    Transaction fee: ${transactionFee.toFixed(2)} GHS\n
    Paying: ${sendAmount.toFixed(2)} GHS`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    proceedButton.style.display = "block";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
  }

  //(ALL COUNTRIES to GHANA) / SUBSTRACTFee
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && sendAmount >= 1000 && sendAmount <= 5000000 && handleFee === "SUBSTRACT FEE") {
    resultMessage.textContent = `Sending: ${Math.round(sendAmount - transactionFee).toLocaleString('fr-FR')} FCFA\n
    Amount to receive: ${amountToReceive.toFixed(2)} GHS\n
    Transaction fee: ${(transactionFee).toLocaleString('fr-FR')} FCFA\n
    Paying: ${Math.round(sendAmount).toLocaleString('fr-FR')} FCFA`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    proceedButton.style.display = "block";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
  }


  //-----------------------------------------------------------------------------------------------------------
  //(GHANA to TOGO) when Amount to receive is entered
  if (senderCountry === "GHANA" && receiverCountry === "TOGO" && receiveAmount >= ((50 * 1000) / 19) && receiveAmount <= ((100000 * 1000) / rate)) {
    resultMessage.textContent = `Amount to receive: ${roundDown(receiveAmount).toLocaleString('fr-FR')} FCFA\n
    Amount to send: ${amountToSend.toFixed(2)} GHS\n
    Transaction fee: ${transactionFee2.toFixed(2)} GHS\n
    Paying: ${(amountToSend + transactionFee2).toFixed(2)} GHS`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    proceedButton.style.display = "block";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
  }

  //(GHANA to BCB) when amount to receive is entered
  else if (senderCountry === "GHANA" && receiverCountry !== "GHANA" && receiverCountry !== "TOGO" && receiveAmount >= ((100 * 1000) / 19) && receiveAmount <= ((100000 * 1000) / rate)) {
    resultMessage.textContent = `Amount to receive: ${roundDown(receiveAmount).toLocaleString('fr-FR')} FCFA\n
    Amount to send: ${amountToSend.toFixed(2)} GHS\n
    Transaction fee: ${transactionFee2.toFixed(2)} GHS\n
    Paying: ${(amountToSend + transactionFee2).toFixed(2)} GHS`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    proceedButton.style.display = "block";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
  }

  //(ALL COUNTRIES to GHANA) when amount to receive is entered
  else if (senderCountry !== "GHANA" && receiverCountry === "GHANA" && receiveAmount >= (rate - 1) && receiveAmount <= (((rate - 1) * 5000000) / 1000)) {
    resultMessage.textContent = `Amount to receive: ${receiveAmount.toFixed(2)} GHS\n
    Amount to send: ${roundUp(Math.round(amountToSend)).toLocaleString('fr-FR')} FCFA\n
    Transaction fee: ${Math.round(transactionFee2).toLocaleString('fr-FR')} FCFA\n
    Paying: ${roundUp(Math.round((amountToSend + transactionFee2))).toLocaleString('fr-FR')} FCFA`;

    resultMessage.style.whiteSpace = "pre-line";
    resultMessage.style.display = "block";
    resultMessage.className = "green_result";
    proceedButton.style.display = "block";

    messageError.textContent = "";
    messageError.className = "";
    messageError.style.display = "none";
  }
}





//Store form data
let formData = {};
function showrtformFollow() {
  const mainFormContainer = document.getElementById("rtformMainKtn");
  const followFormContainer = document.getElementById("rtformFollowKtn");

  formData.senderCountry = document.getElementById("senderCountry").value;
  formData.receiverCountry = document.getElementById("receiverCountry").value;
  formData.sendAmount = document.getElementById("sendAmount").value;
  formData.handleFee = document.getElementById("handleFee").value;

  mainFormContainer.classList.add("fade-in", "secondary");
  followFormContainer.classList.remove("secondary");
}

function goBack() {
  const mainFormContainer = document.getElementById("rtformMainKtn");
  const followFormContainer = document.getElementById("rtformFollowKtn");
  mainFormContainer.classList.remove("secondary");
  followFormContainer.classList.add("secondary");
  // Restore entered data
  document.getElementById("senderCountry").value = formData.senderCountry;
  document.getElementById("receiverCountry").value = formData.receiverCountry;
  document.getElementById("sendAmount").value = formData.sendAmount;
  document.getElementById("handleFee").value = formData.handleFee;
}


// Validate the sender number
function senderMomoNumber() {
  senderCountry = document.getElementById("senderCountry").value;
  receiverCountry = document.getElementById("receiverCountry").value;
  senderNetwork = document.getElementById("senderNetwork").value;
  senderMmNumber = document.getElementById("senderMmNumber").value;
  const errorParagraph = document.getElementById("errorParagraph");
  const phoneNumberInput = document.getElementById("senderMmNumber");
  const inputValue = phoneNumberInput.value;
  const numericValue = inputValue.replace(/\D/g, '');

  //GHANA
  if (senderCountry === "GHANA" && senderNetwork === "MTN") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["054", "024", "059", "053", "055"];
      const prefix = numericValue.slice(0, 3);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid MTN number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 10 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }

  }

  else if (senderCountry === "GHANA" && senderNetwork === "VODAFONE") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["050", "020"];
      const prefix = numericValue.slice(0, 3);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid Vodafone number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 10 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }
  }

  else if (senderCountry === "GHANA" && senderNetwork === "AIRTELTIGO") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["057", "027", "026", "056"];
      const prefix = numericValue.slice(0, 3);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid AirtelTigo number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 10 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }
  }

  //TOGO
  else if (senderCountry === "TOGO" && senderNetwork === "MOOV") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["99", "98", "97", "96", "79", "78"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid Moov number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 8 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }

  }


  else if (senderCountry === "TOGO" && senderNetwork === "TOGOCEL") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["93", "92", "91", "90", "72", "71", "70"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid Togocel number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 8 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }

  }

  //IVORY COAST
  else if (senderCountry === "IVORY COAST" && senderNetwork === "MOOV") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["01"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid Moov number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 10 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }

  }

  else if (senderCountry === "IVORY COAST" && senderNetwork === "ORANGE") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["07"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid Orange number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 10 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }

  }

  else if (senderCountry === "IVORY COAST" && senderNetwork === "MTN") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["05"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid MTN number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 10 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }

  }

  //BURKINA FASO
  else if (senderCountry === "BURKINA FASO" && senderNetwork === "MOOV") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["01", "02", "03", "51", "52", "53", "60", "61", "62", "63"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid Moov number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 8 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }
  }


  else if (senderCountry === "BURKINA FASO" && senderNetwork === "ORANGE") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["05", "06", "07", "54", "55", "56", "57", "64", "65", "66", "77"];
      const prefix = numericValue.slice(0, 8);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid Orange number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 8 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }

  }


  //BENIN
  else if (senderCountry === "BENIN" && senderNetwork === "MOOV") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["95", "94", "98", "99", "60", "64", "68", "65"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid Moov number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 8 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }

  }


  else if (senderCountry === "BENIN" && senderNetwork === "MTN") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["96", "97", "91", "61", "62", "66", "67", "69", "52", "54", "55"];
      const prefix = numericValue.slice(0, 8);

      if (validPrefixes.includes(prefix)) {
        errorParagraph.textContent = "";
        return true;
      } else {
        errorParagraph.textContent = "Enter a valid MTN number";
        errorParagraph.className = "red_error2";
        errorParagraph.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph.textContent = "Number must be 8 digits.";
      errorParagraph.className = "red_error2";
      errorParagraph.style.textAlign = "center";
      return false;
    }

  }

}





// Validate the sender number
function receiverMomoNumber() {
  senderCountry = document.getElementById("senderCountry").value;
  receiverCountry = document.getElementById("receiverCountry").value;
  receiverNetwork = document.getElementById("receiverNetwork").value;
  receiverMmNumber = document.getElementById("receiverMmNumber").value;
  const errorParagraph2 = document.getElementById("errorParagraph2");
  const phoneNumberInput = document.getElementById("receiverMmNumber");

  const inputValue = phoneNumberInput.value;
  const numericValue = inputValue.replace(/\D/g, '');

  //GHANA

  if (receiverCountry === "GHANA" && receiverNetwork === "MTN") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["054", "024", "059", "053", "055"];
      const prefix = numericValue.slice(0, 3);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid MTN number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 10 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }

  else if (receiverCountry === "GHANA" && receiverNetwork === "VODAFONE") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["050", "020"];
      const prefix = numericValue.slice(0, 3);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid Vodafone number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 10 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }

  else if (receiverCountry === "GHANA" && receiverNetwork === "AIRTELTIGO") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["057", "027", "026", "056"];
      const prefix = numericValue.slice(0, 3);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid AirtelTigo number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 10 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }
  }


  //TOGO
  else if (receiverCountry === "TOGO" && receiverNetwork === "MOOV") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["99", "98", "97", "96", "79", "78"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid Moov number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 8 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }


  else if (receiverCountry === "TOGO" && receiverNetwork === "TOGOCEL") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["93", "92", "91", "90", "72", "71", "70"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid Togocel number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 8 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }


  //IVORY COAST
  else if (receiverCountry === "IVORY COAST" && receiverNetwork === "MOOV") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["01"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid Moov number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 10 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }


  else if (receiverCountry === "IVORY COAST" && receiverNetwork === "ORANGE") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["07"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid Orange number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 10 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }


  else if (receiverCountry === "IVORY COAST" && receiverNetwork === "MTN") {

    if (numericValue.length > 10) {
      phoneNumberInput.value = numericValue.slice(0, 10);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 10) {
      const validPrefixes = ["05"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid MTN number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 10 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }


  //BURKINA FASO
  else if (receiverCountry === "BURKINA FASO" && receiverNetwork === "MOOV") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["01", "02", "03", "51", "52", "53", "60", "61", "62", "63"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid Moov number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 8 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }


  else if (receiverCountry === "BURKINA FASO" && receiverNetwork === "ORANGE") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["05", "06", "07", "54", "55", "56", "57", "64", "65", "66", "77"];
      const prefix = numericValue.slice(0, 8);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid Orange number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 8 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }


  //BENIN
  else if (receiverCountry === "BENIN" && receiverNetwork === "MOOV") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["95", "94", "98", "99", "60", "64", "68", "65"];
      const prefix = numericValue.slice(0, 2);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid Moov number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 8 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }

  }


  else if (receiverCountry === "BENIN" && receiverNetwork === "MTN") {

    if (numericValue.length > 8) {
      phoneNumberInput.value = numericValue.slice(0, 8);
    } else {
      phoneNumberInput.value = numericValue;
    }

    if (numericValue.length === 8) {
      const validPrefixes = ["96", "97", "91", "61", "62", "66", "67", "69", "52", "54", "55"];
      const prefix = numericValue.slice(0, 8);

      if (validPrefixes.includes(prefix)) {
        errorParagraph2.textContent = "";
        return true;
      } else {
        errorParagraph2.textContent = "Enter a valid MTN number";
        errorParagraph2.className = "red_error2";
        errorParagraph2.style.textAlign = "center";
        return false;
      }
    } else if (numericValue.length > 0) {
      errorParagraph2.textContent = "Number must be 8 digits.";
      errorParagraph2.className = "red_error2";
      errorParagraph2.style.textAlign = "center";
      return false;
    }
  }

}






//Confirmation of Transaction details
function transactionDetailsToShow(event) {
  event.preventDefault();
  senderCountry = document.getElementById("senderCountry").value;
  receiverCountry = document.getElementById("receiverCountry").value;
  sendAmountInput = document.getElementById("sendAmount");
  sendAmount = parseFloat(sendAmountInput.value);
  receiveAmountInput = document.getElementById("receiveAmount");
  receiveAmount = parseFloat(receiveAmountInput.value);
  senderNetwork = document.getElementById("senderNetwork").value;
  senderMmNumber = document.getElementById("senderMmNumber").value;
  receiverNetwork = document.getElementById("receiverNetwork").value;
  receiverMmNumber = document.getElementById("receiverMmNumber").value;
  transactionFee = calculateTransactionFee();
  transactionFee2 = calculateTransactionFee2();
  messageError2 = document.getElementById("errorMessage2");
  amountToSend = calculateAmountToSend();


  messageError2.textContent = "";
  messageError2.className = "";

  const isValidsenderNumber = senderMomoNumber();
  const isValidreceiverNumber = receiverMomoNumber();
  let totaLamount = sendAmount + transactionFee;
  let transactionDetails = `Hello`;
  let messageOutput = document.getElementById("messageOutput");
  let encodedMessage = encodeURIComponent(transactionDetails);
  let URL = "display.html" + "?text=" + encodedMessage;


  if (!senderNetwork || !senderMmNumber || !receiverNetwork || !receiverMmNumber) {
    messageError2.textContent = "Please complete all required fields";
    messageError2.className = "red_error";
    messageError2.style.display = "block";
    return;
  }


if (senderCountry === "GHANA" && handleFee === "ADD FEE" && isValidsenderNumber && isValidreceiverNumber) {
  
transactionDetails = `<b>Sender:</b> ${senderMmNumber} (${senderNetwork}) ${senderCountry}<br>
<b>Receiver:</b> ${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}<br>
<b>Amount to receive:</b> <span style="color: red; font-weight: bold;"> ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA</span><br>
<b>Amount to Send:</b> ${sendAmount.toFixed(2)} GHS<br>
<b>Fee:</b> ${transactionFee.toFixed(2)} GHS<br>
<b>Total Amount:</b> <span style="color: green; font-weight: bold;">${totaLamount.toFixed(2)} GHS</span>`;

    messageOutput = document.getElementById("messageOutput");
    encodedMessage = encodeURIComponent(transactionDetails);
    URL = "display.html" + "?text=" + encodedMessage;
    messageOutput.textContent = transactionDetails;
    transactionDetails = document.getElementById("messageOutput").innerHTML;
    window.location.href = URL;

}

  else if (senderCountry === "GHANA" && handleFee === "SUBSTRACT FEE" && isValidsenderNumber && isValidreceiverNumber) {

transactionDetails = `<b>Sender:</b> ${senderMmNumber} (${senderNetwork}) ${senderCountry}<br>
<b>Receiver:</b> ${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}<br>
<b>Amount to receive:</b> <span style="color: red; font-weight: bold;"> ${roundDown(Math.round(amountToReceive)).toLocaleString('fr-FR')} FCFA</span><br>
<b>Amount to Send:</b> ${(sendAmount - transactionFee).toFixed(2)} GHS<br>
<b>Fee:</b> ${transactionFee.toFixed(2)} GHS<br>
<b>Total Amount:</b> <span style="color: green; font-weight: bold;">${sendAmount.toFixed(2)} GHS</span>`;
    
    messageOutput = document.getElementById("messageOutput");
    encodedMessage = encodeURIComponent(transactionDetails);
    URL = "display.html" + "?text=" + encodedMessage;
    messageOutput.textContent = transactionDetails;
    transactionDetails = document.getElementById("messageOutput").innerHTML;
    window.location.href = URL;
  }

  else if (senderCountry !== "GHANA" && handleFee === "ADD FEE" && isValidsenderNumber && isValidreceiverNumber) {
transactionDetails = `<b>Sender:</b> ${senderMmNumber} (${senderNetwork}) ${senderCountry}<br>
<b>Receiver:</b> ${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}<br>
<b>Amount to receive:</b> <span style="color: red; font-weight: bold;"> ${amountToReceive.toFixed(2)} GHS</span><br>
<b>Amount to Send:</b> ${sendAmount.toLocaleString('fr-FR')} FCFA<br>
<b>Fee:</b> ${transactionFee.toLocaleString('fr-FR')} FCFA<br>
<b>Total Amount:</b> <span style="color: green; font-weight: bold;">${Math.round(totaLamount).toLocaleString('fr-FR')} FCFA</span>`;

    messageOutput = document.getElementById("messageOutput");
    encodedMessage = encodeURIComponent(transactionDetails);
    URL = "display.html" + "?text=" + encodedMessage;
    messageOutput.textContent = transactionDetails;
    transactionDetails = document.getElementById("messageOutput").innerHTML;
    window.location.href = URL;
  }

  else if (senderCountry !== "GHANA" && handleFee === "SUBSTRACT FEE" && isValidsenderNumber && isValidreceiverNumber) {

transactionDetails = `<b>Sender:</b> ${senderMmNumber} (${senderNetwork}) ${senderCountry}<br>
<b>Receiver:</b> ${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}<br>
<b>Amount to receive:</b> <span style="color: red; font-weight: bold;"> ${amountToReceive.toFixed(2)} GHS</span><br>
<b>Amount to Send:</b> ${Math.round(sendAmount - transactionFee).toLocaleString('fr-FR')} FCFA<br>
<b>Fee:</b> ${transactionFee.toLocaleString('fr-FR')} FCFA<br>
<b>Total Amount:</b> <span style="color: green; font-weight: bold;">${Math.round(sendAmount).toLocaleString('fr-FR')} FCFA</span>`;

    messageOutput = document.getElementById("messageOutput");
    encodedMessage = encodeURIComponent(transactionDetails);
    URL = "display.html" + "?text=" + encodedMessage;
    messageOutput.textContent = transactionDetails;
    transactionDetails = document.getElementById("messageOutput").innerHTML;
    window.location.href = URL;
  }


//When Amount to receive is entered -----------------------------------------------------------------------------

  if (senderCountry === "GHANA" && receiveAmount && isValidsenderNumber && isValidreceiverNumber) {

transactionDetails = `<b>Sender:</b> ${senderMmNumber} (${senderNetwork}) ${senderCountry}<br>
<b>Receiver:</b> ${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}<br>
<b>Amount to receive:</b> <span style="color: red; font-weight: bold;"> ${roundDown(receiveAmount).toLocaleString('fr-FR')} FCFA</span><br>
<b>Amount to Send:</b> ${amountToSend.toFixed(2)} GHS<br>
<b>Fee:</b> ${transactionFee2.toFixed(2)} GHS<br>
<b>Total Amount:</b> <span style="color: green; font-weight: bold;">${(amountToSend + transactionFee2).toFixed(2)} GHS</span>`;

    messageOutput = document.getElementById("messageOutput");
    encodedMessage = encodeURIComponent(transactionDetails);
    URL = "display.html" + "?text=" + encodedMessage;
    messageOutput.textContent = transactionDetails;
    transactionDetails = document.getElementById("messageOutput").innerHTML;
    window.location.href = URL;
  } 

  else if (senderCountry !== "GHANA" && receiveAmount && isValidsenderNumber && isValidreceiverNumber) {
  totaLamount = amountToSend + transactionFee2;

transactionDetails = `<b>Sender:</b> ${senderMmNumber} (${senderNetwork}) ${senderCountry}<br>
<b>Receiver:</b> ${receiverMmNumber} (${receiverNetwork}) ${receiverCountry}<br>
<b>Amount to receive:</b> <span style="color: red; font-weight: bold;"> ${receiveAmount.toFixed(2)} GHS</span><br>
<b>Amount to Send:</b> ${roundUp(Math.round(amountToSend)).toLocaleString('fr-FR')} FCFA<br>
<b>Fee:</b> ${Math.round(transactionFee2).toLocaleString('fr-FR')} FCFA<br>
<b>Total Amount:</b> <span style="color: green; font-weight: bold;">${roundUp(Math.round(totaLamount)).toLocaleString('fr-FR')} FCFA</span>`;

    messageOutput = document.getElementById("messageOutput");
    encodedMessage = encodeURIComponent(transactionDetails);
    URL = "display.html" + "?text=" + encodedMessage;
    messageOutput.textContent = transactionDetails;
    transactionDetails = document.getElementById("messageOutput").innerHTML;
    window.location.href = URL;
  } 
}
  
  