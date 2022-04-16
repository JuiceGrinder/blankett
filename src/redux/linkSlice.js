import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
//added to see current state is logging currently not being used
import { current } from '@reduxjs/toolkit'

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
        state[action.payload.header].links.push({name: action.payload.name, url: action.payload.url});
      },
    },
    extraReducers: {
      [fetchGroupListAsync.fulfilled]: (state, action) => {
        return action.payload.groupList;
      }
    },
  })
  
  export const {addGroup, addLink } = linkSlice.actions 

  export default linkSlice.reducer