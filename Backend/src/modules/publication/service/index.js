import publicationModel from "../model";

const publicationServices = {};

publicationServices.getAllPublications = async () => await publicationModel.find({});

publicationServices.getAPublication = async (id) => await publicationModel.findById(id);

publicationServices.setPublication = async (data) => await publicationModel.create(data);

publicationServices.updatePublication = async ({ id, data }) =>
  await publicationModel.findByIdAndUpdate(id, data);

publicationServices.deletePublication = async (id) =>
  await publicationModel.findByIdAndDelete(id);

export default publicationServices;