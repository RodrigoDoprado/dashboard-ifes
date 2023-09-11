import { Product } from "../interface/InterfaceProduct"

function Table({title,category } : Product){
    return(
        <>
          <tr>
            <th scope="row">1</th>
            <td>{title}</td>
            <td>{category}</td>
            <td>@mdo</td>
          </tr>
        </>  
    )
}
export default Table