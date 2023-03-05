import React from "react";

import {
   Box,
	Button,
	Divider,
	Grid,
	IconButton,
	Menu,
	MenuItem,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import MoreVertIcon from '@mui/icons-material/MoreVert';

import AvatarCustom from "@components/avatar";
import ListItemCustom from "@components/listItemCustom";
import SocialNavBar from "@components/socialNavBar";
import {
	useResponsiveGap,
	useResponsivePadding,
	useResponsiveVariant,
} from "@utils/responsive";
import MenuMobile from "@components/cardsInfo/mobile";
import LongMenu from "@components/cardsInfo/mobile";
import CardInfo from "@components/cardsInfo";
import CardInfoSingle from "@components/cardInfoSingle";
import CardInfoMobile from "@components/cardsInfo/mobile";

interface Props {
	children?: React.ReactNode;
}

const LeftSideContent: React.FC<Props> = ({ children, ...props }) => {
	const theme = useTheme();

	const responsiveGap = useResponsiveGap(theme);
	const responsiveVariant = useResponsiveVariant(theme);
	const responsivePadding = useResponsivePadding(theme);

	const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));
	const isSmallScreen = useMediaQuery(theme.breakpoints.only('sm'));
	const isMiddleScreen = useMediaQuery(theme.breakpoints.only('md'));

	const dataProfile = {
		title: "Jonathas Borges",
		career: "Web Developer",
	};

	const cardsDataInfo = [
      {
         label: "Email",
         value: "jonathasborgesux@gmail.com",
         icon: (
			<MarkEmailReadOutlinedIcon
				sx={{
					color: (theme) => theme.palette.textColor?.selected,
					borderRadius: 2,
				}}
			/>
		),
      },
	  {
		label: "Telefone",
		value: "(+55) 92 9 8203-542",
		icon: (
			<PhoneIphoneOutlinedIcon
				sx={{
					color: (theme) => theme.palette.textColor?.selected,
					borderRadius: 2,
				}}
			/>
		),
	 },
	 {
		label: "Localização",
		value: "Brasil - Manaus",
		icon: (
			<LocationOnOutlinedIcon
				sx={{
					color: (theme) => theme.palette.textColor?.selected,
					borderRadius: 2,
				}}
			/>
		),
	 },
    ]

	const desktopVersion = (
		<Grid container gap={1}>

			<Grid item xs={12}>
				<Divider  variant={"middle"}
					sx={{
						background: (theme) => theme.palette.backgroundColor.secondary,
						width: "10rem",
						height: 2,
						marginLeft: "auto",
						marginRight: "auto",
						marginTop: 2.5,
						marginBottom: 0.8,
					}}
				/>
			</Grid>

			<Grid item xs={12}>
				<CardInfo cards={cardsDataInfo} />
			</Grid>

			<Grid item xs={12}>
				<SocialNavBar/>
			</Grid>

		</Grid>
	)

	return (
		<Grid container style={{ padding: responsivePadding, border: "0px solid white" }}>
         
		 	{/* Exibi cardsInfo e social icons apenas na versao mobile - 0px a 600px */}
			{/* Exibi uma pequena variacao entre 600px a 1199px */}
		 	<Grid item xs={12} style={{ border: "0px solid red" }}>
				{isExtraSmallScreen ? 
					(
						<CardInfoMobile 
							cards={cardsDataInfo} 
							hasSocialNavBar={true} 
						/>
					)
					: isSmallScreen || isMiddleScreen ? (
						<CardInfoMobile 
							cards={cardsDataInfo} 
							hasSocialNavBar={true} 
							title={"Mais Informacoes"}
						/>
					) : (<></>)
				}
			</Grid>

         	<Grid item xs={12} style={{ border: "0px solid red" }}>
				<Grid container gap={responsiveGap}>

					<Grid item  lg={12} style={{ border: "0x solid blue" ,padding: 4 }}>
						<AvatarCustom />
					</Grid>

					<Grid container xs={6.5} lg={12}
						alignSelf={"center"}
						justifyContent={isLargeScreen ? "center" : "flex-start"}
                  		style={{ border: "0px solid blue" }}
						gap={0.5}
					>
						<Grid item xs={12}>
							<Typography
								variant={responsiveVariant}
								textAlign={isLargeScreen ? "center" : "left"}
							>
								{dataProfile.title}
							</Typography>
						</Grid>

						<Grid
							item
							sx={{
								background: (theme) =>
								theme.palette.backgroundColor.secondary,
								padding: "0.2rem 0.6rem 0.2rem 0.6rem",
								//margin: "1rem 0rem 0rem 0rem",
								borderRadius: 2,
							}}
						>
							<Typography variant="subtitle1">{dataProfile.career}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/* Esconde cardsInfo e social icons na versao mobile e tablet */}
			{/* Exibi social icons apenas em versoes acima de 1200px */}
			<Grid item xs={12} style={{ border: "0px solid red" }}>
				{isLargeScreen ? (desktopVersion) : (<></>)}
			</Grid>

		</Grid>
	);
};

export default LeftSideContent;
