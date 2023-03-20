import React from "react";
import placeholderImg from '../../assets/images/placeholder.PNG';
import MaintenanceList from "../../components/Lists/MaintenanceList";
import { userData, deviceData, maintenanceData } from "../../assets/constants/DeviceData";

//TODO: hide Buttons for Reports when Date has not yet passed e.g. 17.05.2023
const MainPage = () => {

    const device = deviceData.find(device => device.sid === "202987654");
    const user = userData.find(user => user.id === 1);

    return (
        <main>
            <div className="top">
                <div className="data">
                    <h1>{device.name}</h1>
                    <h2>{device.sid}, {device.deviceType}, {device.year}</h2>
                    <p>User: {user.name}</p>
                </div>
                <div className="devicePicture">
                    <img src={placeholderImg} alt="device" />
                </div>
            </div>
            <div className='maintenances'>
                <h2>Wartungen</h2>
                <hr />
                <MaintenanceList maintenanceData={maintenanceData} />
            </div>
        </main>
    );
}

export default MainPage;