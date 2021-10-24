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
    IonInput,
    IonLabel,
  } from "@ionic/react";
  import React, { useRef, useState } from "react";
  import { arrowForwardOutline, person } from "ionicons/icons";
  
  const MobileLandingPage: React.FC = () => {
  
    const [nextPageLink, setNextPageLink] = useState<string>();
    const emailInputRef = useRef<HTMLIonInputElement>(null);
  
    const getId = () => {
      const emailID = emailInputRef.current;
      //some code to get the ID
      //return -1 if it isn't in the database
      return 1;
    }
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle> Welcome </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className = "ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol className = "ion-text-center">
                <IonLabel position = "floating"> Please enter your email address</IonLabel>
                <IonInput type = "text" ref = {emailInputRef} placeholder = "example@example.com"></IonInput>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonButton routerLink= "/Reading">
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
  export default MobileLandingPage;
  