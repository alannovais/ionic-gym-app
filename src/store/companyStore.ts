import { createSlice } from "@reduxjs/toolkit";
import { ICompany } from "@/interfaces";
import { CompanyService } from "@/services/CompanyService";

interface store {
    data: ICompany;
    loading: boolean;
    error: string | null;
}

const initialState: store = {
    data: {} as ICompany,
    loading: false,
    error: null,
}

const CompanySlice = createSlice({
    name: 'company',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
         .addCase(CompanyService.get.pending, (state) => {
                state.loading = true;
            })
         .addCase(CompanyService.get.fulfilled, (state, action) => {
                state.data = action.payload;
                state.loading = false;
            })
         .addCase(CompanyService.get.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || null;
            });
    }
})

export default CompanySlice.reducer;