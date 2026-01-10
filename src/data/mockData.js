import { grade1Problems } from './problems/grade1';
import { grade2Problems } from './problems/grade2';
import { grade3Problems } from './problems/grade3';
import { examProblems } from './problems/exam';

export const mockProblems = [
    ...grade1Problems,
    ...grade2Problems,
    ...grade3Problems,
    ...examProblems
];

export const mockProblem = mockProblems[0];
