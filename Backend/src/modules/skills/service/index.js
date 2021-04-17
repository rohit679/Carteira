import skillModel from '../model/index';

const skillServices = {}

skillServices.getAllSkills = async () => await skillModel.find({});

skillServices.getASkill = async (id) => await skillModel.findById(id);

skillServices.setSkill = async ({skill_name, skill_percent}) => await skillModel.create({skill_name, skill_percent});

skillServices.updateSkillName = async ({skill_id, skill_name}) => await skillModel.findByIdAndUpdate(skill_id, {skill_name : skill_name});

skillServices.updateSkillPercent = async ({skill_id, skill_percent}) => await skillModel.findByIdAndUpdate(skill_id, {skill_percent : skill_percent});

skillServices.deleteSkill = async (id) => await skillModel.findByIdAndDelete(id);

export default skillServices;