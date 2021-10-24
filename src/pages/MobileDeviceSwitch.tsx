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
  
  const MobileDeviceSwitch: React.FC = () => {
  
    const [nextPageLink, setNextPageLink] = useState<string>();
    const mobilePageLink = "/MobileLandingPage";

    const getId = () => {
        return 1;
      }
    
      const getDevice = () => {
        return "desktop"
      }

      const getSurveyDesktop= () => {
          return true
      }

      const getSurveyMobile = () => {
          return true;
      }
      const checkCompletedSurveys = () => {
        const ID = getId();
        const device = getDevice();
        const personType = ID % 4;

        if (getSurveyDesktop() && getSurveyMobile){
          setNextPageLink("/PostEverythingSurvey");
        }


        if (!getSurveyDesktop() && getSurveyMobile){
            setNextPageLink("/Reading");
          }
    }
  
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle> Device </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className = "ion-padding">
          <IonGrid>
            <IonRow>
              <IonCol className = "ion-text-center">
              <h2>
              Please switch to a mobile device for the next portion of the assesment
                Here is the link: {mobilePageLink}
                Please do not exit out of this page.
                When you have completed the mobile assesment, click the button below. 
                </h2>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonButton onClick = {checkCompletedSurveys} routerLink= {nextPageLink}>
                  <IonIcon slot="end" icon={arrowForwardOutline} />
                  Yes, I finished the mobile portion.
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
        </IonPage>
    );
  };

export default MobileDeviceSwitch;
