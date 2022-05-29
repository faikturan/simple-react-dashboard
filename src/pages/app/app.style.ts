import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const style = makeStyles((theme: Theme) =>
  createStyles({
    wrapper: {
      backgroundColor:
        Object.keys(theme).length > 0 ? theme.palette.background.default : ""
    }
  })
);

export default style;
