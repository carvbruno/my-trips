import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'

import { MapProps } from 'components/Map'
import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function HomeTemplate({ places }: MapProps) {
  return (
    <>
      <NextSeo
        title="My Trips"
        description="A simple website to show my favorites places"
        canonical="https://my-trips.brunocarv.com.br"
      />
      <LinkWrapper href="/about">
        <InfoOutline size={32} aria-label="i-about" />
      </LinkWrapper>
      <Map places={places} />
    </>
  )
}
