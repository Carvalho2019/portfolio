import styles from './styles.module.scss'
import Image from 'next/image'
import imgWork from './../../assets/projects/work1.jpeg'
import imgArranjaWeb from './../../assets/projects/arranja_site.jpeg'
import imgArranjaBack from './../../assets/projects/arranja_back.jpeg'
import imgFiec from './../../assets/projects/fiec.jpeg'
import imgEspaco from './../../assets/projects/espacog5.jpeg'
import imgFgacademy from './../../assets/projects/fgacademy.jpeg'
import imgAkiu from './../../assets/projects/akiu.jpeg'
import imgReseSocial from './../../assets/projects/rede_social.jpeg'
import imgDtmoney from './../../assets/projects/dtmoney.jpeg'
import imgDashgo from './../../assets/projects/dashgo.jpeg'
import mixitup from 'mixitup'
import { useEffect, useState } from 'react'

/*
import dynamic from "next/dynamic";
const mixitup = dynamic(() => import('mixitup'), {
  ssr: false,
}); */


export function Work() {
  const [isConfirme, setIsConfirme] = useState('all')
  
    /* 
    useEffect(() => {
      mixitup(".itemsGrid", {
        selectors: {
          target: ".itemCard",
        },
        animation: {
          duration: 500
        }
      });
    }, []); 
    */

  return (
    <section id='work' className={styles.work} >
      <span>
        Recent Works
      </span>
      <h2>Take a look at my highlighted projects</h2>
      <div className={styles.filters}>
        <span onClick={() => setIsConfirme('all')} data-filter="all" className={`${styles.item} ${isConfirme === 'all' && styles.activeWork}`}>All</span>
        <span onClick={() => setIsConfirme('web')} data-filter=".web" className={`${styles.item} ${isConfirme === 'web' && styles.activeWork}`}>Web</span>
        <span onClick={() => setIsConfirme('mobile')} data-filter=".mobile" className={`${styles.item} ${isConfirme === 'mobile' && styles.activeWork}`}>Mobile</span>
        <span onClick={() => setIsConfirme('design')} data-filter=".design" className={`${styles.item} ${isConfirme === 'design' && styles.activeWork}`}>Design</span>
      </div>

      <div className={`${styles.grid} itemsGrid`}>
        <div data-order="1" className={`${styles.card} itemCard mix web`}>
          <Image
            src={imgFiec}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Aplicação web
            </span>
            <h3 className={styles.cardTitle}>
              FIEC
            </h3>
            <a href='https://economia-compartilhada.vercel.app/' target='_blank' rel='noreferrer' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>

        </div>


        <div data-order="2" className={`${styles.card} itemCard mix web`}>
          <Image
            src={imgArranjaWeb}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Site informativo
            </span>
            <h3 className={styles.cardTitle}>
              Arranjaí - prestação de serviços
            </h3>
            <a href='https://leading-page-arranjai.vercel.app/' target='_blank' rel='noreferrer' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>

        </div>

        <div data-order="3" className={`${styles.card} itemCard mix web`}>
          <Image
            src={imgArranjaBack}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Sistema de Gerenciamento
            </span>
            <h3 className={styles.cardTitle}>
              Arranjaí - back office
            </h3>
            <a href='https://backofficearranjai.vercel.app/auth/signin' target='_blank' rel='noreferrer' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>

        </div>
        <div data-order="4" className={`${styles.card} itemCard mix web`}>
          <Image
            src={imgEspaco}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Aplicação Web
            </span>
            <h3 className={styles.cardTitle}>
              Espaço G5
            </h3>
            <a href='https://espacog5.com/' target='_blank' rel='noreferrer' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>

        </div>
        <div data-order="5" className={`${styles.card} itemCard mix web`}>
          <Image
            src={imgFgacademy}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Aplicação Web
            </span>
            <h3 className={styles.cardTitle}>
              FG Academy
            </h3>
            <a href='https://fgacademy.ao/' target='_blank' rel='noreferrer' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>

        </div>

        <div data-order="5" className={`${styles.card} itemCard mix web`}>
          <Image
            src={imgReseSocial}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Aplicação Web
            </span>
            <h3 className={styles.cardTitle}>
              Example Of Post
            </h3>
            <a href='https://dapper-selkie-0dbfea.netlify.app/' target='_blank' rel='noreferrer' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>

        </div>

        <div data-order="5" className={`${styles.card} itemCard mix web`}>
          <Image
            src={imgAkiu}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Aplicação Web
            </span>
            <h3 className={styles.cardTitle}>
              Akiu
            </h3>
            <a href='https://super-paprenjak-463334.netlify.app/' target='_blank' rel='noreferrer' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>

        </div>
        <div data-order="6" className={`${styles.card} itemCard mix web`}>
          <Image
            src={imgDtmoney}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Aplicação Web
            </span>
            <h3 className={styles.cardTitle}>
              Dt money
            </h3>
            <a href='https://65a39758e7ac41552ac30c02--beamish-vacherin-08bca6.netlify.app/' target='_blank' rel='noreferrer' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>

        </div>
        <div data-order="7" className={`${styles.card} itemCard mix web`}>
          <Image
            src={imgDashgo}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Dashboard General
            </span>
            <h3 className={styles.cardTitle}>
              Dash GO
            </h3>
            <a href='https://lighthearted-alpaca-f33b45.netlify.app/dashboard' target='_blank' rel='noreferrer' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a>
          </div>

        </div>
        {/*
        <div data-order="4" className={`${styles.card} itemCard mix mobile`}>
          <Image
            src={imgWork}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              App movil  
            </span>
            <h3 className={styles.cardTitle}> 
              Page for instagram Brand Design
            </h3>
            <a href='#' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a> 
          </div>
          
        </div>


        <div data-order="5" className={`${styles.card} itemCard mix design`}>
          <Image
            src={imgWork}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Brand Design
            </span>
            <h3 className={styles.cardTitle}> 
              Page for instagram
            </h3>
            <a href='#' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a> 
          </div>
          
  </div> */}


      </div>
    </section>
  )
}