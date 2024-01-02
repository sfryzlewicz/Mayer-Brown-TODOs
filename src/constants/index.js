const COLORS = {
    primary: "#2990A6", //blue
    secondary: "#E9E9E9", //white
    shadow: "#0F3457", //deep blue
    accent: "#FDC55d", //orange
}

const SIZES = {
    padding: 19,
    borederRadius: 15,
    textBoxRadius: 25,
    h1: 22,
    h2: 16,
}

const FONTS = {
    h1_semiBold: {fontSize: SIZES.h1, fontFamily: "Montserrat_Semibold"},
    h2_semiBold: {fontSize: SIZES.h2, fontFamily: "Montserrat_Semibold"}
}

const SHADOW ={
    elevation: 12,
    shadowColor: COLORS.shadow,
    shadowOffset: {width:2, height: 12},
    shadowRadius: 12,
}

export {COLORS, SIZES, FONTS, SHADOW}