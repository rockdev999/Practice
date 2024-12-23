import { useState, useMemo } from "react";
import data from '../dummydata (2).json';
import { Table } from "../components/boardversion2/Table";
import { columnsUser } from "../interfaces/Users";
import '../components/boardversion1/board.css';
import { Pagination } from "../components/boardversion2/Pagination";
// import SelectFriendsComponent from "../components/boardversion2/ejemplo";
import { MultiCheckSelect } from "../components/boardversion2/MultiCheckSelect2";
// import { CheckboxTree } from "../components/boardversion2/ejemplo";


export const BoardVersion2 = () => {
    // rangos de edades o rangos de balance
    // validar negativos y letras, solo numeros
    const [inputFilter, setInputFilter] = useState<string>('');
    const [dataQuantity, setDataQuantity] = useState<number>(2);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [ageRangeFrom, setAgeRangeFrom] = useState<number>(0);
    const [ageRangeTo, setAgeRangeTo] = useState<number>(0);
    const [balanceRangeFrom, setBalanceRangeFrom] = useState<number>(0);
    const [balanceRangeTo, setBalanceRangeTo] = useState<number>(0);

    // const [userSelected, setUserSelected] = useState<selectList>(); 

    const filterData = useMemo(() => {
        let filteredData = data;
        if (inputFilter) {
            filteredData = filteredData.filter((user) =>
                user.name.toLowerCase().includes(inputFilter.toLowerCase())
            );
        }
        if (ageRangeFrom !== 0) {
            filteredData = filteredData.filter((user) => user.age >= ageRangeFrom);
        }
        if (ageRangeTo !== 0) {
            filteredData = filteredData.filter((user) => user.age <= ageRangeTo);
        }
        if (balanceRangeFrom !== 0) {
            filteredData = filteredData.filter((user) => Number(user.balance.replace('$','').replace(',','')) >= balanceRangeFrom);
        }
        if (balanceRangeTo !== 0) {
            filteredData = filteredData.filter((user) => Number(user.balance.replace('$','').replace(',','')) <= balanceRangeTo);
        }
        return filteredData;
    }, [inputFilter, ageRangeFrom, ageRangeTo, balanceRangeFrom, balanceRangeTo])
    
    const indexEnd = currentPage * dataQuantity;
    const indexStart = indexEnd - dataQuantity;
    
    const sliceData = filterData.slice(indexStart, indexEnd);
    const numPages = Math.ceil(filterData.length / dataQuantity);
    
    // console.log(data[0].friends)
    // console.log(Number(user.balance.replace('$','').replace(',','')))
    return (
        <div className="board">
            <input
                type="text"
                value={inputFilter}
                onChange={(event) => setInputFilter(event.target.value)}
                placeholder="Filter by name"
            />
            <div className="filter">
                <div className="filterRange">
                    <input
                        className="input_age"
                        type="number"
                        placeholder="Age from"
                        onChange={(event) => setAgeRangeFrom(Number(event.target.value))}
                    />
                    <input
                        className="input_age"
                        type="number"
                        placeholder="Age to"
                        onChange={(event) => setAgeRangeTo(Number(event.target.value))}
                    />
                </div>
                <div className="filterRange">
                    <input
                        className="input_balance"
                        type="number"
                        placeholder="Balance from"
                        onChange={(event) => setBalanceRangeFrom(Number(event.target.value))}
                    />
                    <input
                        className="input_balance"
                        type="number"
                        placeholder="Balance to"
                        onChange={(event) => setBalanceRangeTo(Number(event.target.value))}
                    />
                </div>
            </div>
            <Table data={sliceData} columns={columnsUser} />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                numPages={numPages}
            />
            {/* AQUI DEBERIA IR EL MULTICHECK?????*/}
        </div>
    );
};