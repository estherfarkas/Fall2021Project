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
  } from "@ionic/react";
  import React, {useState} from "react";
  import { arrowForwardOutline } from "ionicons/icons";
  
  const Reading: React.FC = () => {

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
      setNextPageLink("/Reading1");
    } else setNextPageLink("/Reading2");
  };

    return (
      <IonPage>
        <IonRouterOutlet>
        </IonRouterOutlet>
        <IonHeader>
          <IonToolbar color = "primary">
            <IonTitle> Reading Directions</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className = "ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                <h2>
                  {" "}
                  Please read the following passage. After you read it, there
                  will be six short (multiple choice) questions about the
                  information in the passage.{" "}
                </h2>
              </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className = "ion-text-center">
                <IonButton onClick = {checkEmail} routerLink= {nextPageLink} routerDirection = "forward">
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
  export default Reading;
  