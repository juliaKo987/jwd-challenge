import MaintenanceListItem from "./ListItems/MaintenanceListItem";


//TODO: place codeblock for checking list length and filling list-data
// into a function writeListItem()
const MaintenanceList = ({maintenanceData}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className='first-item'>Art</th>
                    <th>Datum</th>
                </tr>
            </thead>
            
            {
                maintenanceData?.length > 0 
                    ? (
                        <tbody>
                            {
                                maintenanceData.map((maintenance) => (
                                    <MaintenanceListItem key={maintenance.id} maintenance={maintenance} />
                                ))
                            }
                        </tbody>
                    ) : (
                        <tbody>
                            <p>No maintenances.</p>
                        </tbody>
                    )
            }
        </table>
    );
}

export default MaintenanceList;