import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchGroupListAsync= createAsyncThunk(
  'loadGroups/fetchGroupListAsync',
  async () => {
    const response = await fetch('loadGroups')
    if(response.ok){
      const groupList = await response.json();
      return { groupList };
    }
  }
)

export const linkSlice = createSlice({
    name: 'links',
    initialState: [],
    reducers: {
      addGroup: (state, action) => {
        state.value -= 1
      },
      addLink: (state, action) => {
        state.value += action.payload
      },
    },
    extraReducers: {
      [fetchGroupListAsync.fulfilled]: (_, action) => {
        return action.payload.groupList;
      }
    },
  })
  
  export const {addGroup, addLink } = linkSlice.actions 

  export default linkSlice.reducer