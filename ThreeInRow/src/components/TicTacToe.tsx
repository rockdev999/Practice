import { useEffect } from "react";
import { useTicTacToe } from "../custom/useTicTacToe"

enum Winner{
    PlayerOne=1,
    PlayerTwo,
    Draw,
}

export const TicTacToe = () => {
    const {currentPlayer, setCurrentPlayer,ticTacToe, setTicTacToe,winner, setWinner} = useTicTacToe();
    const checkBox = (position:number, player:boolean)=>{
        if(winner===0){
            let copyTicTacToe = [...ticTacToe];
            if(ticTacToe[position] === undefined){
                copyTicTacToe[position] = player;
                setTicTacToe(copyTicTacToe);
                setCurrentPlayer(!currentPlayer)
            }
        }
    }
    const chooseWinner = ()=>{
        if(winner===Winner.Draw)
            return 'Draw'
        if(winner===Winner.PlayerOne)
            return 'Winner Player One'
        if(winner==Winner.PlayerTwo)
            return 'Winner Player Two'
        return '.....'
    }
    useEffect(()=>{
        if(ticTacToe.every((value)=>value!==undefined)){
            setWinner(3)
        }
    },[ticTacToe])
    return(
        <>
            <div>
                <div className='player_turn'>Player {currentPlayer? 'One':'Two'}</div>
                <div>
                    <button 
                        className='btn' 
                        onClick={()=>{checkBox(0, currentPlayer)}}
                    >
                        {ticTacToe[0] !== undefined ? (ticTacToe[0] ? 'x' : 'o') : ''}
                    </button>
                    <button 
                        className='btn_medium_x btn' 
                        onClick={()=>{checkBox(1, currentPlayer)}}
                    >
                        {ticTacToe[1] !== undefined ? (ticTacToe[1] ? 'x' : 'o') : ''}
                    </button>
                    <button 
                        className='btn' 
                        onClick={()=>{checkBox(2, currentPlayer)}}
                    >
                        {ticTacToe[2] !== undefined ? (ticTacToe[2] ? 'x' : 'o') : ''}
                    </button>
                </div>
                <div>
                    <button 
                        className='btn_medium_y btn' 
                        onClick={()=>{checkBox(3, currentPlayer)}}
                    >
                        {ticTacToe[3] !== undefined ? (ticTacToe[3] ? 'x' : 'o') : ''}
                    </button>
                    <button 
                        className='btn_central btn' 
                        onClick={()=>{checkBox(4, currentPlayer)}}
                    >
                        {ticTacToe[4] !== undefined ? (ticTacToe[4] ? 'x' : 'o') : ''}
                    </button>
                    <button 
                        className='btn_medium_y btn' 
                        onClick={()=>{checkBox(5, currentPlayer)}}
                    >
                        {ticTacToe[5] !== undefined ? (ticTacToe[5] ? 'x' : 'o') : ''}
                    </button>
                </div>
                <div>
                    <button 
                        className='btn' 
                        onClick={()=>{checkBox(6, currentPlayer)}}
                    >
                        {ticTacToe[6] !== undefined ? (ticTacToe[6] ? 'x' : 'o') : ''}
                    </button>
                    <button 
                        className='btn_medium_x btn' 
                        onClick={()=>{checkBox(7, currentPlayer)}}
                    >
                        {ticTacToe[7] !== undefined ? (ticTacToe[7] ? 'x' : 'o') : ''}
                    </button>
                    <button 
                        className='btn' 
                        onClick={()=>{checkBox(8, currentPlayer)}}
                    >
                        {ticTacToe[8] !== undefined ? (ticTacToe[8] ? 'x' : 'o') : ''}
                    </button>
                </div>
                {/* <div className='result'>Result: {winner !== 0 ? (winner ? 'Winner Player One' : 'Winner Player Two') : 'Draw'}</div> */}
                <div className='result'>Result: {chooseWinner()}</div>
            </div>
        </>
    )
}