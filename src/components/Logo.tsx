import React from "react";
import { apertureOutline } from "ionicons/icons";
import { IonIcon } from "@ionic/react";

const Logo = () => {
    return (
        <div>
            <a href="#" className="relative z-10 w-10 h-10 inline-block">
                <div
                    className="absolute inset-0 bg-gradient-to-r from-red-400 to-orange-400 rounded-xl
                    blur opcaity-15 hover:opacity-90 transition duration-300"
                ></div>
                <IonIcon
                    icon={apertureOutline}
                    className="text-red-900 w-10 h-10 hover:rotate-180 transition-transform duration-600 ease-in-out"
                ></IonIcon>
            </a>
        </div>
    );
};

export default Logo;
