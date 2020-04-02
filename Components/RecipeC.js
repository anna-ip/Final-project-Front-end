// import React from "react";
// import { ImageBackground, View, SafeAreaView } from "react-native";
// import { Card, Title, Paragraph } from "react-native-paper";
// import IngredientsList from "./lib/IngredientsList";
// import InstructionsList from "./lib/InstuctionsList";
// import styled from "styled-components";

// const RecipeC = () => {
//   return (
//     <SafeAreaView>
//       <StyledCard>
//         <Card.Content>
//           <StyledImageBackground
//             source={require("../Components/assets/burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg")}
//           >
//             <StyledTitle>Title</StyledTitle>
//           </StyledImageBackground>

//           <TimeView>
//             <StyledParagraph> Time component font: Poppins</StyledParagraph>
//           </TimeView>

//           <IngredientsView>
//             <IngredientsList />
//           </IngredientsView>

//           <InstructionsView>
//             <InstructionsList />
//           </InstructionsView>
//         </Card.Content>
//       </StyledCard>
//     </SafeAreaView>
//   );
// };

// const StyledCard = styled(Card)`
//   display: flex;
//   flex-direction: column;
//   background-color: #f0f0f0;
//   height: 1000px;
//   margin: 5px;
//   padding-top: 10px;
//   padding-left: 15px;
//   padding-right: 15px;
//   border-radius: 8px;
//   border: 0.75px solid #ffdf7f;
//   box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
//   z-index: 0;
// `;

// const StyledImageBackground = styled(ImageBackground)`
//   width: 110%;
//   height: 200px;
//   border-radius: 8px;
//   z-index: 1;
//   position: absolute;
//   top: 10px;
//   bottom: 0%;
//   box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
// `;

// const StyledTitle = styled(Title)`
//   color: #ffffff;
//   position: absolute;
//   left: 0%;
//   right: 0%;
//   top: 110px;
//   z-index: 2;
// `;

// const StyledParagraph = styled(Paragraph)`
//   font-weight: 600;
//   font-size: 12px;
//   line-height: 18px;
// `;

// const TimeView = styled(View)`
//   position: absolute;
//   left: 0%;
//   right: 0%;
//   top: 230px;
// `;

// const IngredientsView = styled(View)`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   left: 0%;
//   right: 0%;
//   top: 340px;
// `;

// const InstructionsView = styled(View)`
//   display: flex;
//   flex-direction: column;
//   position: absolute;
//   left: 0%;
//   right: 0%;
//   top: 710px;
// `;

// export default RecipeC;
