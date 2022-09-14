import { Router, Request, Response } from 'express';
import CarModel from '../models/Car';
import CarService from '../services/Car';
import CarController from '../controllers/Car';

const route = Router();

const model = new CarModel();
const service = new CarService(model);
const carController = new CarController(service);

route.post('/cars', (req: Request, res: Response) =>
  carController.create(req, res));

export default route;