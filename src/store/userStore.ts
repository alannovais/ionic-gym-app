import { createSlice } from '@reduxjs/toolkit';

interface UserStore {
  data: {
    id: number;
    name: string;
    email: string;
    password: string;
    role: string;
    token: string;
  };
  loading: boolean;
  error: string | null;
}

const initialState: UserStore = {
  data: {
    id: 0,
    name: 'Alan',
    email: '',
    password: '',
    role: '',
    token: '',
  },
  loading: false,
  error: null,
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  selectors: {
    getUser: (state) => state.data,
  },
});

export default UserSlice.reducer;
