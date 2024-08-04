import Image from 'next/image'
import { Project } from '@/lib/interface';
import { BsGithub } from 'react-icons/bs';
import { AiFillEye } from 'react-icons/ai';
import Skeleton from 'react-loading-skeleton';
import style from './projects.module.scss';
import { store } from '@/redux-store/store';
import Tag from '@/components/Tag';

const {work_container, workBox, project_image, project_view} = style;

const Projects: React.FC = () => {
  const { project: { projects, loading } } = store.getState();
  
  return (
    <section className="flex justify-center items-center px-16 py-20 w-full">
      <div className="container flex flex-col items-center">
        <div className="flex text-center relative">
          <h2 className="z-10 flex-auto my-auto max-md:max-w-full">Portfolio . <span className='underline'>Projects</span></h2>
          <div className="absolute left-1/2 top-[50%] md:top-0 bg-primaryClr h-[60px] w-[150px] md:h-[80px] md:w-[250px] z-[-1]" />
        </div>

        <div className={`${work_container} mt-20`}>
            {loading ? (
              <SkeletonLoading />
            ) : (
              projects?.filter((_: any, idx: number) => idx < 8)
                .map(({ _id, title, categories, thumbnail }: Project) => (
                  <div key={_id} className={workBox}>
                    <div className={project_image}>
                      <Image
                        src={`/upload/projects/${thumbnail}`}
                        width={290}
                        height={450}
                        alt={title}
                        className='w-full h-full object-cover object-top'
                      />

                      <div className={project_view}>
                        <BsGithub size={25} />
                        <AiFillEye size={25} />
                      </div>
                    </div>

                    <h5 className='mt-3 font-bold'>{title}</h5>
                    <div className="flex gap-2 justify-start mt-3 wrap">
                      {categories?.map((cat, idx) => (
                        <Tag key={idx} text={cat.value} />
                      ))}
                    </div>
                  </div>
              ))
            )
          }
        </div>


        <div className="flex flex-col items-center mt-20 max-md:mt-10 max-md:max-w-full">
            <h4 className="text-lightText-dark font-normal">View All The Projects</h4>
            <Image 
              loading="lazy" 
              src="/Arrow.png" 
              alt="arrow" 
              width={152}
              height={100}
              className="max-w-full w-[152px]"
            />
        </div>

      </div>
    </section>
  )
}

export default Projects


const SkeletonLoading = () => {
  return (
    <>
      {[1, 2, 3].map((skeleton) => (
        <div key={skeleton} className={workBox}>
          <div style={{ display: 'flex' }}>
            <Skeleton
              width={290}
              height={450}
              containerClassName="avatar-skeleton flex flex-1 bg-[#444] animate-pulse"
              baseColor="#202020"
              highlightColor="#444"
            />
          </div>
          <p>
            <Skeleton count={2} containerClassName='flex flex-1 bg-[#444] animate-pulse' />
          </p>
          <h3>
            <Skeleton count={1} containerClassName='flex flex-1 bg-[#444] animate-pulse' />
          </h3>
        </div>
      ))}
    </>
  );
};