import { IssueNew } from "./IssueNew";
import { ScooterNew } from "./ScooterNew";

export interface ReparationNew{
    scooter: ScooterNew
    issues: IssueNew[]
}