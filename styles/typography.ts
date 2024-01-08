// TODO: line weights seem to be wrong. Check the design again.
// https://www.figma.com/file/WaX0fujf2jxYnvXy7LUZY9/ADS%3A-Design-Tokens-(Community)?type=design&node-id=14279-8569&mode=design&t=qb8eQxR5pitT17MM-0
const typography = {
  default: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 18,
    fontFamily: 'Lato_400Regular',
  },
  link: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Lato_400Regular',
  },
  pressedLink: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Lato_400Regular',
    textDecorationLine: 'underline',
  },
  blockQuote: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'Lato_400Regular',
  },
  small: {
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14,
    fontFamily: 'Lato_400Regular',
  },
  code: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    fontFamily: 'SF Mono',
  },
  pointer: {
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '600',
    fontFamily: 'SF Pro Text',
  },
  h900: {
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 42,
    fontFamily: 'Lato_400Regular',
  },
  h800: {
    fontSize: 29,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 32,
    fontFamily: 'Lato_400Regular',
  },
  h700: {
    fontSize: 24,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 28,
    fontFamily: 'Lato_400Regular',
  },
  h600: {
    fontSize: 20,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 24,
    fontFamily: 'Lato_400Regular',
  },
  h500: {
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 20,
    fontFamily: 'Lato_400Regular',
  },
  h400: {
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
    fontFamily: 'Lato_400Regular',
  },
  h300: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
    fontFamily: 'Lato_400Regular',
    textTransform: 'uppercase',
  },
  h200: {
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 16,
    fontFamily: 'Lato_400Regular',
  },
  h100: {
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 16,
    fontFamily: 'Lato_400Regular',
  },

  // TODO: all typography styles should be grouped below
  form: {
    message: {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 16,
      fontFamily: 'Lato_400Regular',
    },
  },
  button: {
    label: {
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: '500',
      lineHeight: 20,
      fontFamily: 'Lato_400Regular',
    },
  },
  heading: {
    h200: {
      fontSize: 12,
      fontStyle: 'normal',
      fontWeight: '600',
      lineHeight: 16,
      fontFamily: 'Lato_400Regular',
    },
  },
} as const;

export default typography;
