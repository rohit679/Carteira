import projectModel from '../model';

const projectServices = {}

projectServices.getAllProjects = async () => await projectModel.find({});

projectServices.getAProject = async (id) => await projectModel.findById(id);

projectServices.setProject = async (data) => await projectModel.create(data);

projectServices.updateProject = async ({id, data}) => await projectModel.findByIdAndUpdate(id, data);

projectServices.deleteProject = async (id) => await projectModel.findByIdAndDelete(id);

export default projectServices;