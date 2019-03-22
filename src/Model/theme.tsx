export const theme = {
	fontFamily: 'arial',
	backgroundColor: '#fafafa',
	defaultFontSize: '18px',
	fontColor: '#827e99',
	darkFontColor: '#525252',
	minorFontColor: '#9b9b9b',
	borderRadius: '15px',
	boxPadding: '10px',
	employeeBoxHeight: '340px',
	greenColor: '#5b9149',
}

export interface IThemeProps {
	theme: Theme;
}

export type Theme = typeof theme;
