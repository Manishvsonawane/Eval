import Head from 'next/head'
import Image from 'next/image'
import { Fresca, Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { getImageSize } from 'next/dist/server/image-optimizer'
import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <div
         style={{
              width: "98%",
              height:"85px",
              border:"1px solid grey",
              display:"flex",
              justifycontent: "space-around",
              alignItems: "center",
            
            }}
          >
            <p>Manish Sonawane</p>
            <p>Projects</p>
            <p>Education</p>
          </div>
          <div style={{ width:"22%", height:"750%", border:"1px solid white"}}>
            <img
            src={git.avatar_url}
            alt="img"
            width={"230px"}
            style={{ borderRadius: "35px" }}
          />
          <h2>{git.name}</h2>
          <p style={{ color: "red" }}>{git.login}</p>
          <br />
          <p>{git.bio}</p>
          <button>
          <Link href= "https://drive.google.com/file/d/1zZbTuek8GcLOoQm2Wz6c9mZiH5B6pM2g/view?usp=sharing"> 
            Resume
            </Link>
         </button>
         <button>
             <Link href="https://github.com/Manishvsonawane">follow</Link>
             
         </button>
        </div>
        <div style={{display:"grid",width:"20%",gridTemplateColumns:"respet(3,1fr)", border:"1px solid white"}}>
          <p>HTML</p>
          <p>CSS</p>
          <p>Javascript</p>
          <p>React</p>
          <p>Typescript</p>
          <p>Next.JS</p>
          <p>NodeJS</p>
          <p>MongoDB</p>
          <p>Git</p>


      </div>
      <div style={{display:"grid",gridTemplateRows:"repeat(3,1fr)",width:"20%",border:"1px solid white"}}>
      </div>
      </div>


      
      </>
      );
   } 
   
   export async function getServerSideProps() {
    const Mdata = await fetch("https://api.github.com/users/Manishvsonawane")
    const mans = await Mdata.json();
    console.log(mans);
    return{
      props: {

        git: mans,
      },
    };
   }


    
      
        


    

