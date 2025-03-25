import React from 'react'
import { projects } from '../../data/constants'
import ProjectCards from '../Cards/ProjectCards'

const Projects = () => {
  return (
    <section className="mt-[76px] text-white mx-[10%]">
        <h2 className='text-[35px] font-bold tracking-[1.75px] text-center uppercase'>
            Projects
        </h2>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4 w-full">
            {
              projects.map((project , id) => {
                return <ProjectCards key={id} project={project}/>;
                
                
              })
            }
        </div>
    </section>
  )
}

export default Projects
