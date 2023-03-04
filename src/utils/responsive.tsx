
import {  useMediaQuery, useTheme } from '@mui/material';

export const useResponsiveGap  = (theme) => {
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));
  
  const LARGE_SCREEN_GAP = 2;
  const MIDDLE_SCREEN_GAP = 3;
  const SMALL_SCREEN_GAP = 3;
  const DEFAULT_GAP = 1;

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
  const DEFAULT_PADDING = "0.5rem";

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

export const useResponsiveTypography = (theme) => {

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const LARGE_SCREEN_TYPOGRAPHY = "1.8rem";
  const MIDDLE_SCREEN_TYPOGRAPHY = "1.5rem";
  const SMALL_SCREEN_TYPOGRAPHY = "1.2rem";
  const DEFAULT_TYPOGRAPHY = "1rem";

  if (isLargeScreen) {
    return LARGE_SCREEN_TYPOGRAPHY;
  }

  if (isMiddleScreen) {
    return MIDDLE_SCREEN_TYPOGRAPHY;
  }

  if (isSmallScreen) {
    return SMALL_SCREEN_TYPOGRAPHY;
  }

  return DEFAULT_TYPOGRAPHY;

}

export const useResponsiveVariant = (theme) => {

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const LARGE_SCREEN_TYPOGRAPHY = "h4";
  const MIDDLE_SCREEN_TYPOGRAPHY = "h4";
  const SMALL_SCREEN_TYPOGRAPHY = "h4";
  const DEFAULT_TYPOGRAPHY = "h5";

  if (isLargeScreen) {
    return LARGE_SCREEN_TYPOGRAPHY;
  }

  if (isMiddleScreen) {
    return MIDDLE_SCREEN_TYPOGRAPHY;
  }

  if (isSmallScreen) {
    return SMALL_SCREEN_TYPOGRAPHY;
  }

  return DEFAULT_TYPOGRAPHY;

}

export const useResponsiveAvatarWidth = (theme) => {

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const LARGE_SCREEN_AVATAR_WIDTH = "6rem";
  const MIDDLE_SCREEN_AVATAR_WIDTH = "5rem";
  const SMALL_SCREEN_AVATAR_WIDTH = "5rem";
  const DEFAULT_AVATAR_WIDTH = "4rem";

  if (isLargeScreen) {
    return LARGE_SCREEN_AVATAR_WIDTH;
  }

  if (isMiddleScreen) {
    return MIDDLE_SCREEN_AVATAR_WIDTH;
  }

  if (isSmallScreen) {
    return SMALL_SCREEN_AVATAR_WIDTH;
  }

  return DEFAULT_AVATAR_WIDTH;

}

export const useResponsiveAvatarHeight = (theme) => {

  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));
  const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

  const LARGE_SCREEN_AVATARHEIGHT = "6rem";
  const MIDDLE_SCREEN_AVATARHEIGHT = "5rem";
  const SMALL_SCREEN_AVATARHEIGHT = "5rem";
  const DEFAULT_AVATARHEIGHT = "4rem";

  if (isLargeScreen) {
    return LARGE_SCREEN_AVATARHEIGHT;
  }

  if (isMiddleScreen) {
    return MIDDLE_SCREEN_AVATARHEIGHT;
  }

  if (isSmallScreen) {
    return SMALL_SCREEN_AVATARHEIGHT;
  }

  return DEFAULT_AVATARHEIGHT;

}