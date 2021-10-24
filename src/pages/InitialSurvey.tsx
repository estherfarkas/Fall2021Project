import React, {useRef, useState} from "react";
import {
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
  IonInput,
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
  IonItemDivider,
  IonCheckbox,
} from "@ionic/react";
import { enterOutline } from "ionicons/icons";

const InitialSurvey: React.FC = () => {

  const [nextPageLink, setNextPageLink] = useState<string>();

  const nameRef = useRef<HTMLIonInputElement>(null);
  const emailRef = useRef<HTMLIonInputElement>(null);
  const whyRef = useRef<HTMLIonInputElement>(null);

  const getId = () => {
    return 1;
  }

  const getDevice = () => {
    return "desktop"
  }
  const checkPerson = () => {
    const ID = getId();
    const device = getDevice();
    const personType = ID % 4;

    if (personType === 1 || personType === 3){
      setNextPageLink("/Reading");
    }

     else setNextPageLink("/MobileSwitchPage");
      
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> Introductory Survey </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked"> Name</IonLabel>
                <IonInput placeholder = "John Smith" ref = {nameRef}> </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel position="stacked"> Email Address</IonLabel>
                <IonInput placeholder = "example@example.com" ref = {emailRef}> </IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonList>
                <IonRadioGroup>
                  <IonListHeader> 
                    <IonLabel>Gender</IonLabel>
                    </IonListHeader>
                  <IonItem>
                    <IonLabel> Male </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Female </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Prefer not to say </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Other </IonLabel>
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
                    <IonLabel>Age</IonLabel>
                    </IonListHeader>
                  <IonItem>
                    <IonLabel> 18-25 </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> 26-35 </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> 35-45 </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> 45+ </IonLabel>
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
                    <IonLabel> Race </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> American Indian/Alaska Native</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Asian</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Black or African American </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Hispanic or Latino </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> White </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Two or more races</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Other </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Prefer not to say</IonLabel>
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
                    <IonLabel> College </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> Brooklyn College</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> NEIU </IonLabel>
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
                      Have you taken the first programming course (CISC 1115 or
                      CS 200 or equivalent){" "}
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> I have taken and passed the course</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> I have not taken it </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> I am currently taking it</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      {" "}
                      I started taking it but withdrew or failed
                    </IonLabel>
                    <IonRadio mode="md" slot="start"></IonRadio>
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
                      What is your level of proficiency in reading English{" "}
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> High fluency/Native Speaker</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Medium fluency/Intermediate </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Low fluency/Beginner </IonLabel>
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
                      Which devices do you/would you preferfor engaging with educational software in general{" "}
                    </IonLabel>
                  </IonListHeader>
                  <IonItem>
                    <IonLabel> Computer</IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Mobile </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                  <IonItem>
                    <IonLabel> Either/No Preference </IonLabel>
                    <IonRadio mode = "md" slot = "start"></IonRadio>
                  </IonItem>
                </IonRadioGroup>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
            <IonItem>
                <IonLabel position="stacked"> Why?</IonLabel>
                <IonInput ref = {whyRef}> </IonInput>
              </IonItem>
            </IonCol>
            </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton onClick = {checkPerson} routerDirection="forward" routerLink={nextPageLink}>
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
export default InitialSurvey;
