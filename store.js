import {create}  from 'zustand';
import {persist}  from 'zustand/middleware';

const useStore = create( persist((set) => ({
  reviews: [],
  addReview: (newReview) => {
    set((state) => ({
      reviews: [...state.reviews, newReview],
    }));
  },
})));

export default useStore;