export interface User {
    name: string;
    email: string;
    sector: string;
    role: string;
    age: number;
    firebaseId?: string;
    healthPlan?: string | null;
    dentalPlan?: string | null;
}
