import {useState} from 'react';


export type SetCount=ReturnType<typeof setCountAC>
export type SetMin=ReturnType<typeof setMinAC>
export type SetMAx=ReturnType<typeof setMaxAC>
export type SetDisabledStatus=ReturnType<typeof setDisabledStatusAC>
export type SetIncorrectMax=ReturnType<typeof setIncorrectMaxAC>
export type SetIncorrectMin=ReturnType<typeof setIncorrectMinAC>

export type ActionVariant1Type=
    SetCount|
    SetMin|
    SetMAx|
    SetDisabledStatus|
    SetIncorrectMax|
    SetIncorrectMin

export type StateType={
    count:number
    min:number
    max:number
    disabledStatus:boolean
    incorrectMax:boolean
    incorrectMin:boolean
}

const initialState={
    count:0,
    min:0,
    max:5,
    disabledStatus:true,
    incorrectMax:false,
    incorrectMin:false
}



export const variant1Reducer=(state:StateType=initialState, action:ActionVariant1Type):StateType=>{
    switch (action.type){
        case 'SET-COUNT':

            return {...state,count:action.count}
        case 'SET-MIN':

            return {...state,min:action.count}
        case 'SET-MAX':
            return {...state,max:action.count}
        case 'SET-DISABLE-STATUS':
            return {...state,disabledStatus:action.status}
        case 'SET-INCORRECT-MAX':
            return {...state,incorrectMax:action.max}
        case 'SET-INCORRECT-MIN':
            return {...state,incorrectMin:action.min}
        default:
            return state
    }
}




export const setCountAC=(count:number)=>{
    return {
        type:'SET-COUNT',count
    }as const
}
export const setMinAC=(count:number)=>{
    return {
        type:'SET-MIN',count
    }as const
}
export const setMaxAC=(count:number)=>{
    return {
        type:'SET-MAX',count
    }as const
}
export const setDisabledStatusAC=(status:boolean)=>{
    return {
        type:'SET-DISABLE-STATUS',status
    }as const
}
export const setIncorrectMaxAC=(max:boolean)=>{
    return {
        type:'SET-INCORRECT-MAX',max
    }as const
}
export const setIncorrectMinAC=(min:boolean)=>{
    return {
        type:'SET-INCORRECT-MIN',min
    }as const
}


