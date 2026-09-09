import Image from 'next/image'
import { useState } from 'react'
import styles from './styles.module.scss'

type Category = 'all' | 'web' | 'mobile' | 'design'
type Project = {
  title: string
  description: string
  category: Exclude<Category, 'all'>
  image: string
  href: string
  stack: string
}

const projects: Project[] = [
  { title: 'FIEC', description: 'Aplicação web para economia compartilhada.', category: 'web', image: '/images/projects/fiec.jpeg', href: 'https://economia-compartilhada.vercel.app/', stack: 'React · TypeScript' },
  { title: 'Arranjaí', description: 'Plataforma para encontrar prestadores de serviços.', category: 'web', image: '/images/projects/arranja_site.jpeg', href: 'https://leading-page-arranjai.vercel.app/', stack: 'Next.js · React' },
  { title: 'Arranjaí Back Office', description: 'Painel de gestão para operações da plataforma.', category: 'web', image: '/images/projects/arranja_back.jpeg', href: 'https://backofficearranjai.vercel.app/auth/signin', stack: 'Next.js · TypeScript' },
  { title: 'Espaço G5', description: 'Aplicação web para uma experiência digital institucional.', category: 'web', image: '/images/projects/espacog5.jpeg', href: 'https://espacog5.com/', stack: 'React · CSS' },
  { title: 'FG Academy', description: 'Plataforma web de formação e aprendizagem.', category: 'web', image: '/images/projects/fgacademy.jpeg', href: 'https://fgacademy.ao/', stack: 'React · UI' },
  { title: 'Akiu', description: 'Interface web para um produto digital.', category: 'web', image: '/images/projects/akiu.jpeg', href: 'https://super-paprenjak-463334.netlify.app/', stack: 'React · JavaScript' },
  { title: 'DT Money', description: 'Aplicação para acompanhamento de finanças pessoais.', category: 'web', image: '/images/projects/dtmoney.jpeg', href: 'https://65a39758e7ac41552ac30c02--beamish-vacherin-08bca6.netlify.app/', stack: 'React · TypeScript' },
  { title: 'Dash Go', description: 'Dashboard responsivo para visualização de dados.', category: 'web', image: '/images/projects/dashgo.jpeg', href: 'https://lighthearted-alpaca-f33b45.netlify.app/dashboard', stack: 'React · Charts' },
]

export function Work() {
  const [category, setCategory] = useState<Category>('all')
  const visibleProjects = projects.filter(project => category === 'all' || project.category === category)

  return (
    <section id="work" className={styles.work}>
      <span>Projetos em destaque</span>
      <h2>Alguns trabalhos que desenvolvi</h2>
      <div className={styles.filters} role="group" aria-label="Filtrar projetos">
        {(['all', 'web', 'mobile', 'design'] as Category[]).map(item => (
          <button
            type="button"
            key={item}
            aria-pressed={category === item}
            onClick={() => setCategory(item)}
            className={`${styles.item} ${category === item ? styles.activeWork : ''}`}
          >
            {{ all: 'Todos', web: 'Web', mobile: 'Mobile', design: 'Design' }[item]}
          </button>
        ))}
      </div>
      <div className={`${styles.grid} itemsGrid`}>
        {visibleProjects.length === 0 && (
          <p role="status">Ainda não há projetos publicados nesta categoria.</p>
        )}
        {visibleProjects.map(project => (
          <article className={`${styles.card} itemCard`} key={project.title}>
            <Image
              src={project.image}
              alt={`Pré-visualização do projeto ${project.title}`}
              width={1184}
              height={655}
              layout="responsive"
              className={styles.cardImg}
            />
            <div className={styles.cardData}>
              <span className={styles.cardDescription}>{project.description}</span>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <small>{project.stack}</small>
              <a href={project.href} target="_blank" rel="noreferrer" className={styles.cardButton}>
                Ver projeto <i className="bx bx-right-arrow-alt"></i>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
