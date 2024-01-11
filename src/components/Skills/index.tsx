import styles from './styles.module.scss'

export function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <span>My abilities</span>
      <h2>Experience using technologies</h2>
      <div className={styles.grid}>
        <div className={styles.content}>
          <h3 className={styles.title}>
            Frontend Developer
          </h3>
          <div className={styles.box}>
            <div className={styles.group}>
              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>HTML</h3>
                  <span>Advanced</span>
                </div>
              </div>

              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>CSS</h3>
                  <span>Advanced</span>
                </div>
              </div>

              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>Javascript</h3>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>

            <div className={styles.group}>
              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>Bootstrap</h3>
                  <span>Intermediate</span>
                </div>
              </div>

              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>Chakra UI</h3>
                  <span>Basic</span>
                </div>
              </div>

              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>React JS</h3>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.content}>
          <h3 className={styles.title}>
            Backend Developer
          </h3>
          <div className={styles.box}>
            <div className={styles.group}>
              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>PHP</h3>
                  <span>Intermediate</span>
                </div>
              </div>

              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>Node Js</h3>
                  <span>Intermediate</span>
                </div>
              </div>

              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>MySql</h3>
                  <span>Intermediate</span>
                </div>
              </div>
            </div>

            <div className={styles.group}>
              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>Wordpress</h3>
                  <span>Intermediate</span>
                </div>
              </div>

              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>Git</h3>
                  <span>Intermediate</span>
                </div>
              </div>

              <div className={styles.data}>
                <i className='bx bx-badge-check'></i>
                <div>
                  <h3>MongoDb</h3>
                  <span>Basic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}