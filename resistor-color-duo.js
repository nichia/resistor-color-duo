//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];

export const value = colorName => {
  //throw new Error("Remove this statement and implement this function");
  const colorCode0 = COLORS.indexOf(colorName[0].toLowerCase()).toString();
  const colorCode1 = COLORS.indexOf(colorName[1].toLowerCase()).toString();
  return Number(colorCode0 + colorCode1);
};
