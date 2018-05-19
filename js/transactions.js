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
        expandT: function (t) {
            alert(t.name);
        },
        value: function (t) {
            if (t.credit !== null) {
                return "-" + t.credit
            } else {
                return t.debit
            }
        }
    },
    data: {
        transactions: [
            {
                "date": "03/11/2018",
                "name": "POPULAR LUBE",
                "credit": 35,
                "debit": null,
                "balance": 971.89
            },
            {
                "date": "03/12/2018",
                "name": "STAPLES STORE #229",
                "credit": 7.33,
                "debit": null,
                "balance": 979.22
            },
            {
                "date": "03/12/2018",
                "name": "SHELL 1195 WALKER'S LINE",
                "credit": 20,
                "debit": null,
                "balance": 999.22
            },
            {
                "date": "03/14/2018",
                "name": "METRO #065",
                "credit": 7.47,
                "debit": null,
                "balance": 1006.69
            },
            {
                "date": "03/15/2018",
                "name": "PAYMENT - THANK YOU",
                "credit": null,
                "debit": 950,
                "balance": 56.69
            },
            {
                "date": "03/15/2018",
                "name": "SHOPPERSDRUGMART0861",
                "credit": 12.86,
                "debit": null,
                "balance": 69.55
            },
            {
                "date": "03/15/2018",
                "name": "KRAZY ROLL",
                "credit": 27.12,
                "debit": null,
                "balance": 96.67
            },
            {
                "date": "03/15/2018",
                "name": "SAMSUNG 1801",
                "credit": 654.42,
                "debit": null,
                "balance": 751.09
            },
            {
                "date": "03/15/2018",
                "name": "APPLE STORE #R208",
                "credit": 28.25,
                "debit": null,
                "balance": 779.34
            },
            {
                "date": "03/16/2018",
                "name": "METRO #065",
                "credit": 8.48,
                "debit": null,
                "balance": 787.82
            },
            {
                "date": "03/16/2018",
                "name": "BURRITOZ",
                "credit": 8.48,
                "debit": null,
                "balance": 796.3
            },
            {
                "date": "03/16/2018",
                "name": "SHOPPERS DRUG MART #1421",
                "credit": 6.53,
                "debit": null,
                "balance": 802.83
            },
            {
                "date": "03/18/2018",
                "name": "METRO #065",
                "credit": 5.99,
                "debit": null,
                "balance": 808.82
            },
            {
                "date": "03/18/2018",
                "name": "INFINITY HEALTH CENTRE",
                "credit": 90.4,
                "debit": null,
                "balance": 899.22
            },
            {
                "date": "03/18/2018",
                "name": "MAURYA EAST INDIAN ROT",
                "credit": 14.63,
                "debit": null,
                "balance": 913.85
            },
            {
                "date": "03/18/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 21.17,
                "debit": null,
                "balance": 935.02
            },
            {
                "date": "03/19/2018",
                "name": "PAYMENT - THANK YOU",
                "credit": null,
                "debit": 300,
                "balance": 635.02
            },
            {
                "date": "03/19/2018",
                "name": "FORTINO'S (UPPER MIDDL",
                "credit": 6.77,
                "debit": null,
                "balance": 641.79
            },
            {
                "date": "03/20/2018",
                "name": "RESTAURANT SULIKO",
                "credit": 107.66,
                "debit": null,
                "balance": 749.45
            },
            {
                "date": "03/20/2018",
                "name": "NETFLIX.COM",
                "credit": 10.99,
                "debit": null,
                "balance": 760.44
            },
            {
                "date": "03/20/2018",
                "name": "MCDONALD'S #40065",
                "credit": 10.8,
                "debit": null,
                "balance": 771.24
            },
            {
                "date": "03/20/2018",
                "name": "A&W #4580 APPLEBY LINE",
                "credit": 4.19,
                "debit": null,
                "balance": 775.43
            },
            {
                "date": "03/21/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 8.67,
                "debit": null,
                "balance": 784.1
            },
            {
                "date": "03/21/2018",
                "name": "SHELL 1195 WALKER'S LINE",
                "credit": 1.8,
                "debit": null,
                "balance": 785.9
            },
            {
                "date": "03/22/2018",
                "name": "METRO #065",
                "credit": 13.91,
                "debit": null,
                "balance": 799.81
            },
            {
                "date": "03/22/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 62.2,
                "debit": null,
                "balance": 862.01
            },
            {
                "date": "03/22/2018",
                "name": "MAURYA EAST INDIAN ROT",
                "credit": 14.63,
                "debit": null,
                "balance": 876.64
            },
            {
                "date": "03/22/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 3.55,
                "debit": null,
                "balance": 880.19
            },
            {
                "date": "03/23/2018",
                "name": "METRO #065",
                "credit": 7.91,
                "debit": null,
                "balance": 888.1
            },
            {
                "date": "03/23/2018",
                "name": "GOPARK MGT.(ON) LOT 12-31",
                "credit": 14,
                "debit": null,
                "balance": 902.1
            },
            {
                "date": "03/23/2018",
                "name": "TORONTO PARKING AUTHORITY",
                "credit": 0.25,
                "debit": null,
                "balance": 902.35
            },
            {
                "date": "03/25/2018",
                "name": "METRO #065",
                "credit": 4.98,
                "debit": null,
                "balance": 907.33
            },
            {
                "date": "03/26/2018",
                "name": "BURRITOZ",
                "credit": 10.44,
                "debit": null,
                "balance": 917.77
            },
            {
                "date": "03/26/2018",
                "name": "TORONTO PARKING AUTHORITY",
                "credit": 2,
                "debit": null,
                "balance": 919.77
            },
            {
                "date": "03/26/2018",
                "name": "SHELL 1195 WALKER'S LINE",
                "credit": 20,
                "debit": null,
                "balance": 939.77
            },
            {
                "date": "03/27/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 30,
                "debit": null,
                "balance": 969.77
            },
            {
                "date": "03/27/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 1.91,
                "debit": null,
                "balance": 971.68
            },
            {
                "date": "03/28/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 10.26,
                "debit": null,
                "balance": 981.94
            },
            {
                "date": "03/28/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 3.55,
                "debit": null,
                "balance": 985.49
            },
            {
                "date": "03/29/2018",
                "name": "PAYMENT - THANK YOU",
                "credit": null,
                "debit": 700,
                "balance": 285.49
            },
            {
                "date": "03/29/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 60,
                "debit": null,
                "balance": 345.49
            },
            {
                "date": "03/30/2018",
                "name": "YELLOW CUP CAFE LTD",
                "credit": 24.54,
                "debit": null,
                "balance": 370.03
            },
            {
                "date": "03/30/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 14.66,
                "debit": null,
                "balance": 384.69
            },
            {
                "date": "03/30/2018",
                "name": "RESTAURANT SULIKO",
                "credit": 44.7,
                "debit": null,
                "balance": 429.39
            },
            {
                "date": "03/31/2018",
                "name": "CREPE ESCAPE",
                "credit": 22.6,
                "debit": null,
                "balance": 451.99
            },
            {
                "date": "03/31/2018",
                "name": "STARBUCKS #28081#",
                "credit": 15,
                "debit": null,
                "balance": 466.99
            },
            {
                "date": "03/31/2018",
                "name": "PANERA BREAD 5005",
                "credit": 18.06,
                "debit": null,
                "balance": 485.05
            },
            {
                "date": "03/31/2018",
                "name": "METRO #065",
                "credit": 12.53,
                "debit": null,
                "balance": 497.58
            },
            {
                "date": "03/31/2018",
                "name": "BIG APPLE",
                "credit": 27.48,
                "debit": null,
                "balance": 525.06
            },
            {
                "date": "03/31/2018",
                "name": "BEST BUY #938",
                "credit": 33.89,
                "debit": null,
                "balance": 558.95
            },
            {
                "date": "03/31/2018",
                "name": "SAMSUNG 1801",
                "credit": null,
                "debit": 45.19,
                "balance": 513.76
            },
            {
                "date": "03/31/2018",
                "name": "SHELL 680 THE QUEENSWAY",
                "credit": 80,
                "debit": null,
                "balance": 593.76
            },
            {
                "date": "04/01/2018",
                "name": "ACADEMY OF MUSIC",
                "credit": 133,
                "debit": null,
                "balance": 726.76
            },
            {
                "date": "04/02/2018",
                "name": "MAURYA EAST INDIAN ROT",
                "credit": 14.63,
                "debit": null,
                "balance": 741.39
            },
            {
                "date": "04/02/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 3.55,
                "debit": null,
                "balance": 744.94
            },
            {
                "date": "04/03/2018",
                "name": "BURRITOZ",
                "credit": 10.44,
                "debit": null,
                "balance": 755.38
            },
            {
                "date": "04/04/2018",
                "name": "METRO #065",
                "credit": 18.73,
                "debit": null,
                "balance": 774.11
            },
            {
                "date": "04/04/2018",
                "name": "KRAZY ROLL",
                "credit": 25.99,
                "debit": null,
                "balance": 800.1
            },
            {
                "date": "04/05/2018",
                "name": "METRO #065",
                "credit": 21.01,
                "debit": null,
                "balance": 821.11
            },
            {
                "date": "04/05/2018",
                "name": "SUNNY MORNING",
                "credit": 29.87,
                "debit": null,
                "balance": 850.98
            },
            {
                "date": "04/05/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 50,
                "debit": null,
                "balance": 900.98
            },
            {
                "date": "04/05/2018",
                "name": "PETROCAN-1200 WALKERS LIN",
                "credit": 1.91,
                "debit": null,
                "balance": 902.89
            },
            {
                "date": "04/05/2018",
                "name": "PEARSON PARKING T3",
                "credit": 6,
                "debit": null,
                "balance": 908.89
            },
            {
                "date": "04/06/2018",
                "name": "TIM HORTONS 0750 QTH",
                "credit": 13.75,
                "debit": null,
                "balance": 922.64
            },
            {
                "date": "04/07/2018",
                "name": "PAYPAL *THINKRACEIN",
                "credit": 240,
                "debit": null,
                "balance": 1162.64
            },
            {
                "date": "04/07/2018",
                "name": "ONTARIO FRESH AND TASTY",
                "credit": 26.91,
                "debit": null,
                "balance": 1189.55
            },
            {
                "date": "04/08/2018",
                "name": "QUEENS QUAY",
                "credit": 20,
                "debit": null,
                "balance": 1209.55
            },
            {
                "date": "04/09/2018",
                "name": "PAYMENT - THANK YOU",
                "credit": null,
                "debit": 300,
                "balance": 909.55
            }
        ]
    }
})