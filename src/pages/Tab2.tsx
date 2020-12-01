import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon, IonItem, IonLabel } from '@ionic/react';
import { bulb, ellipse } from 'ionicons/icons';
import './Tab2.css';

import { koekje } from '../mqtt'

const TOPIC = 'RaspOutput'

const Tab2: React.FC = () => {

  const [pin26, setPin26] = useState()
  const [pin19, setPin19] = useState()

  const client = koekje.getClient()
  client.subscribe(TOPIC)
  client.on('message', (topic: string, message: string) => {
    if(topic === TOPIC){
      const {gpio, status} = JSON.parse(message)
      if(gpio === 26){
        setPin26(status)
      }
      else if(gpio === 19){
        setPin19(status)
      }
    }
  })

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>inputs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inputs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonLabel>input 1</IonLabel>
          <IonIcon icon={ellipse} color={pin26 ? 'success' : 'danger'} slot="end"></IonIcon>
        </IonItem>
        <IonItem>
          <IonLabel>input 2</IonLabel>
          <IonIcon icon={ellipse} color={pin19 ? 'success' : 'danger'} slot="end"></IonIcon>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
