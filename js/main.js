const menu = {
    burger : [
        {
            name: '🍔',
            time: 3000
        },
        {
            name: '🍟',
            time: 750
        },
        {
            name: '🥤',
            time: 500
        }
    ],
    hotDog : [
        {
            name: '🌭',
            time: 2000
        },
        {
            name: '🍺',
            time: 500
        }
    ],
    pizza : [
        {
            name: '🍕',
            time: 2500
        },
        {
            name: '🥃',
            time: 250
        }
    ]
};

function order(menuName, onOrderComplete) {

    console.log('Start cooking...');

    const result = [];

    const getCookingResult = (name, index) => {
        result[index] = name;
        if(menuName.length === result.filter(Boolean).length) {
            onOrderComplete(result);
        }
    };

    function cooking({name, time}, index) {

        setTimeout(() => {
            const condition = true;
            getCookingResult(
                condition ? {name, status: 'complete'} : {name, status: 'reject'}, index);
        }, time);
    }

    menuName.forEach(cooking);
}

console.log(order(menu.burger, takeOrder));
function takeOrder (orderResult) {
    console.log(orderResult);
}