import { createMuiTheme } from "@material-ui/core/styles";
import purple from "@material-ui/core/colors";
import pink from "@material-ui/core/colors";

export default createMuiTheme({
  palette: {
    primary: purple,
    secondary: pink, // Indigo is probably a good match with pink
  },
});
