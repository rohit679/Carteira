import experienceModel from "../model";

const experienceServices = {};

experienceServices.getAllExperiences = async (query) =>
  await experienceModel.find({ ...query });

experienceServices.getAnExperience = async (id) =>
  await experienceModel.findById(id);

experienceServices.addExperience = async ({ company, designation, tenure, description }) =>
  await experienceModel.create({ company, designation, tenure, description });

experienceServices.updateExperience = async ({ id, data }) =>
  await experienceModel.findByIdAndUpdate(id, data);

experienceServices.deleteExperience = async (id) =>
  await experienceModel.findByIdAndDelete(id);

export default experienceServices;
