import { useEffect, useState } from "react"

export const useTicTacToe = () => {
    const [currentPlayer, setCurrentPlayer] = useState<boolean>(true);
    const [ticTacToe, setTicTacToe] = useState<boolean[]>(Array(9).fill(undefined));
    const [winner, setWinner] = useState<number>(0);
    
    useEffect(()=>{
        // 1RA Validation
        if(ticTacToe[0] && ticTacToe[3] && ticTacToe[6]){
            // console.log('match 11')
            setWinner(1)
        }else if(ticTacToe[0]!==undefined && ticTacToe[3]!==undefined && ticTacToe[6]!==undefined){
            if(!ticTacToe[0] && !ticTacToe[3] && !ticTacToe[6]){
                // console.log('match 12')
                setWinner(2)
        }}
        // 2DA Validation
        if(ticTacToe[1] && ticTacToe[4] && ticTacToe[7]){
            // console.log('match 21')
            setWinner(1)
        }else if(ticTacToe[1]!==undefined && ticTacToe[4]!==undefined && ticTacToe[7]!==undefined){
            if(!ticTacToe[1] && !ticTacToe[4] && !ticTacToe[7]){
                // console.log('match 22')
                setWinner(2)
        }}
        // 3RA Validation
        if(ticTacToe[2] && ticTacToe[5] && ticTacToe[8]){
            // console.log('match 31')
            setWinner(1)
        }else if(ticTacToe[2]!==undefined && ticTacToe[5]!==undefined && ticTacToe[8]!==undefined){
            if(!ticTacToe[2] && !ticTacToe[5] && !ticTacToe[8]){
                // console.log('match 32')
                setWinner(2)
        }}
        // 4TA Validation
        if(ticTacToe[0] && ticTacToe[1] && ticTacToe[2]){
            // console.log('match 41')
            setWinner(1)
        }else if(ticTacToe[0]!==undefined && ticTacToe[1]!==undefined && ticTacToe[2]!==undefined){
            if(!ticTacToe[0] && !ticTacToe[1] && !ticTacToe[2]){
                // console.log('match 42')
                setWinner(2)
        }}
        // 5TA Validation
        if(ticTacToe[3] && ticTacToe[4] && ticTacToe[5]){
            // console.log('match 51')
            setWinner(1)
        }else if(ticTacToe[3]!==undefined && ticTacToe[4]!==undefined && ticTacToe[5]!==undefined){
            if(!ticTacToe[3] && !ticTacToe[4] && !ticTacToe[5]){
                // console.log('match 52')
                setWinner(2)
        }}
        // 6TA Validation
        if(ticTacToe[5] && ticTacToe[7] && ticTacToe[8]){
            // console.log('match 61')
            setWinner(1)
        }else if(ticTacToe[5]!==undefined && ticTacToe[7]!==undefined && ticTacToe[8]!==undefined){
            if(!ticTacToe[5] && !ticTacToe[7] && !ticTacToe[8]){
                // console.log('match 62')
                setWinner(2)
        }}
        // 7MA Validation
        if(ticTacToe[0] && ticTacToe[4] && ticTacToe[8]){
            // console.log('match 71')
            setWinner(1)
        }else if(ticTacToe[0]!==undefined && ticTacToe[4]!==undefined && ticTacToe[8]!==undefined){
            if(!ticTacToe[0] && !ticTacToe[4] && !ticTacToe[8]){
                // console.log('match 72')
                setWinner(2)
        }}
        // 8BA Validation
        if(ticTacToe[6] && ticTacToe[4] && ticTacToe[2]){
            // console.log('match 81')
            setWinner(1)
        }else if(ticTacToe[6]!==undefined && ticTacToe[4]!==undefined && ticTacToe[2]!==undefined){
            if(!ticTacToe[6] && !ticTacToe[4] && !ticTacToe[2]){
                // console.log('match 82')
                setWinner(2)
        }}
    },[ticTacToe])
    
    return{
        currentPlayer,
        setCurrentPlayer,
        ticTacToe,
        setTicTacToe,
        winner,
        setWinner,
    }
}
    // MATCHES
    // 0 3 6 v
    // 1 4 7 v
    // 2 5 8 v
    // 0 1 2 h
    // 3 4 5 h
    // 5 7 8 h
    // 0 4 8 d
    // 6 4 2 d