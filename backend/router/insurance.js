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
    .then(() => res.json('Insurance added'))
    .catch(err => res.status(400).json('Error' + err));
});

router.route('/:id').get((req, res) => {
  Insurance.findById(req.param.id)
    .then(insurance => res.json(insurance))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/:id').delete((req, res) => {
  Insurance.findByIdAndDelete(req.params.id)
    .then(() => res.json('Insurance deleted.'))
    .catch(err => res.status(400).json('Error ' + err));
});

router.route('/update/:id').post((req, res) => {
  Insurance.findById(req.param.id).then(insurance => {
    insurance.name = req.body.name;
    insurance.description = req.body.description;
    insurance.points = req.body.points;
    insurance.primaryMed = req.body.primaryMed;
    insurance.refund = req.body.refund;
    insurance.urgency = req.body.urgency;
    insurance.specialty = req.body.specialty;
    insurance.diagnostics = req.body.diagnostics;

    insurance
      .save()
      .then(() => res.json('Insurance updated'))
      .catch(err => res.status(400).json('Error ' + err));
  });
});

module.exports = router;
