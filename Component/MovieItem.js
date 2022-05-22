import styles from './Movie.module.css'
import { ClockIcon } from '@heroicons/react/outline'
import GenreLabel from './GenreLabel'

const MovieItem = ({title, duration, release_date, genres}) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        {title}
      </div>
      <div className={styles.releasedate}>
        {release_date}
      </div>
      <div className={styles.duration}>
        <ClockIcon className={styles.icon}/>
        {duration}
      </div>
      <div className={styles.genrelabel}>
        {genres.data.map((genre, index) => {
          return(
            <GenreLabel
              key={index}
              genre={genre.attributes.genre}
            />
          )
        })}
      </div>
    </div>
  )
}

export default MovieItem;