import { IEmployee } from 'src/Model/Employee/IEmployee';
import jackImg from '../../assets/img/jack.png';
import victoriaImg from '../../assets/img/victoria.png';
import donnaImg from '../../assets/img/donna.png';
import marryImg from '../../assets/img/mary.png';
import andyImg from '../../assets/img/andy.png';
import { IRole } from 'src/Model/Employee/IRole';
import { ITeam } from 'src/Model/Team/ITeam';

export const employees: IEmployee[] = [
	{
		img: jackImg,
		name: 'Jack Jackson',
		address: '307 Brand road, Auckland',
		email: 'jack@affinityid.co.nz',
		role: IRole.Admin,
		team: ITeam.Creative,
	},
	{
		img: victoriaImg,
		name: 'Victoria Furgason',
		address: '308 Brand road, Auckland',
		email: 'victoria@affinityid.co.nz',
		role: IRole.Admin,
		team: ITeam.Management,
	},
	{
		img: donnaImg,
		name: 'Donna Hicks',
		address: '309 Brand road, Auckland',
		email: 'Donna@affinityid.co.nz',
		role: IRole.Admin,
		team: ITeam.AdminFinance,
	},
	{
		img: marryImg,
		name: 'Marry Long',
		address: '310 Brand road, Auckland',
		email: 'andy@affinityid.co.nz',
		role: IRole.Employee,
		team: ITeam.Creative,
	},
	{
		img: andyImg,
		name: 'Andy Mann',
		address: '311 Brand road, Auckland',
		email: 'andy@affinityid.co.nz',
		role: IRole.Employee,
		team: ITeam.Creative,
	}
];
