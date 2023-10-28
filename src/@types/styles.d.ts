import "styled-components";
import { defaultTheme } from "../styles/theme/default";

type ThemeType = typeof defaultTheme;

declare module "styled-compoenents" {
  export interface Defaulttheme extends ThemeType {}
}
