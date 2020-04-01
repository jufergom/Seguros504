const router = require('express').Router();
let Insurance = require('../models/insurance.model');

router.route('/').get((req, res) => {
  Insurance.find()
    .then(insurances => res.json(insurances))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/add').post((req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const points = req.body.points;
  const primaryMed = req.body.primaryMed;
  const refund = req.body.refund;
  const urgency = req.body.urgency;
  const specialty = req.body.specialty;
  const diagnostics = req.body.diagnostics;

  const newInsurance = new Insurance({
    name,
    description,
    points,
    primaryMed,
    refund,
    urgency,
    specialty,
    diagnostics
  });

  newInsurance
    .save()
    .then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json('Error' + err));
});

module.exports = router;
