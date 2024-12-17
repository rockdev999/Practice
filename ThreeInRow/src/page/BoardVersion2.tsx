import { useState, useMemo } from "react";
import data from '../dummydata (2).json';
import { Table } from "../components/boardversion2/Table";
import { columnsUser } from "../interfaces/Users";
import '../components/boardversion1/board.css';
import { Pagination } from "../components/boardversion2/Pagination";

export const BoardVersion2 = () => {
    // rangos de edades o rangos de balance
    const [inputFilter, setInputFilter] = useState<string>('');
    const [dataQuantity, setDataQuantity] = useState<number>(2);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [ageRangeSince, setAgeRangeSince] = useState<number>(0);
    const [ageRangeUntil, setAgeRangeUntil] = useState<number>(0);

    const filterData = useMemo(() => {
        if (!inputFilter && ageRangeSince === 0 && ageRangeUntil === 0) {
            return data;
        }

        return data.filter((user) => {
            const matchesFilter = user.name
                .toLowerCase()
                .includes(inputFilter.toLowerCase());

            const matchesAgeRange =
                (ageRangeSince === 0 || user.age >= ageRangeSince) &&
                (ageRangeUntil === 0 || user.age <= ageRangeUntil);

            return matchesFilter && matchesAgeRange;
        });
    }, [inputFilter, ageRangeSince, ageRangeUntil]);

    const indexEnd = currentPage * dataQuantity;
    const indexStart = indexEnd - dataQuantity;

    const sliceData = filterData.slice(indexStart, indexEnd);
    const numPages = Math.ceil(filterData.length / dataQuantity);

    return (
        <div className="board">
            <input
                type="text"
                value={inputFilter}
                onChange={(event) => setInputFilter(event.target.value)}
                placeholder="Filter by name"
            />
            <div>
                <input
                    type="number"
                    placeholder="Age from"
                    onChange={(event) => setAgeRangeSince(Number(event.target.value))}
                />
                <input
                    type="number"
                    placeholder="Age to"
                    onChange={(event) => setAgeRangeUntil(Number(event.target.value))}
                />
            </div>
            <Table data={sliceData} columns={columnsUser} />
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                numPages={numPages}
            />
        </div>
    );
};
// 