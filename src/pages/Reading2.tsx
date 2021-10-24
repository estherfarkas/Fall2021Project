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
  IonImg
} from "@ionic/react";
import { arrowForwardOutline } from "ionicons/icons";
import React from "react";

const Reading2: React.FC = () => {
  return (
    <IonPage>
      <IonRouterOutlet></IonRouterOutlet>
      <IonHeader>
        <IonToolbar>
          <IonTitle> Reading</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className = "ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardTitle> Tigers </IonCardTitle>
                <IonImg src = "tiger.jpeg"></IonImg>
                <IonCardSubtitle>
                  https://www.smithsonianmag.com/blogs/national-zoo/2020/08/14/what-does-tiger-poop-look-and-more-tiger-facts/
                  https://en.wikipedia.org/wiki/Tiger
                </IonCardSubtitle>
                <IonCardContent>
                  Tigers are the largest of the big cats species, followed by
                  lions and then jaguars. Siberian tigers are the largest type
                  of tigers, with males growing to over 660 pounds; Sumatran
                  tigers are the smallest and less than half the size of
                  Siberian tigers, with male weights of about 310 pounds. <br></br>
                  <br></br> 
                  Unlike lions, who live in groups called prides, adult tigers
                  typically live alone, except when they’re mating or raising
                  cubs. Tigresses typically give birth to 2 -- 3 cubs at a time,
                  and baby tiger cubs are far smaller than human babies at birth
                  (about 1.5 -- 3.5 pounds). Tiger cubs are born with their eyes
                  closed and open them when they are one or two weeks old. They
                  start eating meat at about eight weeks old, but continue
                  nursing from their mother until they are about five or six
                  months old. As they are weaned, their mother teaches them how
                  to hunt. Cubs start hunting on their own at about eleven
                  months old; they continue to live with their mothers until
                  they are two or three years old. Then they separate from their
                  mothers and find their own territory. Tiger cubs have a
                  mortality rate of about 50% during the first two years.
                  Although their mothers protect them from predators, they are
                  attacked by other tigers and humans, and succumb to freezing,
                  starvation and accidents. <br></br>
                  <br></br>
                    Tigers hunt by ambushing their prey,
                  leaping onto the animal, knocking it down and then biting its
                  neck. They are mainly nocturnal predators. Tigers typically
                  hunt wild boar and ungulates (hoofed animals) but will eat a
                  wide variety of animals, including monkeys, bears, birds,
                  hares, fish, crocodiles and even elephant calves. 
                  <br></br>
                    Tigers are strong swimmers, and can swim up to eighteen miles a day.
                  Tigers have even been spotted hunting in bodies of water. Like
                  lions, tigers can jump long distances, and can climb trees.
                  <br></br>
                  <br></br>
                    Tigers come in a variety of colors. White tigers have white
                  fur, dark brown stripes and blue eyes. Black tigers have such
                  thick stripes close together that the tawny background is
                  barely visible. Golden tigers have golden colors with
                  red-brown stripes.
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton routerLink="/Reading2Questions" routerDirection= "forward">
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

export default Reading2;
