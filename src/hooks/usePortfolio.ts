import { portfolioCategories, portfolioItems } from '@/data/portfolio'
import type { PortfolioCategory } from '@/types'

export function usePortfolio(category: PortfolioCategory = 'all') {
  const items =
    category === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === category)

  return {
    items,
    all: portfolioItems,
    categories: portfolioCategories,
    isLoading: false as const,
  }
}
