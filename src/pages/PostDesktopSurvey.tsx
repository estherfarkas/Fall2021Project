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

const PostDesktopSurvey: React.FC = () => {

    const [nextPageLink, setNextPageLink] = useState<string>();

    const getId = () => {
        return 1;
      }
    
      const getSurveyDesktop= () => {
          return true
      }

      const getSurveyMobile = () => {
          return true;
      }
      const checkCompletedSurveys = () => {
        const ID = getId();
        const personType = ID % 4;

        if (getSurveyMobile() && getSurveyDesktop()){
            setNextPageLink("/PostEverythingSurvey");
        }

        else setNextPageLink("/MobileDeviceSwitch");
    }
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle> Post-Desktop Survey </IonTitle>
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
                  <IonLabel> I found this application easy to navigate</IonLabel>
                
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
                  <IonLabel>I was found this application clear </IonLabel>
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
                onClick = {checkCompletedSurveys}
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
export default PostDesktopSurvey;
