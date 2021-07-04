function writeCards(array, eventName)
{
    let giftResponse = []
    for (let i = 0; i < array.length; i++)
    {
        giftResponse.push(`Thank you, ${array[i]}, for the wonderful ${eventName} gift!`);
    }
    return giftResponse;
}

function countDown(counterNumber)
{
    let i = counterNumber;
    while (i > -1)
    {
        console.log(i);
        i--;
    }
}

