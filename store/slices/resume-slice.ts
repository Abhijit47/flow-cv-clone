// ts-worksheet
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';

export const initialResumeState = {
  profile: {},
  workExperience: [],
  educations: [],
  projects: [],
  skills: {},
  custom: {},
};

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: initialResumeState,
  reducers: {
    changeProfile: () => {},
    changeWorkExperience: () => {},
    changeEducations: () => {},
    changeProjects: () => {},
    changeSkills: () => {},
    changeCustom: () => {},
    addSectionInForm: () => {},
    moveSectionInForm: () => {},
    removeSectionInForm: () => {},
    setResume: () => {},
  },
});

export const {
  changeProfile,
  changeWorkExperience,
  changeEducations,
  changeProjects,
  changeSkills,
  changeCustom,
  addSectionInForm,
  moveSectionInForm,
  removeSectionInForm,
  setResume,
} = resumeSlice.actions;

export const selectResume = (state: RootState) => state.resume;

export default resumeSlice.reducer;
