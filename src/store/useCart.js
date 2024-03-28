import {create} from 'zustand'

export const useCart = create((set)=>({
	itemList: [],
	addItem:(item) => set((state)=> ({itemList: [...state.itemList, item]})),
	removeItem:(id) => set((state)=> (state.itemList.filter(item => item.id !==id)))
}))