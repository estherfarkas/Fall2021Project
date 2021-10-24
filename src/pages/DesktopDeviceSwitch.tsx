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
  } from "@ionic/react";
  import React, { useRef, useState } from "react";
  import { arrowForwardOutline, person } from "ionicons/icons";
  
  const DesktopDeviceSwitch: React.FC = () => {
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle> Switch to Desktop </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className = "ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol className = "ion-text-center">
              <h2>
              Please switch to back to a desktop for the next portion of the assesment
                </h2>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        </IonPage>
    );
  };

export default DesktopDeviceSwitch;
