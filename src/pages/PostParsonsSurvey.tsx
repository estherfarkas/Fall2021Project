import React,  {useState, useRef} from "react";
import {
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonContent,
  IonPage,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItemDivider,
  IonRange,
} from "@ionic/react";
import { enterOutline } from "ionicons/icons";


const PostParsonsSurvey: React.FC = () => {

  const [nextPageLink, setNextPageLink] = useState<string>();

  const getId = () => {
    return 1;
  }

  const getDevice = () => {
    return "desktop";}

  const getDeviceSurvey = () => {
    if (getDevice() === "desktop"){
      setNextPageLink("/PostDesktopSurvey");
    }
    else setNextPageLink("/PostMobileSurvey");
  }
    
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> Post-Parsons Survey </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonList>
                <IonListHeader>
                  Please rate your agreement with the following statements on a
                  scale of 1 -- 5, where 1 indicates “strong disagreement” and 5
                  indicates “strong agreement.”
                </IonListHeader>
                  <IonLabel> I found the task to be enjoyable</IonLabel>
                
                <IonItem>
                  <IonRange
                    min={0}
                    max={5}
                    snaps={true}
                    step={1}
                    ticks={true}
                    pin={true}
                  >
                    <IonLabel slot="start"> strongly disagree</IonLabel>
                    <IonLabel slot="end"> strongly agree </IonLabel>
                  </IonRange>
                </IonItem>
                  <IonLabel>I was motivated to succeed </IonLabel>
               <IonItem>
                  <IonRange
                    min={0}
                    max={5}
                    snaps={true}
                    step={1}
                    ticks={true}
                    pin={true}
                  >
                    <IonLabel slot="start"> strongly disagree </IonLabel>
                    <IonLabel slot="end"> strongly agree </IonLabel>
                  </IonRange>
                </IonItem>
                  <IonLabel>I found this task to be easy</IonLabel>
                <IonItem>
                  <IonRange
                    min={0}
                    max={5}
                    snaps={true}
                    step={1}
                    ticks={true}
                    pin={true}
                  >
                    <IonLabel slot="start"> strongly disagree </IonLabel>
                    <IonLabel slot="end"> strongly agree </IonLabel>
                  </IonRange>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton
                onClick = {getDeviceSurvey}
                routerDirection="forward"
                routerLink= {nextPageLink}
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
export default PostParsonsSurvey;
