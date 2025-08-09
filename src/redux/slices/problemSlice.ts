import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProblems } from '../../app/services/user/userAPI'; 

export interface Problem {
    id: number;
    title: string;
    description: string;
    is_premium: number;
    difficulty: string;
    solution_link?: string;
    acceptance_rate?: number;
    frequency?: number;
    url?: string;
    discuss_count?: number;
    accepted?: string;
    submissions?: string;
    companies?: string;
    related_topics?: string;
    likes?: number;
    dislikes?: number;
    rating?: number;
    asked_by_faang?: number;
    similar_questions?: string;
    createdAt?: string; 
    updatedAt?: string; 
  }
  

interface ProblemState {
  problems: Problem[];
  loading: boolean;
  error: string | null;
}

const initialState: ProblemState = {
  problems: [],
  loading: false,
  error: null,
};


export const fetchProblems = createAsyncThunk(
  '/problems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProblems();
      return response.data; 
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch problems');
    }
  }
);

const problemSlice = createSlice({
  name: 'problems',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProblems.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProblems.fulfilled, (state, action: PayloadAction<Problem[]>) => {
        state.loading = false;
        state.problems = action.payload;
      })
      .addCase(fetchProblems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default problemSlice.reducer;
