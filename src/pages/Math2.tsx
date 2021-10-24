import React from "react";
import {
  IonPage,
  IonToolbar,
  IonTitle,
  IonHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonList,
  IonListHeader,
  IonRadio,
  IonRadioGroup,
  IonLabel,
  IonItem,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { enterOutline } from "ionicons/icons";
const Math2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> Math 2 Questions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel>5 x 6 - 9 / 3</IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>a. 27</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>b. 26</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. 25</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. 23</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel> 5 + 9 x 8 / 1</IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>a. 5</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>b. 15</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. 77</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. 16</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel> 7<sup>2</sup> - 3 x 3</IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>a. 48</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>b. 84</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. 40</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. 138</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel> -12 + 20 / (-2) =</IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>a. 4</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>b. 22 </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> c. -4</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> d. -22</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel> (3 x 5<sup>2</sup> - 5 ) / 7</IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> a. 10</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> b. 220 </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. 1.4 </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. 2.8 </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton routerDirection="forward" routerLink="/PostMathSurvey">
                <IonIcon slot="end" icon={enterOutline} />
                Submit
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Math2;
