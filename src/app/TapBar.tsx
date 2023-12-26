'use client'
import React, {useState, useEffect} from 'react';
import {IonFooter, IonButton, IonIcon} from '@ionic/react';
import {usePathname} from 'next/navigation'
import Link from "next/link";

const svgHeight = 22;
const svgWidth = 22;

const TapBar = () => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }


  const pathname = usePathname()

  const getColorByPathname = (path: string) => {
    return path === pathname ? "#DE4D80" : "#04122F";
  };

  return (
    <IonFooter className="ion-no-border">
      <div className="flex justify-around">
        <Link href="/">
          <IonButton fill="clear">
            <svg xmlns="http://www.w3.org/2000/svg" height={svgHeight} width={svgWidth}
                 viewBox="0 0 576 512">
              <path fill={getColorByPathname("/")}
                    d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
            </svg>
          </IonButton>
        </Link>

        <Link href="/swipe">
          <IonButton fill="clear">
            <svg xmlns="http://www.w3.org/2000/svg" height={svgHeight} width={svgWidth}
                 viewBox="0 0 512 512">
              <path fill={getColorByPathname("/swipe")}
                    d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
          </IonButton>
        </Link>

        <Link href="/message-list">
          <IonButton fill="clear">
            <svg xmlns="http://www.w3.org/2000/svg" height={svgHeight} width={svgWidth}
                 viewBox="0 0 512 512">
              <path fill={getColorByPathname("/message")}
                    d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
            </svg>
          </IonButton>
        </Link>

        <Link href="/mypage">
          <IonButton fill="clear">
            <svg xmlns="http://www.w3.org/2000/svg" height={svgHeight} width={svgWidth}
                 viewBox="0 0 448 512">
              <path fill={getColorByPathname("/mypage")}
                    d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
            </svg>
          </IonButton>
        </Link>
      </div>
    </IonFooter>
  );
};

export default TapBar;
