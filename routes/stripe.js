const router = require("express").Router();

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payments", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json({ message: stripeErr.message });
      } else {
        res.status(200).json({ message: "Payment Successful" });
      }
    },
  );
});

module.exports = router;
