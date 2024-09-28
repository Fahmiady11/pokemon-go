import axios from "axios";
import { create } from "zustand";

const useMainAPIStore = create((set) => ({
    mainApi: [],
    fetchMainApi: async () => {
        try {
            await axios.get("https://pokeapi.co/api/v2/pokemon/").then(res => set({ mainApi: res?.data?.results }))
        } catch (err) {
            console.log(err)
        }
    }
}));

const useViewItemStore = create((set) => ({
    dataView: [],
    fetchDataView: async (url) => {
        try {
            const dataNew = (await axios.get(url)).data;
            set((state) => ({ dataView: [...state.dataView, dataNew] }));
        } catch (err) {
            console.log(err)
        }
    }
}))

const useSearchStore = create((set) => ({
    dataSearch: [],
    fetchDataSearch: (state) => set({ dataSearch: state }),
}));

const useClickItemStore = create((set) => ({
    dataClick: [],
    fetchDataClick: async (index) => {
        try {
            await axios.get("https://pokeapi.co/api/v2/pokemon/" + index).then(res => set({ dataClick: res?.data }));
        } catch (err) {
            console.log(err)
        }
    }
}));

const useButtonStore = create((set) => ({
    dataButton: false,
    fetchDataButton: (state) => set({ dataButton: state }),
}));


export { useMainAPIStore, useSearchStore, useClickItemStore, useViewItemStore, useButtonStore };