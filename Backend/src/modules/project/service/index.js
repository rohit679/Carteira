import projectModel from "../model";

const projectServices = {};

projectServices.getAllProjects = async (query) =>
  await projectModel.find({ ...query });

projectServices.getAProject = async (id) => await projectModel.findById(id);

projectServices.addProject = async ({
  title,
  tenure,
  type,
  project_url,
  description,
}) =>
  await projectModel.create({ title, tenure, type, project_url, description });

projectServices.updateProject = async ({ id, data }) =>
  await projectModel.findByIdAndUpdate(id, data);

projectServices.deleteProject = async (id) =>
  await projectModel.findByIdAndDelete(id);

export default projectServices;
