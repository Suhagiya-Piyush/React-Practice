import React from "react";
import { Card } from "./Card";
import Data from "./Data";
import { Nav } from "./Nav";

export const Home = () => {
  return (
    <div className="min-h-[100vh] sm:min-w-[100%]">
      <div className=" container mx-auto py-4">
        <Nav/>

        <div className="flex justify-around flex-wrap">
          {Data.map((cValue, idx, arr) => {
            return (
              <>
                <Card
                  id={idx}
                  name={cValue.name}
                  age={cValue.age}
                  email={cValue.email}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
