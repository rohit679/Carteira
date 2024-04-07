import skillModel from "../model/index";

const skillServices = {};

skillServices.getAllSkills = async (query) =>
  await skillModel.find({ ...query });

skillServices.getASkill = async (id) => await skillModel.findById(id);

skillServices.addSkill = async ({ title, rating, url }) =>
  await skillModel.create({ title, rating, url: url ? url : "" });

skillServices.updateSkill = async ({ id, data }) =>
  await skillModel.findByIdAndUpdate(id, data);

skillServices.deleteSkill = async (id) =>
  await skillModel.findByIdAndDelete(id);

export default skillServices;
