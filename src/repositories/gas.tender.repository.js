import { gasTenderModel } from "../models/gas.tender.model.js";

export default class GasTenderRepository {
	async getAll() {
		return await gasTenderModel.find();
	}

	async getById(id) {
		return await gasTenderModel.findById(id);
	}

	async create(gasTender) {
		return await gasTenderModel.create(gasTender);
	}

	async update(id, gasTender) {
		return await gasTenderModel.findByIdAndUpdate(id, gasTender);
	}

	async getIdByPropertyId(id) {
		const response = await gasTenderModel.find({ id: id });
		return response[0]._id;
	}

	async delete(id) {
		return await gasTenderModel.findByIdAndDelete(id);
	}
}
