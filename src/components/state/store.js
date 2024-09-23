import { create } from "zustand";

const store = create((set)=>({
    currency :"usd",
    setCurrency : (newCurrecncy) => set((state)=>{
        return{
            ...state,
            currency:newCurrecncy
        }
    })
}))

export default store; 