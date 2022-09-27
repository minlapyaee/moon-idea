/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shapesItem: [],
  selectShapeValue: {},
};

export const shapeSlice = createSlice({
  name: 'shapes',
  initialState,
  reducers: {
    addShape: (state, action) => {
      state.shapesItem = [...state.shapesItem, action.payload];
    },
    selectShape: (state, action) => {
      if (action.payload?.data) {
        state.selectShapeValue = action.payload?.data;
      }
    },
    changeFillShape: (state, action) => {
      if (action.payload) {
        const { shapesItem } = state;
        const updatedVal = { ...state.selectShapeValue };
        updatedVal.data.fill = action.payload;
        state.selectShapeValue = updatedVal;
        shapesItem[shapesItem.findIndex((el) => el.id === updatedVal.id)] = updatedVal;
      }
    },
    changeStrokeShape: (state, action) => {
      if (action.payload) {
        const { shapesItem } = state;
        const updatedVal = { ...state.selectShapeValue };
        updatedVal.data.stroke = action.payload;
        state.selectShapeValue = updatedVal;
        shapesItem[shapesItem.findIndex((el) => el.id === updatedVal.id)] = updatedVal;
      }
    },
  },
});

export const {
  addShape, selectShape, changeFillShape, changeStrokeShape,
} = shapeSlice.actions;

export default shapeSlice.reducer;
