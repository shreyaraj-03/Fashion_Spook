const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51N9E9nSEcmfKOS0iQAZb2mkOLQAI54AOFhznON4YnvQjHyx8IY4Jvu9RFP3BqY6fhAtvXJ4LN13Vu18x3EkSQPd700Lx7p8EOc"
);

router.post("/payment", (req,res) =>{
     stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
      },

      (stripeErr, stripeRes) => {
        console.log("hi");
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
})

module.exports = router;