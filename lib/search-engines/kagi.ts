
import invariant from 'tiny-invariant'
import { defineRenderRoot } from '../mount-container'
import { $ } from '../utils'
import { fromUrlQuery } from './utils/get-query'
import type { SearchEngine } from './utils/types'

export const KAGI_URL = 'https://kagi.com/search'

export const kagi: SearchEngine = {
  id: 'kagi',
  icon: 'i-simple-icons-kagi',
  name: 'Kagi',
  matches: [KAGI_URL],
  getQuery: fromUrlQuery('q'),
  getRenderRoot: defineRenderRoot((container) => {
    const searchContainer = $('#main')
    invariant(searchContainer, 'inject point not found')
    searchContainer.prepend(container)
  }),
}
