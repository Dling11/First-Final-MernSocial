import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";
import haker from "../../img/Haker.jpg"

const AboutLayout = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Haker Community
        </Typography>
        <Typography color={medium}>Dling | 2023</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="Annonymous"
        src={haker}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}> I define myself as random </Typography>
        <Typography color={medium}> Hakercumminity.com </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Wake up to reality nothing every goes as planned, in this world the longer you lived the more you realize that only pain, suffering, and futility exist.
      </Typography>
    </WidgetWrapper>
  );
};

export default AboutLayout;
