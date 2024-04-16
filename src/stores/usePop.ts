import { create } from "zustand";

type PopState = {
    pop: boolean;
    togglePop: () => void
}


export const usePop = create<PopState>((set) => ({
    pop: false,
    togglePop: () => set((state) => ({ pop: !state.pop }))
}))