document.getElementById('donate-btn').addEventListener('click', function(){
    
    const addMoneyInput = document.getElementById('donationAmountInput').value;
    console.log(addMoneyInput);

    if (addMoneyInput<0) {
        alert("invalid input");
        return;
    }

    const donatedAmount = document.getElementById('donated-Amount').innerText;
    console.log(donatedAmount);

    const addMoneyInputNumber = parseFloat(addMoneyInput);
    const donatedAmountNumber = parseFloat(donatedAmount);

    const totalDonation = donatedAmountNumber + addMoneyInputNumber;
    console.log(totalDonation);

    // ADD money to history
    const p = document.createElement('p');
    const currentTime = new Date().toLocaleString();
    
    p.innerText = `Added: ${addMoneyInputNumber} tk Time: ${currentTime}`;
    console.log(p);
    document.getElementById('history-container').append(p);

    document.getElementById('donated-Amount').innerText = totalDonation;

    const totalBalance = document.getElementById('total-balance').innerText;
    console.log(totalBalance);
    

    const totalBalanceNumber = parseFloat(totalBalance);
    console.log(totalBalanceNumber);

    const updatedBalance = totalBalanceNumber - addMoneyInput;
    console.log(updatedBalance);

    document.getElementById('total-balance').innerText = updatedBalance;

})

document.getElementById('donate-btn-two').addEventListener('click', function(){
    
    const addMoneyInputTwo = document.getElementById('donationAmountInput2').value;
    console.log(addMoneyInputTwo);

    if (addMoneyInputTwo<0) {
        alert("invalid input");
        return;
    }

    const donatedAmountTwo = document.getElementById('donated-Amount-two').innerText;
    console.log(donatedAmountTwo);

    const addMoneyInputNumberTwo = parseFloat(addMoneyInputTwo);
    const donatedAmountNumberTwo = parseFloat(donatedAmountTwo);

    const totalDonationTwo = donatedAmountNumberTwo + addMoneyInputNumberTwo;
    console.log(totalDonationTwo);

    document.getElementById('donated-Amount-two').innerText = totalDonationTwo;

    const totalBalanceTwo = document.getElementById('total-balance').innerText;
    console.log(totalBalanceTwo);
    

    const totalBalanceNumberTwo = parseFloat(totalBalanceTwo);
    console.log(totalBalanceNumberTwo);

    const updatedBalanceTwo = totalBalanceNumberTwo - addMoneyInputTwo;
    console.log(updatedBalanceTwo);

    document.getElementById('total-balance').innerText = updatedBalanceTwo;

 })

 document.getElementById('donate-btn-three').addEventListener('click', function(){
    
    const addMoneyInputThree = document.getElementById('donationAmountInput3').value;
    console.log(addMoneyInputThree);

    if (addMoneyInputThree<0) {
        alert("invalid input");
        return;
    }

    const donatedAmountThree = document.getElementById('donated-Amount-Three').innerText;
    console.log(donatedAmountThree);

    const addMoneyInputNumberThree = parseFloat(addMoneyInputThree);
    const donatedAmountNumberThree = parseFloat(donatedAmountThree);

    const totalDonationThree = donatedAmountNumberThree + addMoneyInputNumberThree;
    console.log(totalDonationThree);

    document.getElementById('donated-Amount-Three').innerText = totalDonationThree;

    const totalBalanceThree = document.getElementById('total-balance').innerText;
    console.log(totalBalanceThree);
    

    const totalBalanceNumberThree = parseFloat(totalBalanceThree);
    console.log(totalBalanceNumberThree);

    const updatedBalanceThree = totalBalanceNumberThree - addMoneyInputThree;
    console.log(updatedBalanceThree);

    document.getElementById('total-balance').innerText = updatedBalanceThree;

 })


// ................... Blog


function showSectionById(id){
    document.getElementById('noakhali').classList.add('hidden');
    document.getElementById('feni').classList.add('hidden');
    document.getElementById('quota').classList.add('hidden');
    document.getElementById('footer').classList.add('hidden');
    document.getElementById('history').classList.remove('hidden');
}

document.getElementById('history-btn').addEventListener('click', function(){

    showSectionById('history');
})


