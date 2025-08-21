import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getProblems } from '../../app/services/user/userAPI'; 

export interface TestCaseResult {
  input: string;
  expected: string;
  actual: string;
  passed: boolean;
  error?: string;
}

export interface Problem {
    _id: string;
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
  testCaseResults: Record<number, TestCaseResult[]>;
}

const initialState: ProblemState = {
  problems: [],
  loading: false,
  error: null,
  testCaseResults: {},
};


export const fetchProblems = createAsyncThunk(
  '/problems',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProblems();
      return response.data; 
    } catch (err: unknown) {
      if (typeof err === 'object' && err !== null && 'response' in err) {
        const e = err as { response?: { data?: { message?: string } } };
        return rejectWithValue(e.response?.data?.message || 'Failed to fetch problems');
      }
      return rejectWithValue('Failed to fetch problems');
    }
  }
);

const problemSlice = createSlice({
  name: 'problems',
  initialState,
  reducers: {
    setTestCaseResults: (state, action: PayloadAction<{ problemId: number; results: TestCaseResult[] }>) => {
      const { problemId, results } = action.payload;
      if (!state.testCaseResults) {
        state.testCaseResults = {}; // ✅ make sure it exists
      }
      state.testCaseResults[problemId] = results;
    },
  },
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

export const { setTestCaseResults } = problemSlice.actions;
export default problemSlice.reducer;
