export const theme = {
	fontFamily: 'arial',
	backgroundColor: '#fafafa',
	defaultFontSize: '15px',
	fontColor: '#827e99',
	minorFontColor: '9b9b9b',
	borderRadius: '15px',
}

export interface IThemeProps {
	theme: Theme;
}

export type Theme = typeof theme;
