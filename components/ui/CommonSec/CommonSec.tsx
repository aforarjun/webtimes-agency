import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './commonSec.module.scss';
import Button from '../../Button';

const { comSec, container, comSec_text, comSec_image } = styles;

type PropType = {
    tag: string,
    title: string,
    content: string,
    image: string,
    buttonTitle: string,
    link: string;
    flip?:boolean;
    component?: React.ReactNode
    imageFit?: string
}

function CommonSec({ tag, title, content, image, buttonTitle, link, flip, component, imageFit }: PropType) {
    return (
        <section className={comSec}>
            <div className={`${container} container`}>
                <div className={comSec_text} style={{order: flip ? 2 : 1}}>
                    <h4 className='topTag text-primaryClr text-base'>{tag}</h4>
                    <h2 dangerouslySetInnerHTML={{ __html: title }} />
                    <p dangerouslySetInnerHTML={{ __html: content }} />

                    {component}

                    <Link href={link} >
                        <Button title={buttonTitle} wrapperStyle={{ marginTop: 30 }} />
                    </Link>
                </div>

                <div className={comSec_image} style={{order: flip ? 1 : 2}}>
                    <Image src={image} alt={title} sizes='500px' fill style={{objectFit: imageFit === 'contain' ? 'contain' : 'cover'}} />
                </div>
            </div>
        </section>
    )
}

export default CommonSec