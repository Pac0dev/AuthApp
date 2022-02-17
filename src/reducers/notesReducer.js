import refreshNotes from "../helpers/refreshNotes";
import { types } from "../types/types";

const initialState = {
	notes: [],
	activeNote: null,
};

export const notesReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case types.notesAddNew: 
			return {
				...state,
				notes: [action.payload, ...state.notes],
			};
		case types.notesActive:
			return {
				...state,
				activeNote: {
					...action.payload,
				},
			};
		case types.notesLoad:
			return {
				...state,
				notes: [...action.payload],
			};
		case types.notesUpdated:
			return {
				...state,
				notes: [...refreshNotes(state.notes, action.payload.note)], 
			};
		case types.notesFileUrl: 
			return {
				...state,
				activeNote: {
					...state.activeNote,
					imageUrl: action.payload
				}
			};
		default:
			return state;
	}
};
