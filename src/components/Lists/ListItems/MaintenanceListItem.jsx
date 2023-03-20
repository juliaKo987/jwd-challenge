import ReportBtn from '../../Buttons/ReportBtn';
import { Link } from 'react-router-dom';


const MaintenanceListItem = ({maintenance}) => {
    return (
        <tr>
            <td className='tabledata first-item'>{maintenance.type}</td>
            <td className='tabledata'>{maintenance.date}</td>
            <td className='tabledata last-item'>
            <Link to='/report'>
                <ReportBtn />
            </Link>
            </td>
        </tr>
    )
}

export default MaintenanceListItem;