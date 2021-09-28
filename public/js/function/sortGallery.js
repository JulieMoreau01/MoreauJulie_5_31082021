const listItemsSelect = document.querySelectorAll('.list-item')

function selectAction(media) {
  listItemsSelect.forEach(item => {
    item.addEventListener('click', e => {
      stateSort(media, e)
    })
    item.addEventListener('keydown', e => {
      if (e.keyCode === 13) {
        stateSort(media, e)
      }
    })
  })
}

let state = 1

function stateSort (media, e) {
  if (e.target.id === 'option-1') {
    state = 1
  } else if (e.target.id === 'option-2') {
    state = 2
  } else if (e.target.id === 'option-3') {
    state = 3
  }
  sortGallery(media)
  photographerPageGallery(media)
  return state
}

function sortGallery (media) {
  const dataMedia = media
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


const initSort = async () => {
  const { media } = await getData()
  selectAction(media)
  sortGallery(media)
}

initSort()
