"use client";

import React, {useState, useEffect, useRef} from 'react';
import {isMobile} from "@/utils/device-detector";
import PhoneFrame from "@/app/PhoneFrame";
import LoginStatus from "@/app/components/LoginStatus";
import TapBar from "@/app/TapBar";
import Image from "next/image";

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayoutByDevice = ({children}: RootLayoutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [deviceStatus, setDeviceStatus] = useState(false);

  useEffect(() => {
    setDeviceStatus(isMobile());
    const handleResize = () => {
      if (ref.current) {
        const scaleValue = window.innerHeight / 1012;
        console.log("scaleValue is..", scaleValue)
        ref.current.style.transform = `scale(${scaleValue})`;
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // 초기 스케일 설정

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex h-full w-screen overflow-hidden bg-[#f5f5f5] bg-cover bg-center">
      {deviceStatus ? (
        <div className="relative mx-auto h-full w-full bg-white">
          {children}
        </div>
      ) : (
        <>
          <div>
            {/*<LoginStatus />*/}
            <Image
              src="/landing-text.svg"
              alt="home"
              className="fixed left-[5.5%] top-[10vh] z-10 hidden w-[38rem] xl:block"
              width={800}
              height={800}
              priority
            />
            <Image
              src="/landing-page.jpeg"
              alt="home"
              className="fixed bottom-0 left-0 hidden w-[45%] xl:block"
              width={800}
              height={800}
              priority
            />
          </div>
          <div className="fixed -top-[0.3%] left-1/2 h-[90vh] w-[53rem] -translate-x-[55%] xl:-translate-x-0">
            <div
              ref={ref}
              style={{transformOrigin: 'top left'}}
            >
              <PhoneFrame className="pointer-events-none absolute left-0 top-0 z-[9999]" />
              <div className="absolute left-[24.6%] top-[2.4rem] h-[5rem] w-[83.0%] bg-white" />
              <div className="absolute left-[24.4%] top-[6.3rem] h-[92.4rem] w-[84%] overflow-hidden bg-white">
                {children}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RootLayoutByDevice;
