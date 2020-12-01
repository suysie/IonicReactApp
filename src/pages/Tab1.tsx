import React, {useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonToggle } from '@ionic/react';
import './Tab1.css';

import { koekje } from '../mqtt'

const TOPIC = 'RaspInput'

const Tab1: React.FC = () => {

  const [pin, setPin] = useState<string>()

  const client = koekje.getClient()

  function setPinStatus(gpio: string, status: any){
    console.log({gpio, status})
    client.publish(TOPIC, JSON.stringify({gpio, status}))
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>outputs</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Outputs</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem><IonToggle color="light" onIonChange={ e => setPinStatus('17', e.detail.checked ? 1: 0)}/>change Output 1</IonItem>
        <IonItem><IonToggle color="light" onIonChange={ e => setPinStatus('27', e.detail.checked ? 1: 0)}/>change Output 2</IonItem>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
