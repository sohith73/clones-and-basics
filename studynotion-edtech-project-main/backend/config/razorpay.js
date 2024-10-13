const Razorpay = require('razorpay');
require("dotenv").config()

const instance = new Razorpay({
    key_id: "9r90rjffndjnjnfjn",
    key_secret: "fndjfjafjquefeurhwqufu1",
});

module.exports = instance