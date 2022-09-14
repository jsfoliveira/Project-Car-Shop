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

route.get('/cars', (req: Request, res: Response) =>
  carController.read(req, res));

route.get('/cars/:id', (req: Request, res: Response) =>
  carController.readOne(req, res));

export default route;