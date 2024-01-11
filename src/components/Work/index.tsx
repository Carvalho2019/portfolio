import styles from './styles.module.scss'
import Image from 'next/image'
import imgWork from './../../assets/work1.jpeg'
import mixitup from 'mixitup'
import { useEffect, useState } from 'react'

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
    }, []); */

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
            src={imgWork}
            alt="Picture of the author"
            layout="responsive"
            className={styles.cardImg}
          />
          <div className={styles.cardData}>
            <span className={styles.cardDescription}>
              Web Design Reality people go in, free call me on maybe run  
            </span>
            <h3 className={styles.cardTitle}> 
              Page for instagram
            </h3>
            <a href='#' className={styles.cardButton}>
              Open Demo <i className='bx bx-right-arrow-alt'></i>
            </a> 
          </div>
          
        </div>

        <div data-order="2" className={`${styles.card} itemCard mix mobile`}>
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


        <div data-order="3" className={`${styles.card} itemCard mix design`}>
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
          
        </div>


      </div>
    </section>
  )
}