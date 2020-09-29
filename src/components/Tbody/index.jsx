import React from 'react';

const Tbody =props=>{
    return(
        <>
            {props.employees.map(employees => (
              <tr key={employees.id}>
                <th scope="row">{employees.id}</th>
                <td>{employees.firstName}</td>
                <td>{employees.lastName}</td>
                <td>{employees.department}</td>
                <td>{employees.departmentId}</td>
              </tr>
            ))}
        </>
    )
}
export default Tbody