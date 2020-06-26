import React,{useState} from 'react'
import PropTypes from 'prop-types'

const Table = ({data,onClick,winner,currentUser}) => {

    const setIcon = value => {
        if(value === -1) return 'fa fa-ban';

        else{
            return value === 0 ? 'fa fa-circle' : 'fa fa-times';
        }
    }

    console.log(winner,currentUser);
    return (
        <div style={{margin:'auto'}}>
            <h1>TikTakToe</h1>
            <h1>User1: <span className = 'fa fa-circle' style={{fontSize:60}}></span> </h1>
            <h1>User2: <span className = 'fa fa-times' style={{fontSize:60}}></span> </h1>
            <h1>{`User${currentUser+1}'s Turn`}</h1>

            <table className='table table-bordered' style={{width:400,maxWidth:400,maxHeight:400,height:400}}>
                <tbody>
                {data.map((row,index) => (
                        <tr key={index}>
                        {row.map((value,index1) => (
                        <td style={{verticalAlign:'middle',textAlign:'center',boxSizing:'border-box'}} onClick={() => {onClick(index+''+index1)}} key={index1}>
                            <span className = {setIcon(value)} style={{fontSize:60}}></span>
                        </td>
                        ))}
                    </tr>
                ))}
                 </tbody>
            </table>

            {winner !== null && (winner === -1 ? (<h1>Its a draw</h1>): (<h1>{`User ${winner+1} has Won`}</h1>)) }
        </div>
    )
}

Table.propTypes = {

}

export default Table;