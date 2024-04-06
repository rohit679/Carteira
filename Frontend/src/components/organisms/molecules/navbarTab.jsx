import Text from "../atoms/Text";
import { Link } from "react-router-dom";

const navbarTab = ({ icon='', iconSize=18, title='', isActive=false, link='' }) => {
  return (
    <Link to={link}>
      <div className={`flex items-center justify-center gap-1 font-medium text-white px-2 py-1 rounded ${isActive && 'border text-[#bcfd49] shadow shadow-[#bcfd49]'} hover:bg-[#ebeae8] hover:text-black`}>
        {icon({size:iconSize})}
        <Text size="sm">{title}</Text>
      </div>
    </Link>
  )
}

export default navbarTab;
