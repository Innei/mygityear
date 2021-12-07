import { isNil } from 'lodash-es'
import React, { useEffect } from 'react'
// FIXME: ts not read too large json, make it type intellisense
import scannerData from '../mock/scanner.result.json'

const StoreContext = React.createContext<{ data?: any }>({
  data: scannerData,
})

export const StoreProvider = StoreContext.Provider

export const useStore = () => {
  const { data: $$data } = React.useContext(StoreContext)
  const [data, setData] = React.useState<any>($$data ?? scannerData)
  useEffect(() => {
    if (!isNil($$data)) {
      setData($$data)
    }
  }, [$$data])
  return { data, update: setData } as const
}
