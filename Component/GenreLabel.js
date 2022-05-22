import styles from './GenreLabel.module.css'

const GenreLabel = ({genre}) => {
  return (
    <div className={styles.container}>
      <div className={styles.genretext}>
        {genre}
      </div>
    </div>
  )
}

export default GenreLabel;