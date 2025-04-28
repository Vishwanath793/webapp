import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LandingPageState {
  selectedTab: number;
  isSaveCompleted: boolean | null;
  isLoading: boolean;
  hasErrors: boolean | null;
  saveActionError: string;
  isLoggedInUserTeamLead: boolean;
  isLocked: boolean | null;
}

const initialState: LandingPageState = {
  selectedTab: 0,
  isSaveCompleted: null,
  isLoading: false,
  hasErrors: false,
  saveActionError: "",
  isLoggedInUserTeamLead: false,
  isLocked: null,
};

const landingPageSlice = createSlice({
  name: "landingPage",
  initialState,
  reducers: {
    setQecgSaveFailure(state, action: PayloadAction<string>) {
      state.isSaveCompleted = false;
      state.isLoading = false;
      state.hasErrors = true;
      state.saveActionError = action.payload;
    },
    getQecgListData: (state, action: PayloadAction<string>) => {
      state.isSaveCompleted = null;
    },
    setLoggedInUserTeamLead: (state, action: PayloadAction<boolean>) => {
      state.isLoggedInUserTeamLead = action.payload;
    },
    lockQecgForm: (state, action: PayloadAction<any>) => {
      state.isLocked = null;
    },
  },
});

export const {
  setQecgSaveFailure,
  getQecgListData,
  setLoggedInUserTeamLead,
  lockQecgForm,
} = landingPageSlice.actions;

export default landingPageSlice.reducer;
