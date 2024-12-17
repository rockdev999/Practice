import data from '../dummydata (2).json'
import { useMemo, useState } from 'react'
import { Table } from '../components/boardversion1/Table'
import '../components/boardversion1/board.css'

export const BoardVersion1 = () => {
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
            <input 
                type="text"
                value={inputFilter}
                onChange={(event)=>{setInputFilter(event.target.value)}} 
            />
            <Table data={filterData}/>
        </div>
    )
}