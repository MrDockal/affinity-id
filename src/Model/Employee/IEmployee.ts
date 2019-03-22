import { IRole } from './IRole';
import { ITeam } from '../Team/ITeam';

export interface IEmployee {
	img: string;
	name: string;
	email: string;
	role: IRole;
	team: ITeam;
	address: string;	
}
