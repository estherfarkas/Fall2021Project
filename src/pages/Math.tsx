import {
  IonContent,
  IonTitle,
  IonToolbar,
  IonPage,
  IonHeader,
  IonGrid,
  IonButton,
  IonIcon,
  IonRow,
  IonCol,
  IonRouterOutlet,
  getPlatforms,
} from "@ionic/react";
import React, { useState } from "react";
import { arrowForwardOutline } from "ionicons/icons";

const Math: React.FC = () => {

  const [nextPageLink, setNextPageLink] = useState<string>();

  const getId = () => {
    return 1;
  }

  const getDevice = () => {
    return "desktop"
  }
  const checkEmail = () => {
    const ID = getId();
    const device = getDevice();
    const personType = ID % 4;
    if (
      (personType === 1 && device === "desktop") ||
      (personType === 4 && device === "desktop") ||
      (personType === 2 && device === "mobile") ||
      (personType === 3 && device === "mobile")
    ) {
      setNextPageLink("/Math1");
    } else setNextPageLink("/Math2");
  };


  return (
    <IonPage>
      <IonRouterOutlet></IonRouterOutlet>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> Math Directions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <h2>
                You will be given 4 short (multiple choice) math questions to
                solve. <br></br>
                Recall that when faced with multiple operations, math
                expressions are evaluated in the following order: <br></br>
                Parentheses
                <br></br>
                Exponents <br></br>Multiplication/Division <br></br>
                Addition/Subtraction <br></br>
                <br></br>
                Example: 20 - 4 x (1 + 3) + 3<sup>2</sup> <br></br>
                Parentheses: (1 + 3) = 4 <br></br>
                Exponents: 3<sup>2</sup> = 9 <br></br>Multiplication: 4 x 4 = 16 <br></br>
                Addition/Subtraction: 20 - 16 = 4 + 9 = 13
              </h2>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton onClick={checkEmail} routerLink={nextPageLink}>
                <IonIcon slot="end" icon={arrowForwardOutline} />
                Next
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Math;
