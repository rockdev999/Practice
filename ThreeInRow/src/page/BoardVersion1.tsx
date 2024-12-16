import React, { useMemo, useState } from 'react'
import '../components/boardversion1/board.css'
import { Table } from '../components/boardversion1/Table'
import data from '../dummydata (2).json'

export const BoardVersion1:React.FC = () => {
    const [inputFilter, setInputFilter] = useState<string>('');

    const filterData = useMemo(()=>{
        if(inputFilter===''){
            return data;
        }else {
            const result = data.filter( (user) => user.name.toLowerCase().includes(inputFilter.toLowerCase()))
            return result
        }
    },[inputFilter])

    return(
        <div className='board'>
            <div>
                <input 
                    type="text"
                    value={inputFilter}
                    onChange={(event)=>{setInputFilter(event.target.value)}} 
                />
            </div>
            <Table data={filterData}/>
        </div>
    )
}