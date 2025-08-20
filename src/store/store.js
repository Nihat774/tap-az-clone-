import { create } from "zustand";  

const useStore = create((set) => ({
  store: [],
  AddFavorite: (item) => set((state) => ({ store: [...state.store, item] })),
  Remove:(item)=>set((state)=>({store:state.store.filter((i)=>i != item)}))
}));

export default useStore;
