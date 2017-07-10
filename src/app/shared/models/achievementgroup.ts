import { Achievement } from "./achievement"

export class AchievementGroup {
    id: number;
    name: string;
    order: number;
    achievements: Achievement[]; 
}
