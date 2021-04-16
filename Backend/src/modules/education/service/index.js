import educationModel from '../model';

const educationServices = {}

educationServices.getAllEducationDetails = async () => await educationModel.find({});

educationServices.getAnEducationDetail = async (id) => await educationModel.findById(id);

educationServices.setEducationDetail = async (data) => await educationModel.create(data);

educationServices.updateEducationDetail = async ({id, data}) => await educationModel.findByIdAndUpdate(id, data);

educationServices.deleteAnEducationDetail = async (id) => await educationModel.findByIdAndDelete(id);

export default educationServices;