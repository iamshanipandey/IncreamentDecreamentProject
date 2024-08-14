let  currentValue = document.querySelector('#value');

function decreament ()  {
    let fetchValue = parseInt(currentValue.innerText);
    fetchValue = fetchValue-1;
    currentValue.innerText = fetchValue;
};

const increament = () => {
    let fetchValue = parseInt(currentValue.innerText);
    fetchValue = fetchValue+1;
    currentValue.innerText = fetchValue;
};
