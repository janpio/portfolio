import Link from 'next/link'
import type { SVGIconProps } from '@/components/icon/SVGIcon'
import { SVGIcon } from '@/components/icon/SVGIcon'

interface IPage {
  title: string
  description: string
  icon: SVGIconProps['name']
  to: string
}

const pages: IPage[] = [
  {
    title: 'Blog',
    description: 'My thoughts on various topics',
    icon: 'blog',
    to: '/blog',
  },
  {
    title: 'Projects',
    description: 'My projects',
    icon: 'project',
    to: '/projects',
  },
  {
    title: 'Contact',
    description: 'Contact me',
    icon: 'contact',
    to: '/contact',
  },
  {
    title: 'About Me',
    description: 'About me',
    icon: 'aboutMe',
    to: '/about',
  },
]

const PageCard: React.FC<IPage> = ({ title, description, icon, to }) => {
  return (
    <Link
      href={{ pathname: to }}
      className="block space-y-2 rounded-md border border-slate-200 bg-white p-6 pt-5 shadow-md transition-shadow duration-300 hover:bg-slate-100 hover:shadow-lg dark:border-gray-200 dark:bg-black/5 dark:shadow-white/10 dark:hover:bg-white/10 dark:hover:shadow-lg dark:hover:shadow-white/20"
    >
      <div className="flex flex-row gap-x-2">
        <SVGIcon name={icon} fontSize={'2em'} />
        <h2 className="text-md mb-2 truncate font-medium leading-snug tracking-tight text-black dark:text-white">
          {title}
        </h2>
      </div>
      <p className="line-clamp-3 truncate text-sm font-normal text-black/10 dark:text-gray-400">{description}</p>
    </Link>
  )
}

const ThePages: React.FC = () => {
  return (
    <section id="pages" className="mx-5 flex flex-col gap-y-3 px-5 py-10">
      <div className="">
        <h2 className="text-sm font-medium uppercase text-white/60">pages</h2>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        {pages.map((page) => {
          return (
            <div className="col-span-1" key={page.title}>
              <PageCard title={page.title} description={page.description} icon={page.icon} to={page.to} />
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default ThePages