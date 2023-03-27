import { createSlice } from '@reduxjs/toolkit';
import { getBeerData } from '@store/actions/beer-actions';

interface beerDataInterface {
    image_url: string;
    name: string;
    tagline: string;
    description: string;
}

interface State {
    beerData: beerDataInterface[];
    isLoading: boolean;
    currentPage: number;
    searchText: string;
}

const initialState: State = {
    beerData: [],
    isLoading: true,
    currentPage: 1,
    searchText: ''
};

const beerDataSlice = createSlice({
    name: 'beer slice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBeerData.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(getBeerData.fulfilled, (state, action) => {
            if (action.meta.arg.currentPage === 1) {
                state.beerData = action.payload;
            } else {
                state.beerData.push(...action.payload); // appending new data to existing beerData
            }
            state.isLoading = false;
        });
        builder.addCase(getBeerData.rejected, (state, action) => {
            state.beerData = [];
            state.isLoading = false;
        });
    },
});

export default beerDataSlice.reducer;
