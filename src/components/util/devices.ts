const size = {
    mobile: 767,
    tablet: 1024,
    desktop: 1200
};

export const device = {
    mobile: `(max-width: ${size.mobile}px)`,
    exceptMobile: `(min-width: ${size.mobile + 1}px)`,
    tablet: `(max-width: ${size.tablet}px)`,
    exceptTablet: `(min-width: ${size.tablet + 1}px)`,
    onlyTablet: `(min-width: ${size.mobile + 1}) and (max-width: ${size.tablet})`,
    smallDesktop: `(min-width: ${size.tablet + 1}) and (max-width: ${size.desktop})`,
    largeDesktop: `(min-width: ${size.desktop}px)`
};