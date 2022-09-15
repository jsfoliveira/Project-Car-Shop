import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model } from 'mongoose';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Car';
import CarService from '../../../services/Car';
import { carMock, carMockUpdate, carMockUpdateId, carMockWithId } from '../../mock/carMock';
import { ZodError } from 'zod';

describe('Testando o Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

before(async () => {
  sinon.stub(Model, 'create').resolves(carMockWithId);
  sinon.stub(Model, 'find').resolves([carMockWithId]);
  sinon.stub(Model, 'findOne')
    .onCall(0).resolves(carMockWithId)
    .onCall(1).resolves(null)
    .onCall(2).resolves(carMockWithId);
  sinon.stub(Model, 'findByIdAndUpdate')
    .onCall(0).resolves(carMockWithId)
    .onCall(1).resolves(null)
    .onCall(2).resolves(carMockWithId);
  sinon.stub(Model, 'findOneAndDelete')
    .onCall(0).resolves(carMockWithId)
    .onCall(1).resolves(null)
    .onCall(2).resolves(carMockWithId);
});

after(()=>{
  sinon.restore();
})

describe('Criando o carro', () => {
  it('Criado com sucesso', async () => {
    const frameCreated = await carService.create(carMock);

    expect(frameCreated).to.be.deep.equal(carMockWithId);
});

it('Falha na criação', async () => {
  try {
    await carService.create({} as any);
  } catch (error) {
    expect(error).to.be.instanceOf(ZodError);
  }
});
});

describe('Listando todos os carros', () => {
  it('Listado com sucesso', async () => {
    const frameCreated = await carService.read();

    expect(frameCreated).to.be.deep.equal([carMockWithId]);
});

});

describe('Listando um carro pelo id', () => {
  it('Listando com sucesso', async () => {
    const frameCreated = await carService.readOne(carMockWithId._id);

    expect(frameCreated).to.be.deep.equal(carMockWithId);
  });

  it('_id não encontrado', async () => {
    try {
      await carService.readOne(carMockWithId._id);
    } catch (error: any) {
      expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);
    }
  });
});

describe('Alterando carro pelo id', () => {
  it('Alterado com sucesso', async () => {
    const result = await carService.update(carMockWithId._id, carMock);
    expect(result).to.be.deep.equal(carMockWithId);
  });

  it('_id não encontrado', async () => {
    try {
      await carService.update('123ERRADO', carMockUpdate);
    } catch (error: any) {
      expect(error.message).to.be.deep.equal(ErrorTypes.InvalidMongoId);
    }
  });
});

describe('Deletando o carro pelo id', () => {
  it('Deletado com sucesso', async () => {
    const result = await carService.delete('4edd40c86762e0fb12000003');
    expect(result).to.be.deep.equal(carMockWithId);
  });
  it('_id não encontrado', async () => {
    try {
      await carService.update('123ERRADO', carMockUpdate);
    } catch (error: any) {
      expect(error.message).to.be.deep.equal(ErrorTypes.InvalidMongoId);
    }
  });
});

});