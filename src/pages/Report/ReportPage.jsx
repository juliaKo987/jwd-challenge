import { technicalFaultsData, changedComponentData } from "../../assets/constants/ReportData";
import { maintenanceData, deviceData } from "../../assets/constants/DeviceData";
import TemperatureChart from "../../components/Charts/TemperatureChart";
import FaultsList from "../../components/Lists/FaultsList";
import ChComponentsList from "../../components/Lists/ChComponentsList";


//TODO: get the id from URL e.g. useParams()
// functions for Lists
const ReportPage = () => {
    const id = 2;
    const maintenance = maintenanceData.find(maint => maint.id === id);
    const device = deviceData.find(device => device.sid === maintenance.device_sid);
    const faultsList = technicalFaultsData.filter(fault => fault.report_id === id);
    const chComponentsList = changedComponentData.filter(part => part.report_id === id);

    return (
        <main>
            <div className="rTop">
                <div className="topLine">
                    <h1>Wartungsbericht</h1>
                    <h2>{maintenance.type}</h2>
                </div>
                <div className="top-report">
                    <div className='top-data'>
                        <h2>{device.name}</h2>
                        <p>{maintenance.date}</p>
                    </div>
                    <div className="deviceData">
                        <p>{device.sid}, {device.deviceType}, {device.year}</p>
                    </div>
                </div>
            </div>
            <div className="tempChart">
                <h2>Messwerte</h2>
                <hr />
                <TemperatureChart />
            </div>
            <div className="techFaults">
                <h2>Störungen seit letzter Wartung</h2>
                <hr />
                {
                faultsList?.length > 0
                    ? (
                        <div className='faultsList'>
                            {
                                faultsList.map((fault) => (
                                    <FaultsList key={fault.id} fault={fault} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className='empty'>
                            <p>No technical faults.</p>
                        </div>
                    )
                }
            </div>
            <div className="changedParts">
                <h2>Getauschte Komponenten</h2>
                <hr />
                {
                chComponentsList?.length > 0 
                    ? (
                        <div className='exchangedPartsList'>
                            {
                                chComponentsList.map((chPart) => (
                                    <ChComponentsList key={chPart.id} comp={chPart} />
                                ))
                            }
                        </div>
                    ) : (
                        <div className='empty'>
                            <p>No exchanged components.</p>
                        </div>
                    )
                }
            </div>
        </main>
    );

}

export default ReportPage;