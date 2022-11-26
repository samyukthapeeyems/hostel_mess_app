import { StyleSheet } from 'react-native';

export const COLORS = {
  white: '#FFFFFF',
  blue: '#3358F9',
  green: '#32BA7C',
  yellow: '#F5B80D',
  red: '#E24C4B',
  black: '#000000',
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const BUTTON = StyleSheet.create({
  green: {
    backgroundColor: 'green',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  yellow: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  red: {
    backgroundColor: 'red',
    borderRadius: 10,
    paddingVertical: 16,
    paddingHorizontal: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
