let date = new Date()
let year = date.getFullYear()

let countdown = new Date(`may 21, ${year} 00:00:00`).getTime()

function birthday() {
  let now = new Date().getTime()
  let gap = countdown - now

  let second = 1000
  let minute = 1000 * 60
  let hour = 1000 * 60 * 60
  let day = 1000 * 60 * 60 * 24

  if (gap <= 0 && gap >= -day) {
    console.log('Happy Birthday !!')
    clearInterval(stopCountdown)
    return
  } else if (gap < 0) {
    year++
    countdown = new Date(`may 21, ${year} 00:00:00`).getTime()
    gap = countdown - now
  }

  let days = Math.floor(gap / day)
  let hours = Math.floor((gap % day) / hour)
  let minutes = Math.floor((gap % hour) / minute)
  let seconds = Math.floor((gap % minute) / second)

  console.log(`${days}days ${hours}hr ${minutes}min ${seconds}sec left ...`)
}

let stopCountdown = setInterval(birthday, 1000)
