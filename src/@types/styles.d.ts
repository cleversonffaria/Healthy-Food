import { ThemeType } from "src/utils/colors";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends ThemeType {}
}
