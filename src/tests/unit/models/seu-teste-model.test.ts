import * as sinon from 'sinon';
import chai from 'chai';
const { expect } = chai;
import { Model } from 'mongoose';
import { ErrorTypes } from '../../../errors/catalog';
import CarModel from '../../../models/Car';
import { carMock, carMockUpdate, carMockUpdateId, carMockWithId } from '../../mock/carMock';

describe('Testando o Car Model', () => {
  const carModel = new CarModel();

  before(async () => {
    sinon.stub(Model, 'create').resolves(carMockWithId);
    sinon.stub(Model, 'find').resolves([carMockWithId]);
		sinon.stub(Model, 'findOne').resolves(carMockWithId);
		sinon.stub(Model, 'findByIdAndUpdate').resolves(carMockUpdateId);
    sinon.stub(Model, 'findOneAndDelete').resolves(carMockUpdateId);
  });

  after(()=>{
    sinon.restore();
  })

  describe('Criando o carro', () => {
		it('Criado com sucesso', async () => {
			const result = await carModel.create(carMock);
			expect(result).to.be.deep.equal(carMockWithId);
		});
	});

  describe('Listando todos os carros', () => {
		it('Criado com sucesso', async () => {
			const result = await carModel.read();
			expect(result).to.be.deep.equal([carMockWithId]);
		});
	});

  describe('Listando um carro, de acordo com o id', () => {
		it('Listado com sucesso', async () => {
			const result = await carModel.readOne('4edd40c86762e0fb12000003');
			expect(result).to.be.deep.equal(carMockWithId);
		});

		it('_id não encontrado', async () => {
			try {
				await carModel.readOne('123ERRADO');
			} catch (error: any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

  describe('Alterando o carro', () => {
		it('Alterado com sucesso', async () => {
			const result = await carModel.update('4edd40c86762e0fb12000003', carMockUpdate);
			expect(result).to.be.deep.equal(carMockUpdateId);
		});
	
		it('_id not found to change', async () => {
			try {
				await carModel.update('123ERRADO', carMockUpdate);
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});

  describe('Deletando o carro pelo id', () => {
		it('DEeletado com sucesso', async () => {
			const result = await carModel.delete('4edd40c86762e0fb12000003');
			expect(result).to.be.deep.equal(carMockUpdateId);
		});

		it('_id não encontrado', async () => {
			try {
				await carModel.delete('123ERRADO');
			} catch (error:any) {
				expect(error.message).to.be.eq(ErrorTypes.InvalidMongoId);
			}
		});
	});
});