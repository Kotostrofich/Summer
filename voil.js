import {create}  from 'zustand';
import {persist}  from 'zustand/middleware';

export const useCommentHood = create (persist(set => ({
    Com: [],

    addCom: (title) => set(state => {
        const newCom = {Num: x, text}

        return
    }),
    toggleCom: (ComNum) => set({
        Com: get().Com.map(
          Com => ComNum === Com.Num
            ? { ...Com, completed: !Com.completed }
            : Com
        )
      }),



}, { name: 'Com' })))