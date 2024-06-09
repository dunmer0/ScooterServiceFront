import { MemberView } from "../../admin/shared/MemberView";
import { IssueView } from "./IssueView";
import { ScooterView } from "./ScooterView";

export interface ReparationView{
    id: string
    scooter: ScooterView
    user: MemberView
    status: string
    issues: IssueView[]
}