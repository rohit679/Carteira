import educationModel from "../model";

const educationServices = {};

educationServices.getAllEducationDetails = async (data) =>
  await educationModel.find({ ...data });

educationServices.getAnEducationDetail = async (id) =>
  await educationModel.findById(id);

educationServices.addEducationDetail = async ({
  title,
  degree,
  tenure,
  grade,
  description,
}) =>
  await educationModel.create({ title, degree, tenure, grade, description });

educationServices.updateEducationDetail = async ({ id, data }) =>
  await educationModel.findByIdAndUpdate(id, data);

educationServices.deleteAnEducationDetail = async (id) =>
  await educationModel.findByIdAndDelete(id);

export default educationServices;
