
import {  useMediaQuery, useTheme } from '@mui/material';

export const useResponsiveGap  = (theme) => {
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
  
  const LARGE_SCREEN_GAP = 2;
  const MIDDLE_SCREEN_GAP = 3;
  const SMALL_SCREEN_GAP = 3;
  const DEFAULT_GAP = 4;

  if (isLargeScreen) {
    return LARGE_SCREEN_GAP;
  }

  if (isMiddleScreen) {
    return MIDDLE_SCREEN_GAP;
  }

  if (isSmallScreen) {
    return SMALL_SCREEN_GAP;
  }

  return DEFAULT_GAP;
};

export const useResponsivePadding = (theme) => {
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const LARGE_SCREEN_PADDING = "2rem";
  const MIDDLE_SCREEN_PADDING = "1rem";
  const SMALL_SCREEN_PADDING = "1rem";
  const DEFAULT_PADDING = "0rem";

  if (isLargeScreen) {
    return LARGE_SCREEN_PADDING;
  }

  if (isMiddleScreen) {
    return MIDDLE_SCREEN_PADDING;
  }

  if (isSmallScreen) {
    return SMALL_SCREEN_PADDING;
  }

  return DEFAULT_PADDING;


}