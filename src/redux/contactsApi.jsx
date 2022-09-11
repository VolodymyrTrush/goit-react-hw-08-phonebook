import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { combineReducers, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../constants/baseURL";

export const contactsApi = createApi({
  reducerPath: "contacts",
  keepUnusedDataFor: 5,
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getContacts: builder.query({
      query: () => "contacts",
      providesTags: ["Contact"],
    }),
    addContact: builder.mutation({
      query: (body) => ({
        url: "contacts",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Contact"],
    }),
    deleteContact: builder.mutation({
      query: ({ id }) => ({
        url: `contacts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contact"],
    }),
  }),
});

// ------------------------------------------

export const filterSlice = createSlice({
  name: "contactsFilter",
  initialState: "",
  reducers: {
    setFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// ----------------------------------------

export const rootReducer = combineReducers({
  contacts: contactsApi.reducer,
  contactsFilter: filterSlice.reducer,
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;

export const contactsFilterSelector = (state) => state.contactsFilter;
export const { setFilter } = filterSlice.actions;
