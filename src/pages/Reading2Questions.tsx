import React from "react";
import {
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRadioGroup,
  IonRadio,
  IonListHeader,
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { enterOutline } from "ionicons/icons";

const Reading2Questions: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> Questions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel> 1. What is an ungulate?</IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>a. An animal which chew its cud</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>b. An animal with claws</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. An animal with hooves *</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. An animal that lives on land</IonLabel>
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
                    <IonLabel>
                      {" "}
                      2. Which of these is not a color variant of tigers?
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>a. Gray *</IonLabel>
                    <IonRadio slot = "start" mode = "md"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>b. White</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. Black </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> d. Golden</IonLabel>
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
                    <IonLabel>
                      {" "}
                      3. Tiger cubs typically learn to hunt at about:
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>a. Two weeks old</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>b. Eight weeks old</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. Six months old *</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. two years old</IonLabel>
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
                    <IonLabel>
                      4. Tigers are different than lions in that:
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>
                      a. Lions live alone and tigers live in groups
                    </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      b. Tigers live alone and lions live in groups *
                    </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> c. Lions can jump and tigers cannot</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> d. Tigers can jump and lions cannot </IonLabel>
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
                    <IonLabel>
                      {" "}
                      5. How does the size of tigers compare to that of lions
                      and jaguars{" "}
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>
                      {" "}
                      a. Tigers are bigger than both lions and jaguars *
                    </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      {" "}
                      b. Tigers are smaller than both lions and jaguars
                    </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      c. Tigers are bigger than lions but smaller than jaguars
                    </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      d. Tigers are bigger than jaguars but smaller than lions
                    </IonLabel>
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
                    <IonLabel>
                      {" "}
                      6. The largest tiger is the _____ tiger; the smallest is
                      the _____.
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> a. Siberian, Sumatran*</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> b. Sumatran, Siberian</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. Bengal, Javelin</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. Javalan, Bengal</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton
                routerDirection="forward"
                routerLink="/PostReadingSurvey"
              >
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
export default Reading2Questions;
