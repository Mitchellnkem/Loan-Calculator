// function calculateLoan(){
// 	const loanAmount = parseFloat(document.getElementById("loanAmountInput").value);

// 	const annualInterestRate = parseFloat(document.getElementById("interestRateInput").value);

// 	const loanTermYears = parseFloat(document.getElementById("loanTermInput").value);



// 	if(isNaN(loanAmount) || isNaN(annualInterestRate) || isNaN(loanTermYears)){
// 		alert("Please enter a valid number");
// 		return;
// 	}



// 	const monthlyInterestRate = annualInterestRate / 100 / 12;
// 	const numberofPayments = 
// }

function calculateLoan (){
	const loanAmount = parseFloat(document.getElementById('loanAmount').value);

	const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;

	const loanTerm = parseFloat(document.getElementById('loanTerm').value) * 12;

	const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));

	document.getElementById('monthlyPayment').innetText = `$${monthlyPayment.toFixed(2)}`;
}