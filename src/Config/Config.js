import { FaPython } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi"
import { SiMinds } from "react-icons/si";
import { SiDatacamp } from "react-icons/si";

export const SkillSet=[
    {
        id: "1",
        name: "Matlab",
        imgsrc: "images/Matlab.png"
    },
    {
        id: "2",
        name: "Data Science",
        imgsrc: "images/data-science.png"
    },
    {
        id: "3",
        name: "Python",
        imgsrc: "images/python.png"
    },
    {
        id: "4",
        name: "Arduino",
        imgsrc: "images/arduino.png"
    },
    {
        id: "5",
        name: "English",
        imgsrc: "images/english.png"
    },

]

export const ProjImg = [
    {
        id: "1",
        name: "Data Science",
        category: "Certificate",
        imgsrc: "projectImg/cetificates/c1.jpg",
        href: "https://i.ibb.co/BZHgvjz/c1.jpg"
    },
    {
        id: "2",
        name: "Introductory Python for Ai",
        category: "Certificate",
        imgsrc: "projectImg/cetificates/c2.png",
        href: "https://i.ibb.co/dcfrVnD/c2.png"
    },
    {
        id: "3",
        name: "Analysis of Euler Bernoulli beam deflection (simply support) with PINN",
        category: "Project",
        imgsrc: "projectImg/projects/p1.png",
        href: "https://i.ibb.co/j6x3f8y/p1.png"
    },
    {
        id: "4",
        name: "Simulation of flow around a cylindrical cylinder (CFD) LBM method",
        category: "Project",
        imgsrc: "projectImg/projects/p2.png",
        href: "https://i.ibb.co/RTZyGG2/p2.png"
    },

    
    ]
export const Experience=[
    
    {
        id: "1",
        date: "2023",
        name: "Teaching assistant",
        company: "Urmia University of Technology",
        desc: ["Teaching assistant, Thermodynamics."]
    },
    {
        id: "2",
        date: "2022",
        name: "Teaching assistant",
        company: "Urmia University of Technology",
        desc: ["Teaching assistant, Strength of materials."]
    },
    {
        id: "3",
        date: "2023",
        name: "Teaching assistant",
        company: "Urmia University of Technology",
        desc: ["Teaching assistant, Python programming language."]
    },
    
]
export const Education=[

    {
        id: 1,
        date: "Sep 2021-Present",
        name: "Urmia University of Technology",
        company: "West Azerbaijan - Urmia",
        desc: "bachelor's degree, Aerospace engineering"
    },
]
export const Services=[
    {
        id: 1,
         icon: <FaPython />,
         name: "Python Developer",
    },
    {
        id: 2,
         icon: <GiArtificialIntelligence />,
         name: "Machine Learning",
    },
    {
        id: 3,
         icon: <SiMinds />,
         name: "Deep Learning",
    },
    {
        id: 4,
         icon: <SiDatacamp />,
         name: "Data Science",
    },
    
]