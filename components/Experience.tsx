import React from 'react'
import { Button } from "./ui/MovingBorders"
import { workExperience } from "@/data";
const Experience = () => {
  return (
    <div className="py-20 relative z-[20]" id="experience">
    <h1 className="heading">
    Certifications &  <span className="text-purple"> Achievements</span>
    </h1>
    <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
    {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
             
              borderRadius: `calc(1.75rem* 0.96)`,
              position: 'relative',
              zIndex: 20
            }}
     
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 relative z-[20]"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-5 py-6 lg:p-8 gap-4">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-2">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
        </div>
        </div>
  )
}

export default Experience;