import {
  IonCard,
  IonCardContent,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCardTitle,
  IonCardSubtitle,
  IonIcon,
  IonButton,
  IonImg,
} from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import React from "react";

const Reading1: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet></IonRouterOutlet>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Reading Passage </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = "ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardTitle > Flamingos </IonCardTitle>
                <IonImg src ="flamingo.jpeg"></IonImg>
                <IonCardSubtitle>
                  {" "}
                  ​​https://www.smithsonianmag.com/blogs/national-zoo/2021/07/13/10-things-you-didnt-know-about-flamingos/
                  https://en.wikipedia.org/wiki/Flamingo
                </IonCardSubtitle>
                <IonCardContent>
                    Flamingos are a distinctive sight. Although they are born with
                  grayish feathers, adult flamingos develop a bright pink color.
                  Blue-green algae contain high levels of carotenoids, a natural
                  pigment that is also responsible for the color of carrots and
                  tomatoes. When flamingos eat algae, as well as shrimp that eat
                  algae, the carotenoids give flamingos their characteristic
                  color. American flamingos are typically a brighter color than
                  flamingos in Africa and Asia due to higher levels of
                  carotenoids in their diet. Pale or white flamingos are
                  typically malnourished. <br></br>
                  <br></br>
                    Although it looks as though flamingos’
                  knees bend backwards, those joints are actually their ankle
                  joints. Their knees, which are much higher up and hidden by
                  the body and feathers, actually bend forwards, just like human
                  knees. <br></br>
                  <br></br>
                    Flamingos typically stand on one leg, and sometimes
                  even sleep on one leg. Some research suggests that they expend
                  more muscle power to stand on both legs, and so the one-legged
                  pose is easier for them to hold without much muscle exertion.<br></br>
                  <br></br>
                    Flamingos wade in the water, but they are also capable of
                  flying. In their natural habitats, flamingos will fly to breed
                  or migrate. In captivity, if flamingo wings are not clipped,
                  they may fly to escape. A pair of flamingos flew out of a
                  Kansas zoo in 2005; one of them was spotted in Texas fourteen
                  years later. <br></br>
                    <br></br>
                    Flamingos generally lay one egg at a time.
                  Flamingo parents build a nest out of mud together and take
                  turns incubating the egg. Once the chick is born, both parents
                  feed it crop milk, a substance produced in their upper
                  digestive tract and throat that contains protein, fat and
                  blood cells. <br></br>
                    <br></br>
                    Flamingos typically spend their time wading in
                  water. They are capable of living in extremely salty waters,
                  called “soda” lakes. Most animals are incapable of living in
                  those environments due to the high concentration of salt that
                  can burn skin. Scientists are investigating flamingos’ unique
                  physiology that enables them to survive in these waters. <br></br>
                  <br></br>
                    If you see a group of flamingos, you are seeing a flamboyance of
                  flamingos. (Other bird groups: murder of crows, gaggle of
                  geese, study of owls, bevy of doves.)
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton routerLink="/Reading1Questions" routerDirection = "forward">
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

export default Reading1;
