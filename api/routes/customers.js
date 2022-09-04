const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");

router.get("/", async (req, res) => {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const customer = new Customer({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    location: req.body.location,
    subscribedToPackage: req.body.subscribedToPackage,
  });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function getCustomer(req, res, next) {
  let customer;
  try {
    customer = await Customer.findById(req.params.id);
    if (customer == null) {
      return res.status(404).json({ message: "Cannot find customer" });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.customer = customer;
  next();
}

//get one customer
router.get("/:id", getCustomer, (req, res) => {
  res.json(res.customer);
});

//update
router.patch("/:id", getCustomer, async (req, res) => {
  if (req.body.name != null) {
    res.customer.name = req.body.name;
  }

  if (req.body.email != null) {
    res.customer.email = req.body.email;
  }

  if (req.body.phoneNumber != null) {
    res.customer.phoneNumber = req.body.phoneNumber;
  }

  if (req.body.location != null) {
    res.customer.location = req.body.location;
  }

  if (req.body.subscribedToPackage != null) {
    res.customer.subscribedToPackage = req.body.subscribedToPackage;
  }

  try {
    const updatedCustomer = await res.customer.save();
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/", getCustomer, async (req, res) => {
  try {
    await res.customer.remove();
    res.json({ message: err.message });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
