const ChComponentsList = ({comp}) => {
    return(
        <table>
            <tbody>
            <tr>
                <td className="tabledata">{comp.component}</td>
                <td className="tabledata">{comp.date}</td>
            </tr>
            </tbody>
        </table>
        
    );
}

export default ChComponentsList;