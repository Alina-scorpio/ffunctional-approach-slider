(function(){
  const container = document.querySelector('#carousel');
  
  const slidesContainer = container.querySelector('#slides-container');
  const indicatorsContainer = container.querySelector('#indicators-container');
  const controlsContainer = container.querySelector('#controls-container');
  
  const slides = slidesContainer.querySelectorAll('.slide');
  const indicators = indicatorsContainer.querySelectorAll('.indicator');
  const pausePlayBtn = controlsContainer.querySelector('#pausePlay-btn img');
  const nextBtn = controlsContainer.querySelector('#next-btn');
  const prevBtn = controlsContainer.querySelector('#prev-btn');
  
  let currentSlide = 0
  let timerId = null
  let isPlaying = true
  let startPosX = null
  let endPosX = null
  const interval = 2000
  
  function goToSlide (n){
    slides[currentSlide].classList.toggle('slide-current')
    indicators[currentSlide].classList.toggle('indicator-current')
    currentSlide = (n + slides.length) % slides.length
    slides[currentSlide].classList.toggle('slide-current')
    indicators[currentSlide].classList.toggle('indicator-current')
  }
  function gotoPrev() {
    goToSlide(currentSlide - 1)
  }
  function goToNext() {
    goToSlide(currentSlide + 1)
  }
  function tick() {
    timerId = setInterval(goToNext, interval)
  }
  function pauseHandler() {
    if (!isPlaying) return
    clearInterval(timerId)
    pausePlayBtn.src = './assets/play.svg';
    isPlaying = false
  }
  function playHandler() {
    tick()
    pausePlayBtn.src = './assets/pause.svg';
    isPlaying = true
  }
  function pausePlayHandler() {
    isPlaying ? pauseHandler() : playHandler()
  }
  function prevHandler() {
    pauseHandler()
    gotoPrev()
  }
  function nextHandler() {
    pauseHandler()
    goToNext()
  }
  function indicatorHandler(e) {
    const { target } = e
    if (target && target.classList.contains('indicator')) {
      pauseHandler()
      goToSlide(+target.dataset.slideTo)
    }
  }
  function pressKey(e) {
    const { code } = e
    // Убираем значение по умолчанию при нажатии
    e.preventDefault()
    if (code === 'Space') pausePlayHandler()
    if (code === 'ArrowLeft') prevHandler()
    if (code === 'ArrowRight') nextHandler()
  }
  function swipeStart(e) {
    startPosX = e instanceof MouseEvent
      ? e.pageX // MouseEvent
      : e.changedTouches[0].pageX // TouchEvent
  }
  function swipeEnd(e) {
    endPosX = e instanceof MouseEvent
      ? e.pageX // MouseEvent
      : endPosX = e.changedTouches[0].pageX // TouchEvent
    if (endPosX - startPosX > 100) prevHandler()
    if (endPosX - startPosX < -100) nextHandler()
  }
  function initListeners() {
    pausePlayBtn.addEventListener('click', pausePlayHandler)
    prevBtn.addEventListener('click', prevHandler)
    nextBtn.addEventListener('click', nextHandler)
    indicatorsContainer.addEventListener('click', indicatorHandler)
    container.addEventListener('touchstart', swipeStart)
    container.addEventListener('mousedown', swipeStart)
    container.addEventListener('touchend', swipeEnd)
    container.addEventListener('mouseup', swipeEnd)
    document.addEventListener('keydown', pressKey)
  }
  function init() {
    initListeners()
    tick()
  }
  init()
  }())
  
  
  
  