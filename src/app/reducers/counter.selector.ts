import {createFeatureSelector, createSelector} from "@ngrx/store";
import {COUNTER_KEY, CounterState} from "./counter.reducer";

export const featureSelector = createFeatureSelector<CounterState>(COUNTER_KEY);

export const countSelector = createSelector(
  featureSelector,
  state => state.count
);

export const updatedAtSelector = createSelector(
  featureSelector,
  state => state.updatedAt
)
