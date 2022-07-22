
export type Difficulty =  "easy" | "normal" | "hard";
export type SequenceType = "excersise" | "strech" | "break";

export interface Workout {
	slug: string,
	name: string,
	duration: number,
	difficulty: Difficulty,
	sequence: SequenceItem[] // Array of SequenceItem
}

export interface SequenceItem {
	slug: string,
	name: string,
	type: SequenceType,
	reps?: number, // Optional
	duration: number
}