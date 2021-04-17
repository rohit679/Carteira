import linkModel from '../model';

const linkServices = {}

linkServices.getAllLinks = async () => await linkModel.find({});

linkServices.getALink = async (id) => await linkModel.findById(id);

linkServices.setLink = async (data) => await linkModel.create(data);

linkServices.updateLink = async ({id, data}) => await linkModel.findByIdAndUpdate(id, data);

linkServices.deleteLink = async (id) => await linkModel.findByIdAndDelete(id);

export default linkServices;