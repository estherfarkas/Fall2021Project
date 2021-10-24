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
  
  const Parsons1: React.FC = () => {

    return (
      <IonPage>
        <IonRouterOutlet>
        </IonRouterOutlet>
        <IonHeader>
          <IonToolbar color = "primary">
            <IonTitle> Parsons 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className = "ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol className="ion-text-center">
                <h2>
                  {" "}
                  Placeholder Text
                </h2>
              </IonCol>
            </IonRow>
            <IonRow>
                <IonCol className = "ion-text-center">
                <IonButton routerLink= "/PostParsonsSurvey"  routerDirection = "forward">
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
  export default Parsons1;
  