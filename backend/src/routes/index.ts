import { Router } from 'express';

const routes = Router();

const patients = [
  { name: 'Joao', age: 10 },
  { name: 'Maria', age: 11 },
];

routes.get('/', (req, res) => res.json(patients));

routes.post('/patient', (req, res) => {
  const { body } = req;
  if (!body) {
    return res.status(400).json({
      success: false,
      error: 'You must provide a Patient',
    });
  }
  const patient = {
    name: body.name,
    age: body.age,
  };
  patients.push(patient);
  return res.status(200).json({
    success: true,
  });
});

export default routes;
