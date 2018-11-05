/**
 * OrderController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Nexmo = require("nexmo");
module.exports = {
  create: (req, res) => {
    const { firstName, lastName, phone } = req.body;
    //place order

    const message = `Hello ${firstName} ${lastName}, your order has been confirmed.`;
    // phone = 234XXXXXXXXXXX

    //send sms
    const textMessagingService = new Nexmo({
      apiKey: "577d27b2",
      apiSecret: "5qNy5hsuGj8QUFKu"
    });
    textMessagingService.message.sendSms("DS Shopping", phone, message);

    //send email
    return res.send({ error: false, message: "Your order has been confirmed" });
  }
};
