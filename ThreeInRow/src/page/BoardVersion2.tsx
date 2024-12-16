import React, { useMemo, useState } from 'react'
import { Table1 } from '../components/boardversion2/Table';
import data from '../dummydata (2).json'

export const BoardVersion2:React.FC = () => {
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
                <h1>Version 2</h1>
                <input 
                    type="text"
                    value={inputFilter}
                    onChange={(event)=>{setInputFilter(event.target.value)}} 
                />
            </div>
            <Table1 data={filterData}/>
        </div>
    )
}