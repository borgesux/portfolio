import React from "react";

import {
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
import SocialNavBar from "@components/socialNavBar";
import CardInfo from "@components/cardsInfo";
import CardInfoMobile from "@components/cardsInfo/mobile";

import {
	useResponsiveGap,
	useResponsivePadding,
	useResponsiveVariant,
} from "@utils/responsive";

interface Props {
	children?: React.ReactNode;
}

const LeftSideContent: React.FC<Props> = ({ children, ...props }) => {
	const theme = useTheme();

	const responsiveGap = useResponsiveGap(theme);
	const responsiveVariant = useResponsiveVariant(theme);
	const responsivePadding = useResponsivePadding(theme);

    const isExtraSmallScreen = useMediaQuery(theme.breakpoints.only('xs'));
	const isSmallScreen = useMediaQuery(theme.breakpoints.only('sm'));
	const isMiddleScreen = useMediaQuery(theme.breakpoints.only('md'));
	const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

	const profileData = {
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

	const cardsInfoDesktopVersion = (
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

   const cardsInfoTabletVersion = (
      <CardInfoMobile 
         cards={cardsDataInfo} 
         hasSocialNavBar={true} 
         title={"Mais Informações"}
      />
   )

   const cardsInfoMobileVersion = (
      <CardInfoMobile 
         cards={cardsDataInfo} 
         hasSocialNavBar={true} 
      />
   );

	return (
		<Grid container style={{ padding: responsivePadding, border: "0px solid white" }}>
         
		 	{/* Exibir cardsInfo e social icons apenas na versao mobile - 0px a 600px */}
         {isExtraSmallScreen ? cardsInfoMobileVersion : (<></>)}

         {/* Exibir uma pequena variacao do cardsInfo entre 600px a 1199px */}
         {isSmallScreen || isMiddleScreen ? cardsInfoTabletVersion : (<></>)}
         
         <Grid item xs={12}>
				<Grid container gap={responsiveGap}>

					<Grid item lg={12} style={{ border: "0x solid blue" ,padding: 4 }}>
						<AvatarCustom />
					</Grid>

					<Grid item xs={6.5} lg={12} 
						sx={{ 
								display: "flex", alignSelf:"center", 
								justifyContent: isLargeScreen ? "center" : "flex-start",  
							}}>

						<Grid container sx={{ border: "0px solid blue" }} gap={0.5} textAlign={isLargeScreen ? "center" : "left"}>
							
                     <Grid item xs={12}>
								<Typography variant={responsiveVariant} >
									{profileData.title}
								</Typography>
							</Grid>

							<Grid item xs={12}>
                        <Grid container justifyContent={isLargeScreen ? "center" : "left"}>
                           <Grid item 
                              sx={{
                                 background: (theme) => theme.palette.backgroundColor.secondary,
                                 padding: "0.2rem 0.6rem 0.2rem 0.6rem",
                                 borderRadius: 2,
                              }}
                           >
                              <Typography variant="subtitle1">{profileData.career}</Typography>
                           </Grid>
                        </Grid>

							</Grid>
						</Grid>
					</Grid>

				</Grid>
			</Grid>

			{/* Esconde cardsInfo e social icons na versao mobile e tablet */}
			{/* Exibi social icons apenas em versoes acima de 1200px */}
			<Grid item xs={12}> {isLargeScreen ? (cardsInfoDesktopVersion) : (<></>)}</Grid>

		</Grid>
	);
};

export default LeftSideContent;
