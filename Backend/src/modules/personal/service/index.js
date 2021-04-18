import personalInfoModel from '../model';

const personalInfoServices = {}

personalInfoServices.getAllpersonalInfos = async () => await personalInfoModel.find({});

personalInfoServices.getAnpersonalInfo = async (id) => await personalInfoModel.findById(id);

personalInfoServices.setpersonalInfo = async (data) => await personalInfoModel.create(data);

personalInfoServices.updatepersonalInfo = async ({id, data}) => await personalInfoModel.findByIdAndUpdate(id, data);

personalInfoServices.deletepersonalInfo = async (id) => await personalInfoModel.findByIdAndDelete(id);

export default personalInfoServices;