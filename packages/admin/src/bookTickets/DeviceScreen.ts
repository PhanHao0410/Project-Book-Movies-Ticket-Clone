interface IFormDevice {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  maxlg?: string;
  maxsm?: string;
  maxXl?: string;
  maxmd?: string;
}
// const breakpoints: IFormDevice = {
//   xs: '320px',
//   sm: '640px',
//   md: '768px',
//   lg: '1024px',
//   xl: '1280px',
//   '2xl': '1536px',
// };
const breakpoints: IFormDevice = {
  xs: '320px',
  sm: '600px',
  md: '768px',
  lg: '960px',
  xl: '1280px',
  '2xl': '1536px',
  maxlg: '960px',
  maxsm: '600px',
};

export const devices: IFormDevice = {
  xs: `(min-width: ${breakpoints.xs})`,
  sm: `(min-width: ${breakpoints.sm})`,
  md: `(min-width: ${breakpoints.md})`,
  lg: `(min-width: ${breakpoints.lg})`,
  xl: `(min-width: ${breakpoints.xl})`,
  '2xl': `(min-width: ${breakpoints['2xl']})`,
  maxlg: `(max-width: ${breakpoints.maxlg})`,
  maxsm: `(max-width: ${breakpoints.maxsm})`,
  maxXl: `(max-width: ${breakpoints.xl})`,
  maxmd: `(max-width: ${breakpoints.md})`,
};
