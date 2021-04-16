import experienceModel from '../model';

const experienceServices = {}

experienceServices.getExperience = async (id) => await experienceModel.findById(id);

experienceServices.setExperience = async (data) => await experienceModel.create(data);

experienceServices.updateExperience = async ({id, data}) => await experienceModel.findByIdAndUpdate(id, data);

experienceServices.deleteExperience = async (id) => await experienceModel.findByIdAndDelete(id);

export default experienceServices;