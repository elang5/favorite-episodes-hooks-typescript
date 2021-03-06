import React from 'react'
import { Store } from '../Store'
import { IEpisodeProps } from '../interfaces/interfaces'
import { toggleFavAction } from '../actions/Actions'

const EpisodeList = React.lazy<any>(() => import('./EpisodeList'))

export default function FavPage(): JSX.Element {
  const { state, dispatch } = React.useContext(Store)
  const props: IEpisodeProps = {
    episodes: state.favorites,
    store: { state, dispatch },
    toggleFavAction,
    favorites: state.favorites
  }

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodeList {...props} />
      </div>
    </React.Suspense>
  )
}
