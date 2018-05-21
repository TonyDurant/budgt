var wallet_balance = new Vue ({
    el: '#wallet_balance',
    data: {
        wallet_balance: "$99,900.00"
    }
})

var transactions = new Vue({
    el: '#transactions',
    filters: {
        currency(value) {
            return value.toFixed(2);
        }
    },
    methods: {
        // value: function (t) {
        //     if (t.credit !== null) {
        //         return "-" + t.credit
        //     } else {
        //         return t.debit
        //     }
        // }
    },
    mounted() {
        this.transactionsByDate = this.transactions.reduce(function (result, current) {
            result[current.date] = result[current.date] || [];
            result[current.date].push(current);
            return result;
        }, {})
    },
    data: {
        selectedT: [],
        transactionValue: [],
        transactionsByDate: [],
        transactions: [
            {
                "date": "03/11/2018",
                "name": "POPULAR LUBE",
                "credit": 35,
                "debit": null,
                "value": -35,
                "label": "Transport"
            },
            {
                "date": "03/12/2018",
                "name": "SHELL 1195 WALKER'S LINE",
                "credit": 20,
                "debit": null,
                "value": -20,
                "label": "Transport"
            },
            {
                "date": "03/12/2018",
                "name": "STAPLES STORE #229",
                "credit": 7.33,
                "debit": null,
                "value": -7.33,
                "label": "Shopping"
            },
            {
                "date": "03/14/2018",
                "name": "METRO #065",
                "credit": 7.47,
                "debit": null,
                "value": -7.47,
                "label": "Groceries"
            },
            {
                "date": "03/15/2018",
                "name": "APPLE STORE #R208",
                "credit": 28.25,
                "debit": null,
                "value": -28.25,
                "label": "Bills"
            },
            {
                "date": "03/15/2018",
                "name": "KRAZY ROLL",
                "credit": 27.12,
                "debit": null,
                "value": -27.12,
                "label": "Eating Out"
            },
            {
                "date": "03/15/2018",
                "name": "PAYMENT - THANK YOU",
                "credit": null,
                "debit": 950,
                "value": 950,
                "label": "Bills"
            },
            {
                "date": "03/15/2018",
                "name": "SHOPPERSDRUGMART0861",
                "credit": 12.86,
                "debit": null,
                "value": -12.86,
                "label": "Groceries"
            },
            {
                "date": "03/16/2018",
                "name": "BURRITOZ",
                "credit": 8.48,
                "debit": null,
                "value": -8.48,
                "label": "Eating Out"
            },
            {
                "date": "03/16/2018",
                "name": "METRO #065",
                "credit": 8.48,
                "debit": null,
                "value": -8.48,
                "label": "Groceries"
            },
            {
                "date": "03/16/2018",
                "name": "SHOPPERS DRUG MART #1421",
                "credit": 6.53,
                "debit": null,
                "value": -6.53,
                "label": "Groceries"
            },
            {
                "date": "03/18/2018",
                "name": "INFINITY HEALTH CENTRE",
                "credit": 90.4,
                "debit": null,
                "value": -90.4,
                "label": "Health"
            },
            {
                "date": "03/18/2018",
                "name": "MAURYA EAST INDIAN ROT",
                "credit": 14.63,
                "debit": null,
                "value": -14.63,
                "label": "Eating Out"
            },
            {
                "date": "03/18/2018",
                "name": "METRO #065",
                "credit": 5.99,
                "debit": null,
                "value": -5.99,
                "label": "Groceries"
            },
            {
                "date": "03/18/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 21.17,
                "debit": null,
                "value": -21.17,
                "label": "Groceries"
            },
            {
                "date": "03/19/2018",
                "name": "FORTINO'S (UPPER MIDDL",
                "credit": 6.77,
                "debit": null,
                "value": -6.77,
                "label": "Groceries"
            },
            {
                "date": "03/19/2018",
                "name": "PAYMENT - THANK YOU",
                "credit": null,
                "debit": 300,
                "value": 300,
                "label": "Bills"
            },
            {
                "date": "03/20/2018",
                "name": "A&W #4580 APPLEBY LINE",
                "credit": 4.19,
                "debit": null,
                "value": -4.19,
                "label": "Groceries"
            },
            {
                "date": "03/20/2018",
                "name": "MCDONALD'S #40065",
                "credit": 10.8,
                "debit": null,
                "value": -10.8,
                "label": "Eating Out"
            },
            {
                "date": "03/20/2018",
                "name": "NETFLIX.COM",
                "credit": 10.99,
                "debit": null,
                "value": -10.99,
                "label": "Bills"
            },
            {
                "date": "03/20/2018",
                "name": "RESTAURANT SULIKO",
                "credit": 107.66,
                "debit": null,
                "value": -107.66,
                "label": "Eating Out"
            },
            {
                "date": "03/21/2018",
                "name": "SHELL 1195 WALKER'S LINE",
                "credit": 1.8,
                "debit": null,
                "value": -1.8,
                "label": "Transport"
            },
            {
                "date": "03/21/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 8.67,
                "debit": null,
                "value": -8.67,
                "label": "Eating Out"
            },
            {
                "date": "03/22/2018",
                "name": "MAURYA EAST INDIAN ROT",
                "credit": 14.63,
                "debit": null,
                "value": -14.63,
                "label": "Eating Out"
            },
            {
                "date": "03/22/2018",
                "name": "METRO #065",
                "credit": 13.91,
                "debit": null,
                "value": -13.91,
                "label": "Groceries"
            },
            {
                "date": "03/22/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 62.2,
                "debit": null,
                "value": -62.2,
                "label": "Groceries"
            },
            {
                "date": "03/22/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 3.55,
                "debit": null,
                "value": -3.55,
                "label": "Eating Out"
            },
            {
                "date": "03/23/2018",
                "name": "GOPARK MGT.(ON) LOT 12-31",
                "credit": 14,
                "debit": null,
                "value": -14,
                "label": "Transport"
            },
            {
                "date": "03/23/2018",
                "name": "METRO #065",
                "credit": 7.91,
                "debit": null,
                "value": -7.91,
                "label": "Groceries"
            },
            {
                "date": "03/23/2018",
                "name": "TORONTO PARKING AUTHORITY",
                "credit": 0.25,
                "debit": null,
                "value": -0.25,
                "label": "Transport"
            },
            {
                "date": "03/25/2018",
                "name": "METRO #065",
                "credit": 4.98,
                "debit": null,
                "value": -4.98,
                "label": "Groceries"
            },
            {
                "date": "03/26/2018",
                "name": "BURRITOZ",
                "credit": 10.44,
                "debit": null,
                "value": -10.44,
                "label": "Eating Out"
            },
            {
                "date": "03/26/2018",
                "name": "SHELL 1195 WALKER'S LINE",
                "credit": 20,
                "debit": null,
                "value": -20,
                "label": "Transport"
            },
            {
                "date": "03/26/2018",
                "name": "TORONTO PARKING AUTHORITY",
                "credit": 2,
                "debit": null,
                "value": -2,
                "label": "Transport"
            },
            {
                "date": "03/27/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 30,
                "debit": null,
                "value": -30,
                "label": "Transport"
            },
            {
                "date": "03/27/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 1.91,
                "debit": null,
                "value": -1.91,
                "label": "Transport"
            },
            {
                "date": "03/28/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 10.26,
                "debit": null,
                "value": -10.26,
                "label": "Groceries"
            },
            {
                "date": "03/28/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 3.55,
                "debit": null,
                "value": -3.55,
                "label": "Eating Out"
            },
            {
                "date": "03/29/2018",
                "name": "PAYMENT - THANK YOU",
                "credit": null,
                "debit": 700,
                "value": 700,
                "label": "Bills"
            },
            {
                "date": "03/29/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 60,
                "debit": null,
                "value": -60,
                "label": "Transport"
            },
            {
                "date": "03/30/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 14.66,
                "debit": null,
                "value": -14.66,
                "label": "Groceries"
            },
            {
                "date": "03/30/2018",
                "name": "RESTAURANT SULIKO",
                "credit": 44.7,
                "debit": null,
                "value": -44.7,
                "label": "Eating Out"
            },
            {
                "date": "03/30/2018",
                "name": "YELLOW CUP CAFE LTD",
                "credit": 24.54,
                "debit": null,
                "value": -24.54,
                "label": "Eating Out"
            },
            {
                "date": "03/31/2018",
                "name": "BEST BUY #938",
                "credit": 33.89,
                "debit": null,
                "value": -33.89,
                "label": "Shopping"
            },
            {
                "date": "03/31/2018",
                "name": "BIG APPLE",
                "credit": 27.48,
                "debit": null,
                "value": -27.48,
                "label": "Groceries"
            },
            {
                "date": "03/31/2018",
                "name": "CREPE ESCAPE",
                "credit": 22.6,
                "debit": null,
                "value": -22.6,
                "label": "Eating Out"
            },
            {
                "date": "03/31/2018",
                "name": "METRO #065",
                "credit": 12.53,
                "debit": null,
                "value": -12.53,
                "label": "Groceries"
            },
            {
                "date": "03/31/2018",
                "name": "PANERA BREAD 5005",
                "credit": 18.06,
                "debit": null,
                "value": -18.06,
                "label": "Eating Out"
            },
            {
                "date": "03/31/2018",
                "name": "SHELL 680 THE QUEENSWAY",
                "credit": 80,
                "debit": null,
                "value": -80,
                "label": "Transport"
            },
            {
                "date": "03/31/2018",
                "name": "STARBUCKS #28081#",
                "credit": 15,
                "debit": null,
                "value": -15,
                "label": "Eating Out"
            },
            {
                "date": "04/01/2018",
                "name": "ACADEMY OF MUSIC",
                "credit": 133,
                "debit": null,
                "value": -133,
                "label": "Bills"
            },
            {
                "date": "04/02/2018",
                "name": "MAURYA EAST INDIAN ROT",
                "credit": 14.63,
                "debit": null,
                "value": -14.63,
                "label": "Eating Out"
            },
            {
                "date": "04/02/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 3.55,
                "debit": null,
                "value": -3.55,
                "label": "Eating Out"
            },
            {
                "date": "04/03/2018",
                "name": "BURRITOZ",
                "credit": 10.44,
                "debit": null,
                "value": -10.44,
                "label": "Eating Out"
            },
            {
                "date": "04/04/2018",
                "name": "KRAZY ROLL",
                "credit": 25.99,
                "debit": null,
                "value": -25.99,
                "label": "Eating Out"
            },
            {
                "date": "04/04/2018",
                "name": "METRO #065",
                "credit": 18.73,
                "debit": null,
                "value": -18.73,
                "label": "Groceries"
            },
            {
                "date": "04/05/2018",
                "name": "METRO #065",
                "credit": 21.01,
                "debit": null,
                "value": -21.01,
                "label": "Groceries"
            },
            {
                "date": "04/05/2018",
                "name": "PEARSON PARKING T3",
                "credit": 6,
                "debit": null,
                "value": -6,
                "label": "Transport"
            },
            {
                "date": "04/05/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 50,
                "debit": null,
                "value": -50,
                "label": "Transport"
            },
            {
                "date": "04/05/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 1.91,
                "debit": null,
                "value": -1.91,
                "label": "Transport"
            },
            {
                "date": "04/05/2018",
                "name": "SUNNY MORNING",
                "credit": 29.87,
                "debit": null,
                "value": -29.87,
                "label": "Eating Out"
            },
            {
                "date": "04/06/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 13.75,
                "debit": null,
                "value": -13.75,
                "label": "Eating Out"
            },
            {
                "date": "04/07/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 26.91,
                "debit": null,
                "value": -26.91,
                "label": "Groceries"
            },
            {
                "date": "04/07/2018",
                "name": "PAYPAL *THINKRACEIN",
                "credit": 240,
                "debit": null,
                "value": -240,
                "label": "Bills"
            },
            {
                "date": "04/09/2018",
                "name": "PAYMENT - THANK YOU",
                "credit": null,
                "debit": 300,
                "value": 300,
                "label": "Bills"
            }
        ]
    }
})