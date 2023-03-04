import React from "react";

import {
   Box,
	Divider,
	Grid,
	Typography,
	useMediaQuery,
	useTheme,
} from "@mui/material";

import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import AvatarCustom from "@components/avatar";
import ListItemCustom from "@components/listItemCustom";
import SocialNavBar from "@components/socialNavBar";
import {
	useResponsiveGap,
	useResponsivePadding,
	useResponsiveVariant,
} from "@utils/responsive";
import MenuMobile from "@components/menuMobile";
import LongMenu from "@components/menuMobile";

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
	// const isMiddleScreen = useMediaQuery(theme.breakpoints.up('md'));
	// const isSmallScreen = useMediaQuery(theme.breakpoints.up('sm'));

	const data = {
		title: "Jonathas Borges",
		career: "Web Developer",
		email: {
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
		telephone: {
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
		location: {
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
	};

   // const cardsInfo = [
   //    {
   //       label: "",
   //       value: "",
   //       icon: "",
   //    },
   // ]

	const divider = (
		<Divider
			sx={{
				background: (theme) => theme.palette.backgroundColor.secondary,
				width: "10rem",
				height: 2,
				marginLeft: "auto",
				marginRight: "auto",
				marginTop: 2,
				marginBottom: 2,
			}}
		/>
	);

	const cardsInfo = (
		<Grid container justifyContent={"center"} gap={1}>
			<Grid item xs={12}>
				<ListItemCustom
					label={data.email.label}
					value={data.email.value}
					icon={data.email.icon}
				/>
			</Grid>

			<Grid item xs={12}>
				<ListItemCustom
					label={data.telephone.label}
					value={data.telephone.value}
					icon={data.telephone.icon}
				/>
			</Grid>

			<Grid item xs={12}>
				<ListItemCustom
					label={data.location.label}
					value={data.location.value}
					icon={data.location.icon}
				/>
			</Grid>
		</Grid>
	);

	const socialMedia = (
		<Grid container justifyContent={"center"}>
			<Grid item>
				{" "}
				<SocialNavBar />{" "}
			</Grid>
		</Grid>
	);

	return (
		<Grid container style={{ padding: responsivePadding, border: "1px solid white" }}>
         
         {isExtraSmallScreen ? 
            <Grid item xs={12}> <LongMenu /> </Grid>
            : 
            (<></>)
         }
         
         
         <Grid item xs={12} style={{ border: "0px solid red" }}>
				<Grid
					container
					gap={responsiveGap}
				>
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
								{data.title}
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
							<Typography variant="subtitle1">{data.career}</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Grid>

			{/* Esconde social icons na versao mobile e tablet */}
			{/* Exibi social icons apenas em versoes acima de 1200px */}
         <Grid item xs={12}>
            {isLargeScreen ? (
               <>
                  {divider}
                  {cardsInfo}
                  {socialMedia}
               </>
            ) : (
               <></>
            )}
         </Grid>

		</Grid>
	);
};

export default LeftSideContent;
