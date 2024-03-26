import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@/interfaces';

interface UserStore {
  data: IUser;
  loading: boolean;
  error: string | null;
}

const initialState: UserStore = {
  data: {
    id: 1,
    name: 'Alan Novais',
    email: '',
    role: '',
    token: '',
    company: 1,
  } as IUser,
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
