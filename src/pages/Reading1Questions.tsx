import React, {useState} from "react";
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

const Reading1Questions: React.FC = () => {

  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> Reading Questions</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader>
                    <IonLabel>
                      {" "}
                      1. Which of these facts is true about flamingos’ bright
                      pink color?
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>
                      a. They are born with that color and it fades to a grayish
                      color as they get older.
                    </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      b. It is due to carotenoids in their diet of carrots and
                      tomatoes.
                    </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      c. It is due to carotenoids in their diet of algae and
                      shrimp. *
                    </IonLabel>
                    <IonRadio mode  ="md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      d. It is due to the corrosive salt in soda lakes
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
                      2. Scientists hypothesize that flamingos stand on one leg:
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>
                      a. because it demands less exertion from them. *
                    </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      b. to help them survive in corrosive soda lakes.
                    </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. to help them avoid predators.</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. as a mating ritual.</IonLabel>
                    <IonRadio mode = "md" slot  = "start"></IonRadio>
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
                    <IonLabel> 3. A group of flamingos is called a:</IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>a. gaggle.</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>b. bevy.</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. flamboyance *</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. study</IonLabel>
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
                      4. When you see flamingoes legs bend, you are seeing
                      their:{" "}
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel>a. hips</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>b. knees </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> c. ankles *</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> d. tarsals</IonLabel>
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
                    <IonLabel> 5. Newborn flamingo chicks are fed: </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> a. algae and shrimp</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> b. crop milk produced by the mother </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> c. crop milk produced by the father </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. crop milk produced by both parents* </IonLabel>
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
                      6. A pair of flamingos escaped from a zoo in ____ and were
                      spotted fourteen years later in ____:
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> a. Kansas, Texas *</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> b. Vermont, Mississippi</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>c. Arizona, Washington</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>d. California, Montana</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton routerDirection="forward" routerLink="/PostReadingSurvey">
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
export default Reading1Questions;
