import { configureStore } from "@reduxjs/toolkit";

import servicesSlice from "./slices/servicesSlice";
import ProjectsSlice from "./slices/projectsSlice";
import skillsSlice from "./slices/skillsSlice";
import testimonialsSlice from "./slices/testimonialsSlice";
import authSlice from "./slices/authSlice";
import userSlice from "./slices/userSlice";
import staticDataSlice from "./slices/staticDataSlice";
import orderSlice from "./slices/orderSlice";

export const store = configureStore({
  reducer: {
    service: servicesSlice,
    project: ProjectsSlice,
    skill: skillsSlice,
    testimonial: testimonialsSlice,
    authUser: authSlice,
    user: userSlice,
    staticData: staticDataSlice,
    order: orderSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store;
