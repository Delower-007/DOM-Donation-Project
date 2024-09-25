document.getElementById('add-money-button')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const addValue = getInputFieldValueByID('input-field'); // input value
        const cardAmount = getCardValueByID('card-amount');  //card value
        const mainSectionAmount = getMainValueByID('main-amount'); // main section balance
        console.log(addValue, cardAmount);

        if (!isNaN(addValue) && addValue >= 0) {

            if (addValue > mainSectionAmount) {
                alert('you don,t have enough money.');
                return;
            }
            const totalAmount = cardAmount + addValue;
            console.log(totalAmount);

            document.getElementById('card-amount').innerText = totalAmount;

            const currentBalance = mainSectionAmount - addValue;

            document.getElementById('main-amount').innerText = currentBalance;

            // Modal Section
            document.getElementById("my_modal_1").showModal();

            // Add history 
            const div = document.createElement('div');
            div.innerHTML = `
                   <div  class = "border-2 rounded-lg p-4 mb-3 shadow-md  space-y-2">
                      <h2 class ="font-bold" >${addValue} is added for flood in Nowakhali, Bangladesh.</h2>

                      <p class="text-sm bg-gray-100" > ${Date()} </p>
                   
                   </div>         

            `
            document.getElementById('history-container').appendChild(div);


        }
        else {
            alert('Please give input value in Number');
            return;

        }


    })