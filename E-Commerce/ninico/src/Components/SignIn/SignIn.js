import React from "react";
import { Sign } from "./Sign";
import { Log } from "./Log";
import { PageHeading } from "../PageHeading/PageHeading";

export const SignIn = () => {
  return (
    <div>
      <PageHeading goBacklink="Home" pageTitle="Sign In"/>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 px-10">
        <Sign/>
        <Log/>
      </div>
    </div>
  );
};
