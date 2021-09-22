
const triPopulariteId = document.getElementById('option-1')
const triDateId = document.getElementById('option-2')
const triTitleId = document.getElementById('option-3')

triPopulariteId.addEventListener('click', stateSort)
triDateId.addEventListener('click', stateSort)
triTitleId.addEventListener('click', stateSort)

let state = 1

function stateSort (e) {
  if (e.target.id === 'option-1') {
    state = 1
  } else if (e.target.id === 'option-2') {
    state = 2
  } else if (e.target.id === 'option-3') {
    state = 3
  }
  sortGallery()
  photographerPageGallery()
  return state
}

async function sortGallery () {
  const dataMedia = await getDataMedia()
  const arrayTri = []

  dataMedia.forEach(data => {
    const stringId = (data.photographerId).toString()
    if (idUrlPage === stringId) {
      arrayTri.push(data)
    }
  })
  if (state === 1) {
    arrayTri.sort(function (a, b) {
      return b.likes - a.likes
    })
    return arrayTri
  } else {
    if (state === 2) {
      arrayTri.sort(function (a, b) {
        return new Date(b.date) - new Date(a.date)
      })
    } else if (state === 3) {
      arrayTri.sort(function compare (a, b) {
        if (a.title < b.title) {
          return -1
        } if (a.title > b.title) {
          return 1
        }
        return 0
      })
    }
    return arrayTri
  }
}
