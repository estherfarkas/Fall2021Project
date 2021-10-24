import React from "react";
import {
  IonContent,
  IonButton,
  IonItem,
  IonCol,
  IonRow,
  IonIcon,
  IonGrid,
  IonHeader,
  IonLabel,
  IonList,
  IonListHeader,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
  IonInput,
} from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
const PostEverythingSurvey: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Final Survey</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel>
                      {" "}
                      Which device did you prefer for the reading task?
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> Computer </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Phone </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Either/No Preference</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonLabel> Why? </IonLabel>
              <IonInput></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
          <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel>
                      {" "}
                      Which device did you prefer for the math task?
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> Computer </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Phone </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Either/No Preference</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
              <IonLabel> Why? </IonLabel>
              <IonInput></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
          <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel>
                      {" "}
                      Which device did you prefer for the coding task?
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> Computer </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Phone </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Either/No Preference</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
            </IonRow>
            <IonRow>
            <IonCol>
              <IonLabel> Why? </IonLabel>
              <IonInput></IonInput>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton routerLink="/end" routerDirection = "forward">
                <IonIcon slot="end" icon={arrowForwardOutline} />
                Submit
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PostEverythingSurvey;
