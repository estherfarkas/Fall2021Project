import { IonContent, IonGrid, IonPage, IonRow, IonCol } from "@ionic/react";
import React from "react";

const End: React.FC = () => {
  return (
    <IonPage>
      <IonContent className = "ion-padding" >
        <IonGrid>
          <IonRow>
            <IonCol className = "ion-text-center"> 
              <h2> Thank you for participating!</h2>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default End;
