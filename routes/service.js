var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
res.status(200).json({
    msn: "HOLA MUNDO"
    });
});
router.post('/test', function(req, res, next) {
    req.body["msn"] = "Por el servidor";
    var num = req.body.test1 + "sss";
    req.body["dsa"] = num;
    var data = req.body
    console.log(data);
    res.status(200).json(data);
});
router.post('/divisas', function(req, res) {
    var data = req.body;
    var divorigin = req.body.currency_act;
    var quant = req.body.amount;
    var divchang = req.body.currency_chg;
    /*data["moneda original"] = divorigin;
    data["cantidad"] = quant;
    data["moneda de cambio"] = divchang;*/

    var divs = ["CAD",
        "HKD",
        "ISK",
        "PHP",
        "DKK",
        "HUF",
        "CZK",
        "GBP",
        "RON",
        "SEK",
        "IDR",
        "INR",
        "BRL",
        "RUB",
        "HRK",
        "JPY",
        "THB",
        "CHF",
        "EUR",
        "MYR",
        "BGN",
        "TRY",
        "CNY",
        "NOK",
        "NZD",
        "ZAR",
        "USD",
        "MXN",
        "SGD",
        "AUD",
        "ILS",
        "KRW",
        "PLN",
        "BO"
    ];
    
    var values = [1.3256384622,
        7.8401345088,
        124.6932654731,
        52.1294192493,
        6.7855130419,
        304.6169226575,
        23.5135872035,
        0.8011724075,
        4.3155503045,
        9.7030809779,
        14112.4965918386,
        70.9474688721,
        4.1587748796,
        63.6425520313,
        6.7290738889,
        107.6524584204,
        30.5643915296,
        0.988639462,
        0.9088430428,
        4.1814959556,
        1.7775152231,
        5.6850858857,
        7.1070617104,
        9.0179950922,
        1.583931655,
        14.868581296,
        1.0,
        19.4398800327,
        1.3764427883,
        1.471326002,
        3.5040443515,
        1193.9107516132,
        3.9819140234,
        6.96
    ];
    var result = (quant/values[divs.findIndex(div => div === divorigin)])*values[divs.findIndex(div => div === divchang)];
    data["cantidad convertida"] = result;
    console.log(data);
    res.status(200).json(data);
});
router.post('/interes', function(req, res, next) {
    var data = req.body;
    var am = req.body.amount_req;
    var intr = req.body.inters;
    var tim = req.body.time;
    var result = am*Math.pow((1.0+parseFloat(intr)),tim);
    data["final_amount"] = result;
    res.status(200).json(data);
});
module.exports = router;