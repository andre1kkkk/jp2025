export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `conte é ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter - 10))
  setCounter(20)
}
