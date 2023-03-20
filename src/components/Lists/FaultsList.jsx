const FaultsList = ({fault}) => {
    return(
        <table>
            <tbody>
            <tr>
                <td className="tabledata first-item">{fault.level}</td>
                <td className="tabledata first-item">{fault.msg}</td>
                <td className="tabledata last-item">{fault.status}</td>
                <td className="tabledata last-item">{fault.datetime}</td>
            </tr>
            </tbody>
        </table>
        
    );
}

export default FaultsList;