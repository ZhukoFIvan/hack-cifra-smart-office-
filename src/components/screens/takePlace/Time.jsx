const Time = () => {
	return (
		<section>
			<div>Время брони</div>
			<div className={styles.time}>
				<button>00:00</button>
				<div className={styles.line}></div>
				<button>12:00</button>
			</div>
			<button>Забронировать</button>
		</section>
	)
}

export default Time
