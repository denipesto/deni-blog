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
          Изучаю дизайн, фотографию, кинематограф, живопись, устройство человека и красоту природы.
        </p>

        <p>
          Подписаться на мой  {' '}
          <Link underline href="https://instagram.com/denipesto" external>
            инстаграм
          </Link>{' '}
          ✨
        </p>
      </article>
    </Page>
  )
}

export default About
