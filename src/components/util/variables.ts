
/**
 ********************************
 * COLOR PALLETE
 ********************************
 * Colors name tracked from
 * https://www.htmlcsscolor.com/
 */

const baseColors = {
    white: '#FFFFFF',
    cornflowerBlue: '#103f8a',
    jordyBlue: '#0262f9',
    tropicalBlue: '#AAC4ED',
    snow: '#F9F9F9',
    grey800: '#808080',
    grey700: '#777777',
    silver: '#636363',
    froly: '#e81d33',
	black: '#000'
};

export const colorTypho = {
    body: baseColors.black,
    heading: baseColors.cornflowerBlue,
    link: baseColors.cornflowerBlue,
    linkActive: baseColors.jordyBlue,
    inputPlaceHolder: baseColors.grey800,
    inputActive: baseColors.grey700,
    tag: baseColors.white,
    message: baseColors.white
};

export const colorBg = {
    body: baseColors.black, 
    card: baseColors.white,
    input: baseColors.white,
    tag: baseColors.snow,
    tagGrey: baseColors.silver,
    tagBlue: baseColors.jordyBlue,
    tagRed: baseColors.froly,
    searchBar: baseColors.black,
    messageError: baseColors.froly,
};

export const colorBorder = {
    input: baseColors.tropicalBlue
};


/**
 ********************************
 * TYPHOGRAPHY
 ********************************
 */

 export const fontFamily = {
    name: 'Roboto',
    type: 'sans-serif'
};

 export const fontSize = {
    body: '1em',
    paragaraph: '0.9em',
    small: '0.75em',
    heading: '1.3em',
    headingMobile: '1.1em',
    tag: '0.6875em',
    input: '0.875em'
};

export const lineHeight = {
    body: 1.4
};

export const fontWeight = {
    body: 400,
    heading: 500,
    tag: 500,
    message: 500
};