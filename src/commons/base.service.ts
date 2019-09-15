import {  BadGatewayException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { STATUS_CODES } from 'http';
import { IBaseService } from './IBase.service';

@Injectable()
export class BaseService<T> implements IBaseService<T>{
	constructor(
    private readonly genericRepository: Repository<T>) {}

  create(entity: any): Promise<T>{
	  try {
		return new Promise<T> ((resolve, reject) => {
			this.genericRepository.save(entity)
			.then(created=> resolve(created.id))
			.catch(err => reject(err))
			})
		}
		catch(error) {
			throw new BadGatewayException(error);
		}
  }

  getAll(): Promise<T[]> {
	  try {Repository
		return <Promise<T[]>>this.genericRepository.find();
	  } catch (error) {
		throw new BadGatewayException(error);
	}
  }

  get(id: number): Promise<T> {
	try {
		  
	} catch (error) {
		throw new BadGatewayException(error);
	}
  	return <Promise<T>>this.genericRepository.findOne(id);
  }

  delete(id: number) {
	try {
		this.genericRepository.delete(id)
	} catch (error) {
		throw new BadGatewayException(error);
	}
  }

  update(entity: any): Promise<any>{
	try {
		// This works perfect: TODO: See if ther is some issues when I using it.
		return this.genericRepository.update(entity.id, entity);


		// return new Promise<any> ((resolve, reject) => {
		// 	this.genericRepository.findOne(entity.id)
		// 	.then(responseGet => {
		// 		try {
		// 			if (responseGet == null) reject('Not existing')
		// 			let retrievedEntity: any = responseGet as any;
		// 			this.genericRepository.update(retrievedEntity.id, entity)
		// 			.then(response => resolve(response))
		// 			.catch(err => reject(err))
		// 		}
		// 		catch(e) {
		// 				reject(e)
		// 		}
		// 	})
		// 	.catch(err => reject(err))
		// 	})
	} catch (error) {
		throw new BadGatewayException(error);
	}
  }
}