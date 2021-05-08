import Page from '@components/page'
import Link from '@components/link'

const About = () => {
  return (
    <Page description="Hi, I'm Deni Pesto. Frontend developer and designer, mechanical keyboard enthusiast, practicing minimalist, and trance lover in search of flow.">
      <article>
        <h1>🦊 Скиталец Дени</h1>
        <p>
          Пишу о своих {' '}
          <Link underline href="/blog">
            шагах в жизни
          </Link>{' '}
          и делюсь тем, что привлекате мой взор.{' '}
          Наблюдаю за  <Link underline href="/vision">
            мирозданием.
          </Link>{' '}
          Изучаю {' '}
          <Link underline href="/blog">
            дизайн, фотографию, кинематограф, живопись, устройство человека и красоту природы.
          </Link>{' '}
        </p>

        <p>
          Здесь  мои  {' '}
          <Link underline href="https://vercel.com" external>
            проекты
          </Link>{' '}
          ✨
        </p>
      </article>
    </Page>
  )
}

export default About
