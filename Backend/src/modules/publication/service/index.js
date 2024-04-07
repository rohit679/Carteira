import publicationModel from "../model";

const publicationServices = {};

publicationServices.getAllPublications = async (query) =>
  await publicationModel.find({ ...query });

publicationServices.getAPublication = async (id) =>
  await publicationModel.findById(id);

publicationServices.addPublication = async ({
  title,
  tenure,
  published_for,
  project_url,
  description,
}) =>
  await publicationModel.create({
    title,
    tenure,
    published_for,
    project_url: project_url ? project_url : "",
    description: description ? description : "",
  });

publicationServices.updatePublication = async ({ id, data }) =>
  await publicationModel.findByIdAndUpdate(id, data);

publicationServices.deletePublication = async (id) =>
  await publicationModel.findByIdAndDelete(id);

export default publicationServices;
